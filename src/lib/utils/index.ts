import chroma from 'chroma-js';
export function getContrastColor(bgColor: string) {
    const luminance = chroma(bgColor).luminance();
    return luminance > 0.5 ? 'black' : 'white';
}

export const mergeClasses = (...classes: (string | undefined)[]): string => {
    return classes.filter(Boolean).join(' ');
}