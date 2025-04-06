import { Animated } from "react-native";

export interface CustomButtonProps  {
   title: string | unknown,
   viewStyle: object | object[],
   textStyle: object,
   backGroundColor?: object,
   fadeIn?: typeof Animated,
   fadeOut?: typeof Animated,
   onPressIn?: () => void,
   onPressOut?: () => void,
};
