import { StyleSheet, View, Text } from "react-native";
import { OrderScreenHeaderProps } from "./OrderScreenHeaderProps";
import { CustomAnimatedButton } from "../../shared/button/CustomAnimatedButton";
import { COLORS } from "../../common/CONSTANTS";

export default function OrderScreenHeader({title, img, onPress}: OrderScreenHeaderProps) {

    return(
         <View style={styles.orderHeaderContainer}>
            <View style={styles.orderHeaderButton}>
                <CustomAnimatedButton
                    imgStyle={styles.orderHeaderButtonImg}
                    img={img}
                    onPressOut={onPress}
                />
            </View>
            <View style={styles.orderHeadertextContainer}>
                <Text style={styles.orderHeaderText}>{title}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    orderHeaderContainer: {
        width: '100%',
        height: 55,
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    orderHeaderButton: {
        width: 24,
        height:24,
    },
    orderHeaderButtonImg: {
        width: 20,
        height: 20,
    },
    orderHeaderText: {
        fontFamily: 'Sora',
        fontSize: 18,
        color: COLORS.DARK_BROWN,
    },
    orderHeadertextContainer: {
        height:24,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
