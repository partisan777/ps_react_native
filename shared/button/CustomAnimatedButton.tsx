import { Pressable, PressableProps, Text, Animated, GestureResponderEvent, Image } from "react-native";
import { CustomButtonProps } from "./CustomProps";


export const CustomAnimatedButton = ({...props}: PressableProps & CustomButtonProps) => {
    const { title, viewStyle, textStyle, backGroundColor, fadeIn, fadeOut, onPressIn, onPressOut, img, imgStyle } = props;

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
     const _viewStyle = Array.isArray(viewStyle) ? viewStyle.reduce(function (result, item) {
            return {
                ...result,
                ...item
            }
        }) : viewStyle;

    const viewStyles = backGroundColor ? {..._viewStyle, backgroundColor: backGroundColor} : {..._viewStyle};

    return(
        <Pressable {...props} onPressIn={_onPressIn} onPressOut={_onPressOut}>
            <Animated.View style={viewStyles}>
                {img ? <Image style={imgStyle} resizeMode="cover" source={img} /> : ''}
                {title ? <Text style={textStyle}>{title}</Text> : ''}
            </Animated.View>
        </Pressable>
    );

};
