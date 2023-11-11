import {ComponentProps} from "react";
import {mergeClasses} from "@utils/index";
import {getHeroSubtitleStyle} from "./HeroSubtitle.style";

export const HeroSubtitle = ({ children, className }: ComponentProps<'h2'>) => {
    const theme = getHeroSubtitleStyle();
    const styles = mergeClasses(className, theme);

    return(<h2 className={styles}>{children}</h2>);
};
