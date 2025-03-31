import { Pressable, PressableProps, View, Text } from "react-native";
import { CustomButtonProps } from "./CustomProps";


export const CustomButton = ({...props}: PressableProps & CustomButtonProps) => {
    const { title, viewStyle, textStyle } = props;
    return(
        <Pressable {...props}>
            <View style={viewStyle}>
                <Text style={textStyle}>{title}</Text>
            </View>
        </Pressable>
    );

};