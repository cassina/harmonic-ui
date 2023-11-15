import {ComponentProps} from "react";
import {mergeClasses} from "@utils/index";

export const CardHeader = ({ children, className, ...props}: ComponentProps<'div'>) => {
    const classes = mergeClasses(className, 'px-4 flex gap-2 items-center');
    return(
        <div {...props}
             className={classes}>
            { children }
        </div>
    );
};
