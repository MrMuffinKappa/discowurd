import {
  applyTranslations,
  getFormatTitle,
  getSampleText,
  initLanguageSelector,
  t,
} from './i18n.js';
import { burstConfetti } from './confetti.js';
import { GLITCH_LEVELS, glitchText } from './glitch.js';
import { isMultiquoteContinuation, prepareTextForDiscord } from './discord.js';
import {
  getFormatButtonContent,
  getGlitchButtonContent,
  replaceButtonSvg,
  useCustomIcons,
} from './icons.js';

const FORMATS = [
  { id: 'bold', label: 'B', prefix: '**', suffix: '**', group: 'inline' },
  { id: 'italic', label: 'I', prefix: '*', suffix: '*', group: 'inline' },
  { id: 'underline', label: 'U', prefix: '__', suffix: '__', group: 'inline' },
  { id: 'boldItalic', label: 'BI', prefix: '***', suffix: '***', group: 'inline' },
  { id: 'underlineBold', label: 'UB', prefix: '__**', suffix: '**__', group: 'inline' },
  { id: 'underlineItalic', label: 'UI', prefix: '__*', suffix: '*__', group: 'inline' },
  { id: 'underlineBoldItalic', label: 'UBI', prefix: '__***', suffix: '***__', group: 'inline' },
  { id: 'strikethrough', label: 'S', prefix: '~~', suffix: '~~', group: 'inline' },
  { id: 'spoiler', label: '||', prefix: '||', suffix: '||', group: 'inline' },
  { id: 'code', label: '</>', prefix: '`', suffix: '`', group: 'code' },
  { id: 'codeblock', label: '```', prefix: '```\n', suffix: '\n```', group: 'code' },
  { id: 'h1', label: 'H1', linePrefix: '# ', group: 'block' },
  { id: 'h2', label: 'H2', linePrefix: '## ', group: 'block' },
  { id: 'h3', label: 'H3', linePrefix: '### ', group: 'block' },
  { id: 'subtext', label: '-#', linePrefix: '-# ', group: 'block' },
  { id: 'quote', label: '>', linePrefix: '> ', group: 'block' },
  { id: 'multiquote', label: '>>>', linePrefix: '>>> ', group: 'block' },
  { id: 'list', label: '•', linePrefix: '- ', group: 'block' },
  { id: 'link', label: '🔗', custom: true, group: 'block' },
];

const DB_NAME = 'discord-formater';
const DB_VERSION = 1;
const STORE_NAME = 'emojis';

const editor = document.getElementById('editor');
const toolbar = document.getElementById('toolbar');
const selectionPopup = document.getElementById('selection-popup');
const preview = document.getElementById('preview');
const copyBtn = document.getElementById('copy-btn');
const copyFeedback = document.getElementById('copy-feedback');
const sampleTextBtn = document.getElementById('sample-text-btn');
const emojiModal = document.getElementById('emoji-modal');
const emojiPickerBtn = document.getElementById('emoji-picker-btn');
const emojiGrid = document.getElementById('emoji-grid');
const emojiEmpty = document.getElementById('emoji-empty');
const emojiUpload = document.getElementById('emoji-upload');
const uploadZone = document.getElementById('upload-zone');
const emojiNameInput = document.getElementById('emoji-name');
const emojiLinkInput = document.getElementById('emoji-link');
const emojiLinkSaveBtn = document.getElementById('emoji-link-save');
const langSelectorWrap = document.getElementById('lang-selector-wrap');
const glitchBtn = document.getElementById('glitch-btn');
const glitchModal = document.getElementById('glitch-modal');
const glitchLevels = document.getElementById('glitch-levels');
const glitchPreviewInput = document.getElementById('glitch-preview-input');
const glitchPreviewOutput = document.getElementById('glitch-preview-output');
const glitchRegenerateBtn = document.getElementById('glitch-regenerate');
const glitchApplySelectionBtn = document.getElementById('glitch-apply-selection');
const glitchApplyAllBtn = document.getElementById('glitch-apply-all');

const GLITCH_LEVEL_KEY = 'discord-formater-glitch-level';

const COPY_EASTER_EGG = [
  'Copied!',
  'Double copy!',
  'Triple copy!',
  'Dude stop!',
  'COPIED',
  'COPIEEEEED',
  'MEGA COPY',
];

