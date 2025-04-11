import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import { CustomAnimatedButton } from "../../shared/button/CustomAnimatedButton";
import { COLORS, PRODUCT_SIZE, RADIUSES } from "../../common/CONSTANTS";
import OrderItem from "../../entities/order-item/OrderItem";
import { OrderItemProps } from "../../entities/order-item/OrderItemProps";
import OrderPriceItem from "../../entities/order-price-item/OrderPriceItem";
import CustomLine from "../../shared/custo-line.tsx/CustomLine";


const mockProps: OrderItemProps[] = [
    {
        orderId: 1,
        item: {
            id: 2,
            name: "Капучино",
            subTitle: "с гранатом",
            type: "cappuccino",
            price: 280,
            image: "https://cdn-bucket.hb.ru-msk.vkcs.cloud/purple-images/coffee-api/coffee3.png",
            description: "Необычное сочетание граната и кофе предаёт этому напитку пряные нотки.",
            rating: 4.9
        },
        count: 2,
        size: PRODUCT_SIZE.M,
    },
];

const mockPriceItemData = [
    {
        label: 'Цена',
        amount: '270 ₽',
    },
    {
        label: 'Доставка',
        amount: '100 ₽',
    },
    {
        label: 'Итого к оплате',
        amount: '370 ₽',
    },
];

export default function Cart() {
    const containerHeight = Dimensions.get('window').height - 550;

    return (
        <View style={styles.cartContainer}>
            <View style={styles.cartHeaderContainer}>
                <View style={styles.cartHeaderButton}>
                    <CustomAnimatedButton
                        imgStyle={styles.cartHeaderButtonImg}
                        img={require('../../assets/arrow-left.png')}
                    />
                </View>
                <Text style={styles.cartHeaderText}>{'Заказ'}</Text>
            </View>
            <View style={styles.destinationAddressContainer}>
                <Text style={styles.destinationAddressHeader}>{'Адрес доставки'}</Text>
                <Text style={styles.destinationAddressAddress}>{'Москва, Новослободская 23'}</Text>
                <Text style={styles.destinationAddressComment}>{'Позвонить около входа в бизнес центр'}</Text>
                <CustomAnimatedButton
                        title={'Редактировать адрес'}
                        viewStyle={styles.destinationAddressChangeButtonView}
                        textStyle={styles.destinationAddressChangeButtonText}
                        imgStyle={styles.destinationAddressChangeButtonImg}
                        img={require('../../assets/edit-black.png')}
                    />
            </View>
            <CustomLine {...styles.smallUnderLine} />
            <View style={{flex: 1,}}>
                <FlatList
                    removeClippedSubviews={false}
                    scrollEnabled={true}
                    data={mockProps}
                    numColumns={2}
                    renderItem={({ item }) => <OrderItem {...item} /> }
                    keyExtractor={(item) => item.item.id.toString()}
                />
            </View>
            <CustomLine {...styles.bigUnderLine} />
            <Text style={styles.orderTotallabel}>{'Итог'}</Text>
            {
                mockPriceItemData.slice(0, -1).map(item => <OrderPriceItem key={item.label} label={item.label} amount={item.amount} />)
            }
            <CustomLine {...styles.smallUnderLine} />
            {
                mockPriceItemData.slice(-1).map(item => <OrderPriceItem key={item.label} label={item.label} amount={item.amount} />)
            }
            <View style={styles.OrderButtonContainer}>
                <CustomAnimatedButton
                    title={'Заказать'}
                    viewStyle={styles.OrderButtonView}
                    textStyle={styles.OrderButtonText}
                />
            </View>
        </View>
    )
};


const styles = StyleSheet.create({
    cartContainer: {
        flex: 1,
        width: '100%',
        backgroundColor: COLORS.WHITE,
        justifyContent: 'flex-start',
    },
    cartHeaderContainer: {
        width: '100%',
        height: 55,
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 30,
    },
    cartHeaderButton: {
        width: 24,
        height:24,
        flex: 1,
    },
    cartHeaderButtonImg: {
        width: 20,
        height: 20,
    },
    cartHeaderText: {
        fontFamily: 'Sora',
        fontSize: 18,
        color: COLORS.DARK_BROWN,
        flex: 1.3,
    },
    destinationAddressContainer: {
        marginHorizontal: 25,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginBottom: 40,
    },
    destinationAddressHeader: {
        fontFamily: 'Sora',
        fontSize: 20,
        fontWeight: 600,
        color: COLORS.DARK_BROWN
    },
    destinationAddressAddress: {
        marginTop: 5,
        fontFamily: 'Sora',
        fontSize: 18,
        color: COLORS.DARK_BROWN
    },
    destinationAddressComment: {
        marginTop: 8,
        fontFamily: 'Sora',
        fontSize: 16,
        color: COLORS.GRAY,
        maxWidth: 300,
        flexWrap: 'wrap',
    },
    destinationAddressChangeButtonView: {
        marginTop: 15,
        flexDirection: 'row',
        borderStyle: 'solid',
        borderRadius: RADIUSES.r16,
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderColor: COLORS.TEXT_LIGHT_GRAY,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
        borderWidth: 2,
    },
    destinationAddressChangeButtonText: {
        fontFamily: 'Sora',
        fontSize: 14,
        color: COLORS.TEXT_DARK_GREY,

    },
    destinationAddressChangeButtonImg: {
        width: 17,
        height: 17,
    },
    orderTotallabel: {
        fontFamily: 'Sora',
        fontWeight: 600,
        fontSize: 16,
        color: COLORS.DARK_BROWN,
        marginVertical: 11,
        marginHorizontal: 30,
    },
    OrderButtonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 64,
        marginVertical: 15,
    },
    OrderButtonView: {
        width: 315,
        height: 62,
        borderRadius: RADIUSES.r16,
        backgroundColor: COLORS.BROWN_LIGHT,
        alignItems: 'center',
        justifyContent: 'center',
    },
    OrderButtonText: {
        fontFamily: 'Sora',
        fontWeight: 600,
        fontSize: 16,
        color: COLORS.WHITE,
    },
    smallUnderLine: {
        height: 1,
        backgroundColor: COLORS.TAB_BAR_LIGHT_GRAY,
        marginHorizontal: 30,
    },
    bigUnderLine: {
        height: 4,
        backgroundColor: COLORS.TAB_BAR_LIGHT_GRAY,
    },
});
