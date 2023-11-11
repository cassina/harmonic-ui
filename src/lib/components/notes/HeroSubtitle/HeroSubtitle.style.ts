import {BaseStyle} from "@interfaces";
import {convertBaseStyle} from "@utils/index";

const heroSubtitleStyle: BaseStyle = {
    font: 'mb-10 tracking-tight',
};

export const getHeroSubtitleStyle = () => convertBaseStyle(heroSubtitleStyle);
