import chroma from 'chroma-js';
export function getContrastColor(bgColor: string) {
    const luminance = chroma(bgColor).luminance();
    return luminance > 0.5 ? 'black' : 'white';
}