import {BaseStyle} from "@interfaces";
import {convertBaseStyle} from "@utils/index";

const navFixedStyle: BaseStyle = {
    position: 'fixed top-0 start-0',
    width: 'w-full',
    zIndex: 'z-20'
};

export const getNavFixedStyle = (): string => convertBaseStyle(navFixedStyle);
