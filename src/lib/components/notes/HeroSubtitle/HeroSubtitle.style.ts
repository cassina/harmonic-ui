import {BaseStyle} from "@interfaces";
import {convertBaseStyle} from "@utils/index";

const heroSubtitleStyle: BaseStyle = {
    font: 'text-lg tracking-wide',
};

export const getHeroSubtitleStyle = () => convertBaseStyle(heroSubtitleStyle);
