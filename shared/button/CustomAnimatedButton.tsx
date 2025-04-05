import { Pressable, PressableProps, Text, Animated, GestureResponderEvent } from "react-native";
import { CustomButtonProps } from "./CustomProps";


export const CustomAnimatedButton = ({...props}: PressableProps & CustomButtonProps) => {
    const { title, viewStyle, textStyle, backGroundColor, fadeIn, fadeOut, onPressIn, onPressOut } = props;

    const _onPressIn = (e: GestureResponderEvent) => {
        if(fadeIn) {
            fadeIn.start();
        };
        if (onPressIn) {
            onPressIn();
        };
        props.onPressIn && props.onPressIn(e);
    }

    const _onPressOut = (e: GestureResponderEvent) => {
        if(fadeOut) {
            fadeOut.start();
        };
        if (onPressOut) {
            onPressOut();
        };
        props.onPressIn && props.onPressIn(e);
    }

    return(
        <Pressable {...props} onPressIn={_onPressIn} onPressOut={_onPressOut}>
            <Animated.View style={{...viewStyle, backgroundColor: backGroundColor}}>
                <Text style={textStyle}>{title}</Text>
            </Animated.View>
        </Pressable>
    );

};
