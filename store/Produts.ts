import { atom } from 'jotai';
import { CatalogItemProps } from '../entities/catalog-item/CatalogItemProps';

export const productsAtom = atom<CatalogItemProps[]>([]);

export const loadingProductsAtom = atom(false);
