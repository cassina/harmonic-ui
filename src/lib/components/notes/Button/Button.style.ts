import { ButtonColor, ButtonStyle } from "@types";
import { BaseStyle } from "@interfaces";
import {convertBaseStyle} from "@utils/index";

// Base styles using the ComponentTheme interface
const buttonBaseStyle: BaseStyle = {
    font: 'font-medium text-sm',
    padding: 'px-5 py-2.5',
    margin: 'm-2',
    border: 'rounded-md',
    display: 'inline-flex items-center justify-evenly gap-2'
};

const colorStyleMap: Record<ButtonColor, Record<ButtonStyle, string>> = {
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
        outline: 'bg-transparent text-warning-500 border border-warning-500 hover:bg-warning-100'
    },
    error: {
        filled: 'bg-error-600 text-white hover:bg-error-700 active:bg-error-800',
        tonal: 'bg-error-400 text-white hover:bg-error-400',
        outline: 'bg-transparent text-error-500 border border-error-500 hover:bg-error-100'
    }
};

// Function to get style based on color and style
export const getButtonStyle = (color: ButtonColor, style: ButtonStyle): string =>
    `${convertBaseStyle(buttonBaseStyle)} ${colorStyleMap[color][style]}`;