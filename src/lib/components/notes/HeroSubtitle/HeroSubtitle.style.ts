import {BaseStyle} from "@interfaces";
import {convertBaseStyle} from "@utils/index";

const heroSubtitleStyle: BaseStyle = {
    font: 'text-gray-400 mb-10 tracking-tight',
};

export const getHeroSubtitleStyle = () => convertBaseStyle(heroSubtitleStyle);
