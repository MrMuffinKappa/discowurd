const GLITCH_UP = [
  '\u030d', '\u030e', '\u0304', '\u0305', '\u033f', '\u0311', '\u0306', '\u0310',
  '\u0352', '\u0357', '\u0351', '\u0307', '\u0308', '\u0303', '\u0302', '\u030c',
  '\u035b', '\u034c', '\u034b', '\u0315', '\u0321', '\u0322', '\u0327', '\u0328',
  '\u0334', '\u0335', '\u0336', '\u034f', '\u035c',
];

const GLITCH_DOWN = [
  '\u0316', '\u0317', '\u0318', '\u0319', '\u031c', '\u031d', '\u031e', '\u031f',
  '\u0320', '\u0324', '\u0325', '\u0326', '\u0329', '\u032a', '\u032b', '\u032c',
  '\u032d', '\u032e', '\u032f', '\u0330', '\u0331', '\u0332', '\u0333', '\u0339',
  '\u033a', '\u033b', '\u033c', '\u0345',
];

const GLITCH_MID = [
  '\u031a', '\u031b', '\u0340', '\u0341', '\u0358', '\u0321', '\u0322', '\u0327',
  '\u0328', '\u0334', '\u0335', '\u0336', '\u034c', '\u034d', '\u035c', '\u035d',
  '\u035e', '\u035f', '\u0360', '\u0362',
];

export const GLITCH_LEVELS = ['mini', 'normal', 'max', 'chaos'];

const LEVEL_CONFIG = {
  mini: { up: [0, 1], mid: [0, 0], down: [0, 1] },
  normal: { up: [1, 3], mid: [0, 1], down: [1, 3] },
  max: { up: [3, 7], mid: [1, 2], down: [3, 7] },
  chaos: { up: [6, 14], mid: [2, 5], down: [6, 14] },
};

function randChar(chars) {
  return chars[Math.floor(Math.random() * chars.length)];
}

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isGlitchable(char) {
  const code = char.codePointAt(0);
  if (char === '\n' || char === '\r' || char === '\t') return false;
  if (code >= 0x0300 && code <= 0x036f) return false;
  if (code >= 0x1ab0 && code <= 0x1aff) return false;
  if (code >= 0x1dc0 && code <= 0x1dff) return false;
  if (code >= 0x20d0 && code <= 0x20ff) return false;
  if (code >= 0xfe20 && code <= 0xfe2f) return false;
  return true;
}

export function glitchText(text, level = 'normal') {
  const config = LEVEL_CONFIG[level] || LEVEL_CONFIG.normal;

  return [...text].map((char) => {
    if (!isGlitchable(char)) return char;

    let result = char;
    const [upMin, upMax] = config.up;
    const [midMin, midMax] = config.mid;
    const [downMin, downMax] = config.down;

    for (let i = 0; i < randInt(upMin, upMax); i += 1) result += randChar(GLITCH_UP);
    for (let i = 0; i < randInt(midMin, midMax); i += 1) result += randChar(GLITCH_MID);
    for (let i = 0; i < randInt(downMin, downMax); i += 1) result += randChar(GLITCH_DOWN);

    return result;
  }).join('');
}