let copyClickCount = 0;
let copyFeedbackHideTimer = null;
let copyIdleTimer = null;

let emojis = [];
let emojiUrlCache = new Map();
let currentGlitchLevel = localStorage.getItem(GLITCH_LEVEL_KEY) || 'normal';

function openDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = (e) => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'name' });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function loadEmojis() {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readonly');
    const store = tx.objectStore(STORE_NAME);
    const request = store.getAll();
    request.onsuccess = () => resolve(request.result || []);
    request.onerror = () => reject(request.error);
  });
}

async function saveEmoji(name, blob, link = '') {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    const request = store.put({ name, blob, link: link.trim(), createdAt: Date.now() });
    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
  });
}

async function deleteEmoji(name) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    const request = store.delete(name);
    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
  });
}

function getEmojiUrl(name, blob) {
  if (emojiUrlCache.has(name)) return emojiUrlCache.get(name);
  const url = URL.createObjectURL(blob);
  emojiUrlCache.set(name, url);
  return url;
}

function getEmojiDisplayUrl(emoji) {
  if (emoji.link) return emoji.link;
  return getEmojiUrl(emoji.name, emoji.blob);
}

function createFormatButton(fmt, compact = false) {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'btn-format';
  if (useCustomIcons && fmt.id) {
    btn.classList.add('btn-format--icon');
  }
  btn.title = getFormatTitle(fmt.id);
  btn.dataset.formatId = fmt.id;
  btn.innerHTML = getFormatButtonContent(fmt);
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    applyFormat(fmt.id);
    hideSelectionPopup();
  });
  return btn;
}

function rebuildFormatControls() {
  toolbar.innerHTML = '';
  selectionPopup.innerHTML = '';
  buildToolbar();
  buildSelectionPopup();
}

function onLanguageChange() {
  rebuildFormatControls();
  buildGlitchLevels();
  emojiLinkSaveBtn.textContent = t('emoji.save');
  renderEmojiGrid();
  updatePreview();
  updateGlitchPreview();
}

function buildToolbar() {
  const groups = ['inline', 'code', 'block'];
  const groupLabels = { inline: null, code: null, block: null };

  groups.forEach((group, i) => {
    const groupEl = document.createElement('div');
    groupEl.className = 'toolbar-group';
    FORMATS.filter((f) => f.group === group).forEach((fmt) => {
      groupEl.appendChild(createFormatButton(fmt));
    });
    toolbar.appendChild(groupEl);
    if (i < groups.length - 1) {
      const divider = document.createElement('div');
      divider.className = 'toolbar-divider';
      toolbar.appendChild(divider);
    }
  });

  const glitchDivider = document.createElement('div');
  glitchDivider.className = 'toolbar-divider';
  toolbar.appendChild(glitchDivider);

  const glitchGroup = document.createElement('div');
  glitchGroup.className = 'toolbar-group';
  const glitchToolbarBtn = document.createElement('button');
  glitchToolbarBtn.type = 'button';
  glitchToolbarBtn.className = 'btn-format';
  if (useCustomIcons) glitchToolbarBtn.classList.add('btn-format--icon');
  glitchToolbarBtn.title = getFormatTitle('glitch');
  glitchToolbarBtn.innerHTML = getGlitchButtonContent();
  glitchToolbarBtn.addEventListener('click', () => openGlitchModal());
  glitchGroup.appendChild(glitchToolbarBtn);
  toolbar.appendChild(glitchGroup);
}

function createGlitchPopupButton() {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'btn-format';
  if (useCustomIcons) btn.classList.add('btn-format--icon');
  btn.title = getFormatTitle('glitch');
  btn.innerHTML = getGlitchButtonContent();
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    openGlitchModal(true);
    hideSelectionPopup();
  });
  return btn;
}

function buildSelectionPopup() {
  const inlineFormats = FORMATS.filter((f) => f.group === 'inline' || f.group === 'code');
  inlineFormats.forEach((fmt) => {
    selectionPopup.appendChild(createFormatButton(fmt, true));
  });
  selectionPopup.appendChild(createGlitchPopupButton());
}

function getSelection() {
  return {
    start: editor.selectionStart,
    end: editor.selectionEnd,
    text: editor.value.substring(editor.selectionStart, editor.selectionEnd),
  };
}

function setSelection(start, end) {
  editor.focus();
  editor.setSelectionRange(start, end);
}

