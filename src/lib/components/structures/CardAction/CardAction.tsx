import {ComponentProps} from "react";
import {mergePriorityClasses} from "@utils/index";

export const CardAction = ({ children, className, ...props}: ComponentProps<'div'>) => {
    const classes = mergePriorityClasses(className, 'px-4 pb-5');
    return(
        <div {...props}
             className={classes}>
            { children }
        </div>
    );
};
