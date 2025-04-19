import { PixelRatio, Platform } from 'react-native';

export const normalize = (size: number): number => {
    const fontSize = Platform.select({
        ios: size,
        android: size * 0.85,
    });
    return Math.round(fontSize);
};
