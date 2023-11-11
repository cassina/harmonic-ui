import {ComponentProps} from "react";
import {getHeroSubtitleStyle} from "@components/notes/HeroSubtitle/HeroSubtitle.style";

export const HeroSubtitle = ({ children }: ComponentProps<'h2'>) =>
    <h2 className={getHeroSubtitleStyle()}>{children}</h2>;
