const ICON_FILES = {
  bold: 'bold.svg',
  italic: 'italic.svg',
  underline: 'underline.svg',
  boldItalic: 'bolditalic.svg',
  underlineBold: 'underlineBold.svg',
  underlineItalic: 'underlineItalic.svg',
  underlineBoldItalic: 'underlineBoldItalic.svg',
  strikethrough: 'strikethrough.svg',
  spoiler: 'spoiler.svg',
  code: 'code.svg',
  codeblock: 'codeblock.svg',
  h1: 'h1.svg',
  h2: 'h2.svg',
  h3: 'h3.svg',
  subtext: 'subtext.svg',
  quote: 'quote.svg',
  multiquote: 'multi_line_quote.svg',
  list: 'list.svg',
  link: 'link.svg',
  glitch: 'glitch.svg',
  emoji: 'emoji.svg',
};

export const useCustomIcons = true;

export function iconUrl(key) {
  const file = ICON_FILES[key];
  if (!file) return null;
  return new URL(`./icons/${file}`, import.meta.url).href;
}

export function createIconImg(key, size = 18) {
  const src = iconUrl(key);
  if (!src) return null;

  const img = document.createElement('img');
  img.className = 'fmt-icon';
  img.src = src;
  img.alt = '';
  img.width = size;
  img.height = size;
  img.decoding = 'async';
  return img;
}

export function replaceButtonSvg(button, key, size = 18) {
  const svg = button.querySelector('svg');
  const icon = createIconImg(key, size);
  if (!svg || !icon) return;
  svg.replaceWith(icon);
}

export function getFormatButtonContent(fmt) {
  if (useCustomIcons && ICON_FILES[fmt.id]) {
    const src = iconUrl(fmt.id);
    return `<img class="fmt-icon" src="${src}" alt="" width="18" height="18" decoding="async" />`;
  }

  if (fmt.label.length <= 3) {
    return `<span>${fmt.label}</span>`;
  }

  return fmt.label;
}

export function getGlitchButtonContent() {
  if (useCustomIcons) {
    const src = iconUrl('glitch');
    return `<img class="fmt-icon" src="${src}" alt="" width="18" height="18" decoding="async" />`;
  }

  return '⚡';
}
