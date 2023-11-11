import {BaseStyle} from "@interfaces";
import {convertBaseStyle} from "@utils/index";

const labelBase: BaseStyle = {
    font: 'text-primary-950 text-xs',
    margin: 'm-1',
    display: 'block',
};

export const getLabelStyle = () => convertBaseStyle(labelBase);