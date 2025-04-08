import { StyleSheet, Text, View } from "react-native";
import { Link, Stack } from "expo-router";
import { COFFEE_TYPE, COLORS } from "../../common/CONSTANTS";
import { SearchInput } from "../../entities/search-Input/SearchInput";
import { AddressDisplay } from "../../entities/address-display/AddressDisplay";
import { CatalogSearchButtons } from "../../entities/catalog-search-buttons/CatalogSearchButtons";
import CatalogItemsList  from "../../entities/catalog-items-list/CatatogItemsList";
import { useEffect, useState } from "react";
import { MAIN_URL } from "../../common/URL";


export default function Catalog() {
    console.log(1111, 'catalog');
    const [coffeeType, setCoffeeType] = useState<COFFEE_TYPE>(COFFEE_TYPE.ALL);
    const [searchCoffee, setSearchCoffee] = useState<string>('');
    const [url, setUrl] = useState<string>(`${MAIN_URL}?type=&text=`);

    useEffect(()=>{
        setUrl(`${MAIN_URL}?type=${coffeeType}&text=${searchCoffee}`);
    }, [coffeeType, searchCoffee]);

    const onInputChange = (text: string) => {
        setSearchCoffee(text);
    };

    return (
        <View style={{flex:1, height: '100%'}}>
            <View style={styles.header_container}>
                <View>
                    <AddressDisplay />
                    <SearchInput onInputChange={onInputChange}/>
                </View>
            </View>
            <View style={styles._container}>
                <CatalogSearchButtons coffeeType={coffeeType} setCoffeeType={setCoffeeType}/>
                <CatalogItemsList url={url} />
                <Link href="/cart">В корзину</Link>
                <Link href="/address">Ввести адрес доставки</Link>
                <Link href={'/catalog/123'}>ItemId 123</Link>
                <Link href="/">На главную</Link>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header_container: {
        // marginTop: 10,
        backgroundColor: COLORS.BLACK,
        gap: 10,
        marginLeft: 16,
        marginRight: 16,
        marginBottom: 10,
    },
    _container: {
        // flex: 1,
        // marginTop: 20,
        
        paddingTop: 0, paddingBottom: 10,
        backgroundColor: COLORS.WHITE,
        gap: 10,
        height: '100%',
    },

});
