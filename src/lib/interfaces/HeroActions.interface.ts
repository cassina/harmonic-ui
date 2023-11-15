import {ComponentProps} from "react";
import {HeroActions} from "@components/structures/HeroActions/HeroActions";

export interface HeroActionsProps extends ComponentProps<'div'> {
    buttonAlignment?: 'center' | 'left'
}