function applyFormat(formatId) {
  const fmt = FORMATS.find((f) => f.id === formatId);
  if (!fmt) return;

  if (fmt.custom && formatId === 'link') {
    applyLinkFormat();
    return;
  }

  const { start, end, text } = getSelection();
  const value = editor.value;

  if (fmt.linePrefix !== undefined) {
    applyLinePrefix(fmt.linePrefix, start, end);
    updatePreview();
    return;
  }

  const placeholder = t('format.placeholder');
  const before = value.substring(0, start);
  const after = value.substring(end);
  const wrapped = fmt.prefix + (text || placeholder) + fmt.suffix;
  editor.value = before + wrapped + after;

  const newStart = start + fmt.prefix.length;
  const newEnd = newStart + (text || placeholder).length;
  setSelection(newStart, newEnd);
  updatePreview();
}

function applyLinePrefix(prefix, start, end) {
  const value = editor.value;
  const lineStart = value.lastIndexOf('\n', start - 1) + 1;
  const lineEnd = value.indexOf('\n', end);
  const blockEnd = lineEnd === -1 ? value.length : lineEnd;
  const block = value.substring(lineStart, blockEnd);

  const lines = block.split('\n');
  const prefixed = lines.map((line, index) => {
    if (prefix === '>>> ') {
      const content = line.replace(/^>>>\s?/, '').replace(/^>\s/, '');
      return index === 0 ? `>>> ${content}` : content;
    }
    if (line.startsWith(prefix)) return line;
    return prefix + line;
  }).join('\n');

  let suffix = value.substring(blockEnd);
  if (prefix === '>>> ' && suffix.length > 0 && suffix.startsWith('\n') && !suffix.startsWith('\n\n') && suffix.trim()) {
    suffix = `\n${suffix}`;
  }

  editor.value = value.substring(0, lineStart) + prefixed + suffix;
  setSelection(lineStart, lineStart + prefixed.length);
}

function shouldContinueMultilineQuote(line) {
  return isMultiquoteContinuation(line);
}

function applyBlockquoteMarkers(text) {
  const lines = text.split('\n');
  const out = [];
  const markers = [];
  let markerId = 0;
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith('>>> ')) {
      const quoteLines = [line.slice(4)];
      i += 1;
      while (i < lines.length && shouldContinueMultilineQuote(lines[i])) {
        quoteLines.push(lines[i].replace(/^>>>\s?/, ''));
        i += 1;
      }
      const marker = `\uE000BQ${markerId++}\uE001`;
      markers.push({
        marker,
        html: `<blockquote>${quoteLines.map(escapeHtml).join('<br>')}</blockquote>`,
      });
      out.push(marker);
      continue;
    }

    if (line.startsWith('> ')) {
      const marker = `\uE000BQ${markerId++}\uE001`;
      markers.push({
        marker,
        html: `<blockquote>${escapeHtml(line.slice(2))}</blockquote>`,
      });
      out.push(marker);
      i += 1;
      continue;
    }

    out.push(line);
    i += 1;
  }

  return { text: out.join('\n'), markers };
}

function applyLinkFormat() {
  const { start, end, text } = getSelection();
  const displayText = text || t('link.defaultText');
  const urlPlaceholder = 'LINK';
  const link = `[${displayText}](${urlPlaceholder})`;

  const value = editor.value;
  editor.value = value.substring(0, start) + link + value.substring(end);

  const urlStart = start + `[${displayText}](`.length;
  const urlEnd = urlStart + urlPlaceholder.length;
  setSelection(urlStart, urlEnd);
  updatePreview();
}

function insertAtCursor(text) {
  const { start, end } = getSelection();
  const value = editor.value;
  editor.value = value.substring(0, start) + text + value.substring(end);
  const pos = start + text.length;
  setSelection(pos, pos);
  updatePreview();
}

function showSelectionPopup() {
  const { start, end } = getSelection();
  if (start === end) {
    hideSelectionPopup();
    return;
  }

  const coords = getCaretCoordinates(editor, end);
  const wrapRect = editor.parentElement.getBoundingClientRect();

  selectionPopup.style.left = `${Math.min(coords.left, wrapRect.width - selectionPopup.offsetWidth - 8)}px`;
  selectionPopup.style.top = `${Math.max(coords.top - 44, 8)}px`;
  selectionPopup.classList.remove('hidden');
}

