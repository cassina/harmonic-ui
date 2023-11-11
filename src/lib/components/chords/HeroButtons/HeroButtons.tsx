import React from "react";
import {HeroButtonsProps} from "@interfaces";

export const HeroButtons = (
    {
        children,
        buttonAlignment = 'center',
    }: HeroButtonsProps) => {
    return(
        <div className={`flex gap-4 ${buttonAlignment === 'center' ? 'justify-center' : 'justify-start' }`}>
            {children}
        </div>
    );
};
