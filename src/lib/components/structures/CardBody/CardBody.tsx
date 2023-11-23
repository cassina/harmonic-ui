import {ComponentProps} from "react";
import {mergePriorityClasses} from "@utils/index";

export const CardBody = ({ children, className, ...props}: ComponentProps<'div'>) => {
    const classes = mergePriorityClasses(className, 'px-4 flex-1');
    return(
        <div {...props}
             className={classes}>
            { children }
        </div>
    );
};
