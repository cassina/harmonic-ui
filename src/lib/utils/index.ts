import {BaseStyle} from "@interfaces";

// Helper function to convert BaseStyles to string format
export const convertBaseStyle = (theme: BaseStyle): string => {
    return Object.values(theme).filter(Boolean).join(' ');
};

/**
 * Merges user-specified CSS classes with default classes, prioritizing user classes.
 * If a user class conflicts with a default class (based on the class prefix),
 * the default class is removed, ensuring that user classes take precedence.
 *
 * @param {string | undefined} userClasses - A string of user-defined CSS classes,
 *                                           separated by spaces. If undefined,
 *                                           the function will default to using
 *                                           only the predefined classes.
 * @param {string} ourClasses - A string of default CSS classes set by the system,
 *                              separated by spaces.
 *
 * @returns {string} - A single string containing a merged list of classes with
 *                     user-defined classes taking precedence over system-defined
 *                     classes. The classes are separated by spaces.
 *
 * @example
 * // returns 'user-text-lg bg-blue-500'
 * mergePriorityClasses('user-text-lg', 'text-sm bg-blue-500');
 *
 * @note
 * - The function determines conflicts based on the prefix of class names
 *   (i.e., the substring before the first hyphen). For example, 'text-lg'
 *   conflicts with 'text-sm' as they share the same prefix 'text'.
 * - If `userClasses` is undefined, the function simply returns `ourClasses`.
 */
export const mergePriorityClasses = (userClasses: string | undefined, ourClasses: string): string => {
    if (!userClasses) {
        return ourClasses;
    }
    const userClassesArr = userClasses.split(' ');
    const ourClassesArr = ourClasses.split(' ');

    userClassesArr.forEach((userClass: string) => {
        const userClassType = userClass.split('-')[0];
        const index = ourClassesArr.findIndex((c: string) => c.startsWith(userClassType));

        if (index > -1) {
            ourClassesArr.splice(index, 1);
        }
    });

    return userClassesArr.concat(ourClassesArr).join(' ');
};
