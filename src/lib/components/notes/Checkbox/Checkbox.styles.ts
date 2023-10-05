import { CheckboxColor } from './Checkbox.type';

export const CHECKBOX_BASE_CLASSES = 'relative peer shrink-0 appearance-none w-4 h-4 mt-1 border-2 rounded-sm bg-white checked:border-0'

const CHECKBOX_STYLES_MAP: Record<CheckboxColor, string> = {
    primary: 'border-primary-500 checked:bg-primary-500',
    complementary: 'border-complementary-500 checked:bg-complementary-500',
    warning: 'border-warning-500 checked:bg-warning-500',
    error: 'border-error-500 checked:bg-error-500',
}

export const getCheckboxStyles = (color: CheckboxColor) => CHECKBOX_STYLES_MAP[color];
