import {ComponentProps} from "react";
import {mergeClasses} from "@utils/index";
import {getHeroTitleStyle} from "./HeroTitle.style";

export const HeroTitle = ({ children, className }: ComponentProps<'h1'>) => {
    const theme = getHeroTitleStyle();
    const styles = mergeClasses(className, theme);

    return(<h1 className={styles}>{children}</h1>);
};
