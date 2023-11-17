import {BaseStyle} from "@interfaces";
import {convertBaseStyle} from "@utils/index";

const textInputBase: BaseStyle = {
    font: 'text-primary-950',
    border: 'border rounded-md',
    padding: 'p-2',
    width: 'w-full'
};

export const getTextInputStyle = () => convertBaseStyle(textInputBase);
