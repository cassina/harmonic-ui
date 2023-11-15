import {BaseStyle} from "@interfaces";

// Helper function to convert BaseStyles to string format
export const convertBaseStyle = (theme: BaseStyle): string => {
    return Object.values(theme).filter(Boolean).join(' ');
};
export const mergeClasses = (...classes: (string | undefined | BaseStyle)[]): string => {
    return classes.filter(Boolean).join(' ');
};
