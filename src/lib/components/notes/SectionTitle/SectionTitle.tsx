import {ComponentProps} from "react";
import {mergeClasses} from "@utils/index";

export const SectionTitle = ({ children, className, ...props }: ComponentProps<'h3'>) => {

    const classes = mergeClasses(className, 'text-2xl lg:text-3xl 2xl:text-4xl font-semibold tracking-wide');

    return(
        <h3 {...props}
            className={classes}>
            {children}
        </h3>
    );
};
