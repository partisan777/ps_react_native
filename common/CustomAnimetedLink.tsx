import { Pressable, PressableProps, View, Text, Animated, GestureResponderEvent } from "react-native";
import { Link } from "expo-router";
import { CustomButtonProps, CustomLinkProps } from "./CustomProps";


export const CustomAnimatedLink = ({...props}: PressableProps & CustomButtonProps & CustomLinkProps) => {
    const { title, viewStyle, textStyle, backGroundColor, fadeIn, fadeOut, route } = props;

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
            <Link href={route} style={viewStyle}>
                <Animated.View style={{backgroundColor: backGroundColor}}>
                    <Text style={textStyle}>{title}</Text>
                </Animated.View>
            </Link>
        </Pressable>
    );

};
