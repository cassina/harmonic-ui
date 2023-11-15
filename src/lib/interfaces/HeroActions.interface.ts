import {ComponentProps} from "react";

export interface HeroActionsProps extends ComponentProps<'div'> {
    alignment?: 'center' | 'left'
}
