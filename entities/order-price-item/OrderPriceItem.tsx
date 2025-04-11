import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../../common/CONSTANTS";


export default function OrderPriceItem(props: any){
    const { label, amount } = props;

    return (
        <View style={styles.orderPriceItemContainer}>
            <Text style={styles.OrderProceItemLabel}>{label}</Text>
            <Text style={styles.OrderProceItemAmount}>{amount}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    orderPriceItemContainer: {
        flex: 1,
        flexDirection: 'row',
        maxHeight: 25,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 30,
    },
    OrderProceItemLabel: {
        fontFamily: 'Sora',
        fontSize: 14,
        color: COLORS.DARK_BROWN,
        fontWeight: 400,
    },
    OrderProceItemAmount: {
        fontFamily: 'Sora',
        fontSize: 14,
        color: COLORS.DARK_BROWN,
        fontWeight: 600,
    },
});
