import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import { COLORS } from "../../common/CONSTANTS";


export default function Catalog() {
    // console.log('catalog');
    return (
        <View style={styles.container}>
            <Text>Catalog</Text>
            <Link href="/cart">В корзину</Link>
            <Link href="/address">Ввести адрес доставки</Link>
            <Link href={'/catalog/123'}>ItemId 123</Link>
            <Link href="/">На главную</Link>
        </View>
    )
};



const styles = StyleSheet.create({
  container: {
   marginTop: 20,
   backgroundColor: COLORS.WHITE,
   gap: 10
  }});
