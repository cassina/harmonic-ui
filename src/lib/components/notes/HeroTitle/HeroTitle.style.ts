import {BaseStyle} from "@interfaces";
import {convertBaseStyle} from "@utils/index";

const heroTitleStyle: BaseStyle = {
    font: 'text-4xl md:text-5xl font-bold tracking-wide',
    margin: 'mb-10'
};

export const getHeroTitleStyle = () => convertBaseStyle(heroTitleStyle);
