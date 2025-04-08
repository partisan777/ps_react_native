import { COFFEE_TYPE } from "../../common/CONSTANTS"

export type CatalogSearchButtonsProps = {
    coffeeType: string,
    setCoffeeType: (type: COFFEE_TYPE) => void,
};
