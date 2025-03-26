import { Pressable, PressableProps, View, Text } from "react-native";


export const CustomButton = ({title, viewStyle, textStyle, ...props}: PressableProps & {title: string} & {viewStyle: object} & {textStyle: object}) => {

    return(
        <Pressable {...props}>
            <View style={viewStyle}>
                <Text style={textStyle}>{title}</Text>
            </View>
        </Pressable>
    );

};