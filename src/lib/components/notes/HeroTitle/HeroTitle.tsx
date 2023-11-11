import {ComponentProps} from "react";
import {getHeroTitleStyle} from "@components/notes/HeroTitle/HeroTitle.style";

export const HeroTitle = ({ children }: ComponentProps<'h1'>) =>
    <h1 className={getHeroTitleStyle()}>
        {children}
    </h1>;
