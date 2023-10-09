import { CheckboxColor } from "../../../types/Checkbox.types";

// Base styles broken down into logical groups
const SIZE_CLASSES = 'w-4 h-4';
const POSITION_CLASSES = 'relative mt-1';
const APPEARANCE_CLASSES = 'shrink-0 appearance-none';
const BORDER_CLASSES = 'border-2 rounded-sm peer checked:border-0';

export const CHECKBOX_BASE_THEME = `${SIZE_CLASSES} ${POSITION_CLASSES} ${APPEARANCE_CLASSES} ${BORDER_CLASSES}`;

// Descriptive style configurations for each color theme
const PRIMARY_THEME = 'border-primary-500 checked:bg-primary-500';
const COMPLEMENTARY_THEME = 'border-complementary-500 checked:bg-complementary-500';
const WARNING_THEME = 'border-warning-500 checked:bg-warning-500';
const ERROR_THEME = 'border-error-500 checked:bg-error-500';

export const CHECKBOX_STYLES_MAP: Record<CheckboxColor, string> = {
    primary: PRIMARY_THEME,
    complementary: COMPLEMENTARY_THEME,
    warning: WARNING_THEME,
    error: ERROR_THEME
};

// Retrieve styles for a given checkbox color
export const getCheckboxStyles = (color: CheckboxColor): string => {
    return `${CHECKBOX_BASE_THEME} ${CHECKBOX_STYLES_MAP[color]}`;
};
