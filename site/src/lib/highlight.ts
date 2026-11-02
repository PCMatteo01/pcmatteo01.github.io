// Tiny C# colouring for the code excerpts: one pass over the escaped text, so spans never nest.
const KEYWORDS = 'public|private|protected|static|class|interface|enum|void|bool|int|float|string|if|else|return|new|null|this|using|const|true|false|get|set|var|foreach|for|while|override|virtual';
const RE = new RegExp(String.raw`(\/\/[^\n]*)|("(?:[^"\\]|\\.)*")|(\b(?:${KEYWORDS})\b)|(\b[A-Za-z_]\w*(?=\())|(\b[A-Z]\w*\b)|(\b\d+(?:\.\d+)?f?\b)`, 'g');

export function highlight(code: string): string {
  return code
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(RE, (m, com, str, kw, fn, ty) => {
      const cls = com ? 'c' : str ? 's' : kw ? 'k' : fn ? 'f' : ty ? 't' : 'n';
      return `<b class="${cls}">${m}</b>`;
    });
}
