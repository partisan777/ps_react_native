// import { CatalogItemProps } from "@/entities/catalog-item/CatalogItemProps";

export interface IUseFetchProductData {
    url: string,
    setLoading: (state: boolean) => void,
    setProduct (value: any): void,
    setError:  (state: boolean) => void,
};
