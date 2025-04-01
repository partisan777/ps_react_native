import { Pressable, PressableProps, View, Text, Animated, GestureResponderEvent } from "react-native";
import { CustomButtonProps } from "./CustomProps";


export const CustomAnimatedButton = ({...props}: PressableProps & CustomButtonProps) => {
    const { title, viewStyle, textStyle, backGroundColor, fadeIn, fadeOut } = props;

    const _onPressIn = (e: GestureResponderEvent) => {
        if(fadeIn) {
            fadeIn.start();
        }
        props.onPressIn && props.onPressIn(e);
    }

    const _onPressOut = (e: GestureResponderEvent) => {
        if(fadeOut) {
            fadeOut.start();
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
