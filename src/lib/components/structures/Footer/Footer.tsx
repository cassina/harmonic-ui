import {ComponentProps} from "react";
import {mergeClasses} from "@utils/index";

export const Footer = ({ children, className, ...props}: ComponentProps<'div'>) => {
    const classes = mergeClasses(className, 'p-10 pt-14 md:px-40 md:pt-40 md:pb-14 ');
    return(
        <div {...props}
             className={classes}>
            { children }
        </div>
    );
};
