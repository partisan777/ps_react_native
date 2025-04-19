import { atom } from 'jotai';
import * as Location from 'expo-location';


//по хорошему надо сделать сохранение введенных адресов и перед определением текушего места положения предлагать выбор из ранее введенных
//и сделать возможность ручного ввода адреса с валидацией введенного адреса
export const destinationAddressAtom = atom<Location.LocationGeocodedAddress[] | null>(null);

export const destinationAddressCommentAtom = atom<string | null>(null);
