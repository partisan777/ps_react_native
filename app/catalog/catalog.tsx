import { Text, View } from "react-native";
import { Link } from "expo-router";


export default function Catalog() {

    return (
        <View>
            <Text>Catalog</Text>
            <Link href="/cart">В корзину</Link>
            <Link href="/address">Ввести адрес доставки</Link>
            <Link href={'/catalog/123'}>ItemId 123</Link>
            <Link href="/">На главную</Link>
        </View>
    )
};
