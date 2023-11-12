import {BaseStyle} from "@interfaces";
import {convertBaseStyle} from "@utils/index";

const heroTitleStyle: BaseStyle = {
    font: 'text-[2rem] lg:text-5xl 2xl:text-6xl font-bold tracking-wide',
    margin: 'mb-10'
};

export const getHeroTitleStyle = () => convertBaseStyle(heroTitleStyle);
