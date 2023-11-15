import React from "react";
import {CardTitleProps} from "@interfaces";
import {mergeClasses} from "@utils/index";

export const CardTitle = ({
    cardTitle,
    className,
    ...props
  }: CardTitleProps) => {
    const classes = mergeClasses(className, 'text-lg font-semibold line-clamp-1');

    return(
        <h5 {...props}
            className={classes}>
            {cardTitle}
        </h5>
    );
};
