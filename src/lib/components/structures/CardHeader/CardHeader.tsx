import {ComponentProps} from "react";
import {mergePriorityClasses} from "@utils/index";

export const CardHeader = ({ children, className, ...props}: ComponentProps<'div'>) => {
    const classes = mergePriorityClasses(className, 'px-4 flex gap-2 items-center');
    return(
        <div {...props}
             className={classes}>
            { children }
        </div>
    );
};
