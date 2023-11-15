// TODO This should be a Structure and have another name
import React from "react";
import {HeroActionsProps} from "@interfaces";

export const HeroActions = (
    {
        children,
        buttonAlignment = 'center',
    }: HeroActionsProps) => {
    return(
        <div className={`flex gap-4 ${buttonAlignment === 'center' ? 'justify-center' : 'justify-start' }`}>
            {children}
        </div>
    );
};
