import { Pressable, PressableProps, View, Text } from "react-native";
import { CustomButtomProps } from "./CustomButtomProps";


export const CustomButton = ({...props}: PressableProps & CustomButtomProps) => {
    const { title, viewStyle, textStyle } = props;
    return(
        <Pressable {...props}>
            <View style={viewStyle}>
                <Text style={textStyle}>{title}</Text>
            </View>
        </Pressable>
    );

};