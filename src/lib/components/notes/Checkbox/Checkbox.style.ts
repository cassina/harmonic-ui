import { CheckboxColor } from "@types";
import { BaseStyle } from "@interfaces";
import { convertBaseStyle } from "@utils/index";

// Base styles using the BaseStyle interface
const checkboxBaseStyle: BaseStyle = {
    size: 'w-4 h-4',
    position: 'relative',
    margin: 'mt-1',
    appearance: 'shrink-0 appearance-none',
    border: 'border-2 rounded-sm checked:border-0',
    special: 'peer'
};

const colorStyleMap: Record<CheckboxColor, string> = {
    primary: 'border-primary-500 checked:bg-primary-500',
    complementary: 'border-complementary-500 checked:bg-complementary-500',
    warning: 'border-warning-500 checked:bg-warning-500',
    error: 'border-error-500 checked:bg-error-500'
};

// Function to get style based on color
export const getCheckboxStyle = (color: CheckboxColor): string =>
    `${convertBaseStyle(checkboxBaseStyle)} ${colorStyleMap[color]}`;
