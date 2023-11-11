import React from "react";
import {HeroButtonsProps} from "@interfaces";
import {Button} from "@components/notes/Button/Button";

export const HeroButtons = (
    {
        primaryActionOnClick,
        primaryLabel,
        secondaryActionOnClick,
        secondaryLabel,
    }: HeroButtonsProps) => {
    return(
        <>
            <Button
                onClick={primaryActionOnClick}
                label={primaryLabel}
                aria-label={primaryLabel}
            >
                Primary Action
            </Button>
            <Button
                onClick={secondaryActionOnClick}
                buttonColor="primary"
                buttonStyle="outline"
                label={secondaryLabel}
                aria-label={secondaryLabel}
            >
                Secondary Action
            </Button>
        </>
    );
};
