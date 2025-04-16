import { COFFEE_TYPE } from "../common/CONSTANTS";
import { PRODUCT_SIZE } from "../common/CONSTANTS";

export const buttonList = [
    { id: 0, label: 'Все', type: COFFEE_TYPE.ALL },
    { id: 1, label: 'Капучино', type: COFFEE_TYPE.CAPPUCINO },
    { id: 2, label: 'Маккиято', type: COFFEE_TYPE.MACCHIATO },
    { id: 3, label: 'Латте', type: COFFEE_TYPE.LATTE },
    { id: 4, label: 'Американо', type:  COFFEE_TYPE.AMERICANO }
];


export const sizeButtonList = [
    { id: 0, label: PRODUCT_SIZE.S, type: PRODUCT_SIZE.S },
    { id: 1, label: PRODUCT_SIZE.M, type: PRODUCT_SIZE.M },
    { id: 2, label: PRODUCT_SIZE.L, type: PRODUCT_SIZE.L },
];