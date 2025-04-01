import { Link } from "expo-router";
import { Text } from "react-native";


export default function Address() {


    return (
        <>
            <Text>Address</Text>
            <Link href="/cart">В корзину</Link>
            <Link href="/">На главную</Link>
        </>
    )
};
