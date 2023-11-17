import {ComponentProps, ReactElement} from "react";
import {mergeClasses} from "@utils/index";

export const Footer = ({
    children,
    className,
    ...props
}: ComponentProps<'div'>): ReactElement => {
    const classes = mergeClasses(className, 'p-10 pt-14 max-w-3xl md:pt-32 md:pb-14 mx-auto');
    return(
        <div {...props}
             className={classes}>
            { children }
        </div>
    );
};
