import { Link } from "expo-router";
import { Text } from "react-native";


export default function Cart() {


    return (
        <>
            <Text>Cart</Text>
            <Link href="/success">Завершить заказ</Link>
            <Link href="/">На главную</Link>
        </>
    )
};
