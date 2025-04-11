import { PRODUCT_SIZE } from "../../common/CONSTANTS";
import { CatalogItemProps } from "../catalog-item/CatalogItemProps";

export type OrderItemProps = {
    orderId?: number,
    item: CatalogItemProps
    count: number,
    size: PRODUCT_SIZE
};