import {BaseStyle} from "@interfaces";
import {convertBaseStyle} from "@utils/index";


const svgBaseStyle: BaseStyle = {
    size: 'w-4 h-4',
    margin: 'mt-1',
    position: 'absolute',
    appearance: 'hidden',
    special: 'peer-checked:block',
    pointer: 'pointer-events-none'
};

export const getSVGStyle = () => convertBaseStyle(svgBaseStyle);