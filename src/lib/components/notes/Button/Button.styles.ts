import { ButtonColor, ButtonStyle } from "@types";

// Base classes for button
export const BTN_BASE_CLASSES = 'font-medium text-sm rounded-md px-5 py-2.5 m-2';
// Button Styles
export const BTN_STYLES_MAP: Record<ButtonColor, Record<ButtonStyle, string>> = {
    primary: {
        filled: 'bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800',
        tonal: 'bg-primary-400 text-white hover:bg-primary-500',
        outline: 'text-primary-500 border border-primary-500 hover:bg-primary-100'
    },
    complementary: {
        filled: 'bg-complementary-600 text-white hover:bg-complementary-700 active:bg-complementary-800',
        tonal: 'bg-complementary-400 text-white hover:bg-complementary-500',
        outline: 'bg-transparent text-complementary-500 border border-complementary-500 hover:bg-complementary-100'
    },
    warning: {
        filled: 'bg-warning-600 text-white hover:bg-warning-700 active:bg-warning-800',
        tonal: 'bg-warning-400 text-white hover:bg-warning-400',
        outline: 'bg-transparent text-warning-500 border border-warning-500 hover:bg-warning-100',
    },
    error: {
        filled: 'bg-error-600 text-white hover:bg-error-700 active:bg-error-800',
        tonal: 'bg-error-400 text-white hover:bg-error-400',
        outline: 'bg-transparent text-error-500 border border-error-500 hover:bg-error-100',
    }
};

// Retrieve styles for a given color and button style
export const getStylesForColor = (color: ButtonColor, buttonStyle: ButtonStyle): string => {
    return `${BTN_BASE_CLASSES} ${BTN_STYLES_MAP[color][buttonStyle]}`;
};


// interface ButtonTheme {
//     fontColor: string;
//     fontSize: string;
//     fontWeight: string;
//     shape: string;
//     padding: string;
//     margin: string;
//     backgroundColor: string;
//     hover?: string;
//     active?: string;
//     border?: string;
// }
// interface CreateButtonThemeArgs {
//     color: HarmonicColor;
//     style: ButtonStyle;
//     shade: Shade;
//     hover?: boolean;
//     active?: boolean;
// }
// export const createBtnTheme = (args: CreateButtonThemeArgs) => {
//     const {
//         color,
//         style,
//         shade,
//         active,
//         hover,
//     } = args;
//     const isOutline = style == 'outline';
//     const newShade = style == 'tonal' ? shade - 300 : shade;
//
//     const result: ButtonTheme = {
//         fontColor: 'text-white',
//         fontSize: 'text-sm',
//         fontWeight: 'font-medium',
//         shape: 'rounded-md',
//         padding: 'px-5 py-2.5',
//         margin: 'm-2',
//         backgroundColor: !isOutline? `bg-${color}-${newShade}` : 'bg-transparent',
//     }
//
//     result.border = isOutline ? `border border-primary-500` : undefined;
//     result.hover = hover && !isOutline ? `hover:bg-${color}-${(newShade + 100).toString()}` : undefined;
//     result.active = active && !isOutline ? `active:bg-${color}-${newShade + 200}` : undefined;
//
//     return result;
// };
//
// export const getStyles = (
//     color: ButtonColor,
//     style: ButtonStyle,
//     shade: Shade = 600,
//     hover: boolean = true,
//     active: boolean = true,
// ) => {
//     const themeObject = createBtnTheme({
//         color,
//         style,
//         shade,
//         hover,
//         active
//     });
//     return Object.values(themeObject)
//         .reduce((previousValue: string, currentValue: string) =>
//             currentValue ? `${previousValue} ${currentValue}` : previousValue, '');
// };