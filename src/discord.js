export function isMultiquoteContinuation(line) {
  if (line.trim() === '') return false;
  if (line.startsWith('>>> ')) return true;
  if (line.startsWith('> ')) return false;
  if (/^#{1,3} /.test(line)) return false;
  if (line.startsWith('-# ')) return false;
  if (/^[-*] /.test(line)) return false;
  return true;
}

export function ensureBlankLineAfterMultiquotes(text) {
  const lines = text.split('\n');
  const out = [];
  let i = 0;

  while (i < lines.length) {
    if (lines[i].startsWith('>>> ')) {
      out.push(lines[i]);
      i += 1;
      while (i < lines.length && isMultiquoteContinuation(lines[i])) {
        out.push(lines[i].replace(/^>>>\s?/, ''));
        i += 1;
      }
      if (i < lines.length && lines[i].trim() !== '') {
        out.push('');
      }
      continue;
    }
    out.push(lines[i]);
    i += 1;
  }

  return out.join('\n');
}

export function convertMultiquoteToLineQuotes(text) {
  const lines = text.split('\n');
  const out = [];
  let i = 0;

  while (i < lines.length) {
    if (lines[i].startsWith('>>> ')) {
      const block = [lines[i].slice(4)];
      i += 1;
      while (i < lines.length && isMultiquoteContinuation(lines[i])) {
        block.push(lines[i].replace(/^>>>\s?/, ''));
        i += 1;
      }
      block.forEach((line) => out.push(`> ${line}`));
      continue;
    }
    out.push(lines[i]);
    i += 1;
  }

  return out.join('\n');
}

export function prepareTextForDiscord(text, { lineQuotes = false } = {}) {
  const normalized = lineQuotes ? convertMultiquoteToLineQuotes(text) : text;
  return ensureBlankLineAfterMultiquotes(normalized);
}
