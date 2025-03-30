import { Animated } from "react-native";

export interface CustomButtomProps  {
   title: string,
   viewStyle: object,
   textStyle: object,
   backGroundColor?: object,
   fadeIn?: typeof Animated,
   fadeOut?: typeof Animated,
   onPressIn?: () => void,
   onPressOut?: () => void,
};
