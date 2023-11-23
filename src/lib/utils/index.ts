import {BaseStyle} from "@interfaces";
import {join} from "pathe";

// Helper function to convert BaseStyles to string format
export const convertBaseStyle = (theme: BaseStyle): string => {
    return Object.values(theme).filter(Boolean).join(' ');
};

export const mergePriorityClasses = (userClasses: string | undefined, ourClasses: string): string => {
    if (!userClasses) {
        return ourClasses;
    }
    const userClassesArr = userClasses.split(' ');
    const ourClassesArr = ourClasses.split(' ');

    userClassesArr.forEach((userClass: string) => {
        const userClassType = userClass.split('-')[0]
        const index = ourClassesArr.findIndex((c: string) => c.startsWith(userClassType));

        if (index > -1) {
            ourClassesArr.splice(index, 1);
        }
    });

    return userClassesArr.concat(ourClassesArr).join(' ');
};
