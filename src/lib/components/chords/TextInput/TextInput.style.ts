import {BaseStyle} from "@interfaces";
import {convertBaseStyle} from "@utils/index";

const textInputBase: BaseStyle = {
    font: 'text-primary-950',
    display: 'block',
    margin: 'm-1',
    border: 'border rounded-md',
    padding: 'p-2',
}

export const getTextInputStyle = () => convertBaseStyle(textInputBase);