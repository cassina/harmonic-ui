// TODO This should be a Structure and have another name
import React from "react";
import {HeroActionsProps} from "@interfaces";

export const HeroActions = (
    {
        children,
        alignment = 'center',
    }: HeroActionsProps) => {
    return(
        <div className={`flex gap-4 ${alignment === 'center' ? 'justify-center' : 'justify-start' }`}>
            {children}
        </div>
    );
};
