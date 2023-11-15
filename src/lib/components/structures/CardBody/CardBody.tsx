import {ComponentProps} from "react";
import {mergeClasses} from "@utils/index";

export const CardBody = ({ children, className, ...props}: ComponentProps<'div'>) => {
    const classes = mergeClasses(className, 'px-4 flex-1');
    return(
        <div {...props}
             className={classes}>
            { children }
        </div>
    );
};