function hideSelectionPopup() {
  selectionPopup.classList.add('hidden');
}

function getCaretCoordinates(textarea, position) {
  const div = document.createElement('div');
  const style = getComputedStyle(textarea);
  const properties = [
    'fontFamily', 'fontSize', 'fontWeight', 'lineHeight',
    'letterSpacing', 'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft',
    'borderTopWidth', 'borderRightWidth', 'borderBottomWidth', 'borderLeftWidth',
    'boxSizing', 'whiteSpace', 'wordWrap', 'overflowWrap',
  ];

  div.style.position = 'absolute';
  div.style.visibility = 'hidden';
  div.style.whiteSpace = 'pre-wrap';
  div.style.wordWrap = 'break-word';
  div.style.width = `${textarea.clientWidth}px`;

  properties.forEach((prop) => {
    div.style[prop] = style[prop];
  });

  const text = textarea.value.substring(0, position);
  div.textContent = text;
  const span = document.createElement('span');
  span.textContent = textarea.value.substring(position) || '.';
  div.appendChild(span);

  document.body.appendChild(div);
  const spanRect = span.getBoundingClientRect();
  const divRect = div.getBoundingClientRect();
  const textareaRect = textarea.getBoundingClientRect();

  const left = spanRect.left - divRect.left;
  const top = spanRect.top - divRect.top - textarea.scrollTop;

  document.body.removeChild(div);

  return { left: left + 12, top: top + 12 };
}

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function renderDiscordMarkdown(text) {
  const { text: markedText, markers } = applyBlockquoteMarkers(text);
  let html = escapeHtml(markedText);

  markers.forEach(({ marker, html: blockHtml }) => {
    html = html.split(marker).join(blockHtml);
  });

  const emojiNames = emojis.map((e) => e.name);
  emojiNames.forEach((name) => {
    const emoji = emojis.find((e) => e.name === name);
    const url = escapeHtml(getEmojiDisplayUrl(emoji));
    const regex = new RegExp(`:${escapeRegex(name)}:`, 'g');
    html = html.replace(regex, `<img class="custom-emoji" src="${url}" alt=":${name}:" title=":${name}:" />`);
  });

  html = html.replace(/```([\s\S]*?)```/g, (_, code) => `<pre><code>${code}</code></pre>`);
  html = html.replace(/`([^`\n]+)`/g, '<code>$1</code>');
  html = html.replace(/\|\|(.+?)\|\|/g, '<span class="spoiler" onclick="this.classList.toggle(\'revealed\')">$1</span>');
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
  html = html.replace(/^### (.+)$/gm, '<h3>$1</h3>');
  html = html.replace(/^## (.+)$/gm, '<h2>$1</h2>');
  html = html.replace(/^# (.+)$/gm, '<h1>$1</h1>');
  html = html.replace(/^-# (.+)$/gm, '<p class="subtext">$1</p>');
  html = html.replace(/^[-*] (.+)$/gm, '<ul><li>$1</li></ul>');
  html = html.replace(/<\/ul>\s*<ul>/g, '');

  html = applyInlineFormats(html);

  html = html.replace(/\n/g, '<br>');
  return html;
}

function applyInlineFormats(html) {
  const placeholders = [];
  let i = 0;

  html = html.replace(/<[^>]+>[\s\S]*?<\/[^>]+>|<[^>]+\/>/g, (match) => {
    const key = `\x00PH${i++}\x00`;
    placeholders.push({ key, match });
    return key;
  });

  html = html.replace(/__\*\*\*(.+?)\*\*\*__/g, '<u><strong><em>$1</em></strong></u>');
  html = html.replace(/__\*\*(.+?)\*\*__/g, '<u><strong>$1</strong></u>');
  html = html.replace(/__\*(.+?)\*__/g, '<u><em>$1</em></u>');
  html = html.replace(/__([^_\n]+?)__/g, '<u>$1</u>');
  html = html.replace(/\*\*\*(.+?)\*\*\*/g, '<strong><em>$1</em></strong>');
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/(?<!\*)\*([^*\n]+?)\*(?!\*)/g, '<em>$1</em>');
  html = html.replace(/~~(.+?)~~/g, '<del>$1</del>');

  placeholders.forEach(({ key, match }) => {
    html = html.replace(key, match);
  });

  return html;
}

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function updatePreview() {
  if (!editor.value.trim()) {
    preview.innerHTML = `<span class="preview-placeholder">${t('preview.empty')}</span>`;
    return;
  }
  preview.innerHTML = renderDiscordMarkdown(editor.value);
}

async function copyText() {
  const text = prepareTextForDiscord(editor.value, { lineQuotes: true });

  try {
    await navigator.clipboard.writeText(text);
    showCopyFeedback();
  } catch {
    const { start, end } = getSelection();
    const prev = editor.value;
    editor.value = text;
    editor.select();
    document.execCommand('copy');
    editor.value = prev;
    setSelection(start, end);
    showCopyFeedback();
  }
}

function showCopyFeedback() {
  const index = copyClickCount % COPY_EASTER_EGG.length;
  const isMega = index === COPY_EASTER_EGG.length - 1;

  copyFeedback.textContent = COPY_EASTER_EGG[index];
  copyFeedback.classList.toggle('copy-feedback-mega', isMega);
  copyFeedback.classList.remove('hidden');

  if (isMega) {
    const rect = copyBtn.getBoundingClientRect();
    burstConfetti(rect.left + rect.width / 2, rect.top + rect.height / 2);
  }

  copyClickCount++;

  clearTimeout(copyIdleTimer);
  copyIdleTimer = setTimeout(() => {
    copyClickCount = 0;
  }, 8000);

  clearTimeout(copyFeedbackHideTimer);
  copyFeedbackHideTimer = setTimeout(() => {
    copyFeedback.classList.add('hidden');
    copyFeedback.classList.remove('copy-feedback-mega');
  }, 2000);
}

function openEmojiModal() {
  emojiModal.classList.remove('hidden');
  renderEmojiGrid();
}

function closeEmojiModal() {
  emojiModal.classList.add('hidden');
}

function renderEmojiGrid() {
  emojiGrid.innerHTML = '';
  emojiEmpty.classList.toggle('hidden', emojis.length > 0);

  emojis.forEach((emoji) => {
    const wrap = document.createElement('div');
    wrap.className = 'emoji-item-wrap';

    const item = document.createElement('button');
    item.type = 'button';
    item.className = 'emoji-item';
    item.title = t('emoji.insert', { name: emoji.name });

    const img = document.createElement('img');
    img.src = getEmojiDisplayUrl(emoji);
    img.alt = emoji.name;

    const label = document.createElement('span');
    label.textContent = `:${emoji.name}:`;

    item.appendChild(img);
    item.appendChild(label);
    if (emoji.link) {
      const linkBadge = document.createElement('span');
      linkBadge.className = 'emoji-link-badge';
      linkBadge.title = emoji.link;
      linkBadge.textContent = '🔗';
      item.appendChild(linkBadge);
    }
    item.addEventListener('click', () => {
      insertAtCursor(`:${emoji.name}:`);
      closeEmojiModal();
    });

    const editLink = document.createElement('button');
    editLink.type = 'button';
    editLink.className = 'edit-emoji-link';
    editLink.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`;
    editLink.title = t('emoji.editLink');
    editLink.addEventListener('click', async (e) => {
      e.stopPropagation();
      const newLink = prompt(t('emoji.editLinkPrompt'), emoji.link || 'https://');
      if (newLink === null) return;
      emoji.link = newLink.trim();
      await saveEmoji(emoji.name, emoji.blob, emoji.link);
      renderEmojiGrid();
      updatePreview();
    });

    const del = document.createElement('button');
    del.type = 'button';
    del.className = 'delete-emoji';
    del.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`;
    del.title = t('emoji.delete');
    del.addEventListener('click', async (e) => {
      e.stopPropagation();
      if (!confirm(t('emoji.deleteConfirm', { name: emoji.name }))) return;
      await deleteEmoji(emoji.name);
      if (emojiUrlCache.has(emoji.name)) {
        URL.revokeObjectURL(emojiUrlCache.get(emoji.name));
        emojiUrlCache.delete(emoji.name);
      }
      emojis = emojis.filter((e) => e.name !== emoji.name);
      renderEmojiGrid();
      updatePreview();
    });

    wrap.appendChild(item);
    wrap.appendChild(editLink);
    wrap.appendChild(del);
    emojiGrid.appendChild(wrap);
  });
}

function extractEmojiName(filename) {
  return filename.replace(/\.webp$/i, '').toLowerCase().replace(/[^a-z0-9_]/g, '');
}

function normalizeEmojiName(name) {
  return name.trim().toLowerCase().replace(/[^a-z0-9_]/g, '');
}

function resolveEmojiName(fallbackFromFile = '') {
  const manual = emojiNameInput.value.trim();
  return normalizeEmojiName(manual || fallbackFromFile);
}

function clearEmojiForm() {
  emojiNameInput.value = '';
  emojiLinkInput.value = '';
}

async function persistEmoji(name, blob, link = '') {
  if (!name) {
    alert(t('alert.emojiNameRequired'));
    emojiNameInput.focus();
    return false;
  }

  if (emojis.some((e) => e.name === name)) {
    if (!confirm(t('confirm.overwriteEmoji', { name }))) return false;
    if (emojiUrlCache.has(name)) {
      URL.revokeObjectURL(emojiUrlCache.get(name));
      emojiUrlCache.delete(name);
    }
  }

  const trimmedLink = link.trim();
  await saveEmoji(name, blob, trimmedLink);
  const entry = { name, blob, link: trimmedLink };
  const existing = emojis.findIndex((e) => e.name === name);
  if (existing >= 0) {
    emojis[existing] = entry;
  } else {
    emojis.push(entry);
  }
  emojis.sort((a, b) => a.name.localeCompare(b.name));
  clearEmojiForm();
  return true;
}

async function handleEmojiUpload(file) {
  if (!file || !file.name.toLowerCase().endsWith('.webp')) {
    alert(t('alert.webpOnly'));
    return;
  }

  const fromFile = extractEmojiName(file.name);
  if (!emojiNameInput.value.trim() && fromFile) {
    emojiNameInput.value = fromFile;
  }

  const name = resolveEmojiName(fromFile);
  const link = emojiLinkInput.value.trim();
  const saved = await persistEmoji(name, file, link);
  if (saved) {
    renderEmojiGrid();
    updatePreview();
  }
}

async function handleEmojiFromLink() {
  const name = resolveEmojiName();
  const link = emojiLinkInput.value.trim();

  if (!name) {
    alert(t('alert.emojiNameEmpty'));
    emojiNameInput.focus();
    return;
  }
  if (!link) {
    alert(t('alert.emojiLinkEmpty'));
    emojiLinkInput.focus();
    return;
  }

  emojiLinkSaveBtn.disabled = true;
  emojiLinkSaveBtn.textContent = t('emoji.downloading');

  try {
    const response = await fetch(link);
    if (!response.ok) {
      throw new Error(t('alert.downloadHttp', { status: response.status }));
    }

    const blob = await response.blob();
    if (!blob.type.startsWith('image/')) {
      throw new Error(t('alert.notImage'));
    }

    const saved = await persistEmoji(name, blob, link);
    if (saved) {
      renderEmojiGrid();
      updatePreview();
    }
  } catch (err) {
    alert(t('alert.downloadFailed', { error: err.message }));
  } finally {
    emojiLinkSaveBtn.disabled = false;
    emojiLinkSaveBtn.textContent = t('emoji.save');
  }
}

function loadSampleText() {
  if (editor.value.trim() && !confirm(t('confirm.overwriteSample'))) {
    return;
  }
  editor.value = getSampleText();
  setSelection(editor.value.length, editor.value.length);
  updatePreview();
  hideSelectionPopup();
}

function buildGlitchLevels() {
  glitchLevels.innerHTML = '';
  GLITCH_LEVELS.forEach((level) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = `glitch-level-btn${level === currentGlitchLevel ? ' active' : ''}`;
    btn.dataset.level = level;
    btn.textContent = t(`glitch.level.${level}`);
    btn.addEventListener('click', () => {
      currentGlitchLevel = level;
      localStorage.setItem(GLITCH_LEVEL_KEY, level);
      buildGlitchLevels();
      updateGlitchPreview();
    });
    glitchLevels.appendChild(btn);
  });
}

function getGlitchPreviewSource() {
  return glitchPreviewInput.value.trim() || t('glitch.samplePreview');
}

function updateGlitchPreview() {
  const source = getGlitchPreviewSource();
  glitchPreviewOutput.textContent = glitchText(source, currentGlitchLevel);
}

function openGlitchModal(fromSelection = false) {
  const { start, end, text } = getSelection();
  if (fromSelection && text) {
    glitchPreviewInput.value = text;
  } else if (!glitchPreviewInput.value.trim()) {
    glitchPreviewInput.value = text || t('glitch.samplePreview');
  }
  buildGlitchLevels();
  updateGlitchPreview();
  glitchModal.classList.remove('hidden');
}

function closeGlitchModal() {
  glitchModal.classList.add('hidden');
}

function applyGlitchToRange(start, end, sourceText) {
  const value = editor.value;
  const glitched = glitchText(sourceText, currentGlitchLevel);
  editor.value = value.substring(0, start) + glitched + value.substring(end);
  setSelection(start, start + glitched.length);
  updatePreview();
}

function applyGlitchSelection() {
  const { start, end, text } = getSelection();
  if (!text) {
    alert(t('glitch.noSelection'));
    return;
  }
  applyGlitchToRange(start, end, text);
  closeGlitchModal();
}

function applyGlitchAll() {
  if (!editor.value) return;
  editor.value = glitchText(editor.value, currentGlitchLevel);
  setSelection(editor.value.length, editor.value.length);
  updatePreview();
  closeGlitchModal();
}

function initGlitchModal() {
  glitchBtn.addEventListener('click', () => openGlitchModal());
  glitchRegenerateBtn.addEventListener('click', updateGlitchPreview);
  glitchPreviewInput.addEventListener('input', updateGlitchPreview);
  glitchApplySelectionBtn.addEventListener('click', applyGlitchSelection);
  glitchApplyAllBtn.addEventListener('click', applyGlitchAll);

  glitchModal.querySelectorAll('[data-glitch-close]').forEach((el) => {
    el.addEventListener('click', closeGlitchModal);
  });
}

function initEvents() {
  editor.addEventListener('input', updatePreview);
  editor.addEventListener('keyup', () => {
    requestAnimationFrame(showSelectionPopup);
  });
  editor.addEventListener('mouseup', () => {
    requestAnimationFrame(showSelectionPopup);
  });
  editor.addEventListener('blur', () => {
    setTimeout(hideSelectionPopup, 150);
  });

  document.addEventListener('mousedown', (e) => {
    if (!selectionPopup.contains(e.target) && e.target !== editor) {
      hideSelectionPopup();
    }
  });

  copyBtn.addEventListener('click', copyText);
  sampleTextBtn.addEventListener('click', loadSampleText);
  emojiPickerBtn.addEventListener('click', openEmojiModal);

  emojiModal.querySelectorAll('[data-close]').forEach((el) => {
    el.addEventListener('click', closeEmojiModal);
  });

  emojiUpload.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) handleEmojiUpload(file);
    e.target.value = '';
  });

  emojiLinkSaveBtn.addEventListener('click', handleEmojiFromLink);

  emojiLinkInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') handleEmojiFromLink();
  });

  uploadZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploadZone.classList.add('dragover');
  });
  uploadZone.addEventListener('dragleave', () => {
    uploadZone.classList.remove('dragover');
  });
  uploadZone.addEventListener('drop', (e) => {
    e.preventDefault();
    uploadZone.classList.remove('dragover');
    const file = e.dataTransfer.files[0];
    if (file) handleEmojiUpload(file);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeEmojiModal();
      closeGlitchModal();
    }
    if (e.ctrlKey && e.key === 'b') {
      e.preventDefault();
      applyFormat('bold');
    }
    if (e.ctrlKey && e.key === 'i') {
      e.preventDefault();
      applyFormat('italic');
    }
    if (e.ctrlKey && e.key === 'u') {
      e.preventDefault();
      applyFormat('underline');
    }
  });
}

async function init() {
  applyTranslations();
  initLanguageSelector(langSelectorWrap, onLanguageChange);
  if (useCustomIcons) {
    replaceButtonSvg(glitchBtn, 'glitch');
    replaceButtonSvg(emojiPickerBtn, 'emoji');
  }
  rebuildFormatControls();
  initEvents();
  initGlitchModal();
  buildGlitchLevels();
  emojis = await loadEmojis();
  emojis = emojis.map((e) => ({ ...e, link: e.link || '' }));
  emojis.sort((a, b) => a.name.localeCompare(b.name));
  updatePreview();
}

init();
