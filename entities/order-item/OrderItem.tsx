import { View, Text, Image, StyleSheet } from "react-native";
import { COLORS, RADIUSES } from "../../common/CONSTANTS";
import { OrderItemProps } from "./OrderItemProps";
import { CustomAnimatedButton } from "../../shared/button/CustomAnimatedButton";




export default function OrderItem(props: OrderItemProps) {

    const { count, item, size } = props;
    const { name, subTitle, image }= item;

    return (
        <View style={styles.orderItemContainer} >
            <Image source={{ uri: image, }} style={styles.orderItemImage} />
            <View style={styles.orderItemTitleContainer}>
                <Text style={styles.orderItemTitleContainerLabel}>{name}</Text>
                <Text style={styles.orderItemTitleContainerSubLabel}>{`${subTitle} / ${size ? size : ''}`}</Text>
            </View>
            <View style={styles.orderItemButtonsContainer}>
                <CustomAnimatedButton
                    title={'-'}
                    viewStyle={styles.orderItemButtonContainerButton}
                    textStyle={styles.orderItemButtonText}
                />
                <Text style={styles.orderItemButtonsContainerText}>{count}</Text>
                <CustomAnimatedButton
                    title={'+'}
                    viewStyle={styles.orderItemButtonContainerButton}
                    textStyle={styles.orderItemButtonText}
                />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    orderItemContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 30,
        marginVertical: 15,
    },
    orderItemImage: {
        width: 54,
        height: 54,
    },
    orderItemTitleContainer: {},
    orderItemTitleContainerLabel: {
        fontFamily: 'Sora',
        fontSize: 18,
        color: COLORS.DARK_BROWN,
        justifyContent: 'flex-start',
        width: 150,
    },
    orderItemTitleContainerSubLabel: {
        color: COLORS.TEXT_GRAY,
        fontFamily: 'Sora',
        fontSize: 12,
        flexWrap: 'wrap',
    },
    orderItemButtonsContainer: {
        flexDirection: 'row',
        gap: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    orderItemButtonContainerButton: {
        width: 28,
        height: 28,
        borderRadius: RADIUSES.r20,
        borderWidth: 1,
        borderColor: COLORS.LIGHT_GRAY,
        alignItems: 'center',
        justifyContent: 'center',
    },
    orderItemButtonsContainerText: {
        fontFamily: 'Sora',
        fontSize: 18,
    },
    orderItemButtonText: {
        color: COLORS.BLACK,
        fontSize: 12,
    },
});
