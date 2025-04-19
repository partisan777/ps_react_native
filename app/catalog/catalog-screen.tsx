import { StyleSheet, Text, View } from "react-native";
import { COFFEE_TYPE, COLORS } from "../../common/CONSTANTS";
import { SearchInput } from "../../entities/search-Input/SearchInput";
import { AddressDisplay } from "../../entities/address-display/AddressDisplay";
import { CatalogSearchButtons } from "../../entities/catalog-search-buttons/CatalogSearchButtons";
import CatalogItemsList  from "../../entities/catalog-items-list/CatatogItemsList";
import { useEffect, useState } from "react";
import { MAIN_URL } from "../../common/URL";


export default function Catalog() {

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
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header_container: {
        backgroundColor: COLORS.BLACK,
        gap: 10,
        paddingLeft: 20,
        paddingRight: 20,
    },
    _container: {
        paddingTop: 0, paddingBottom: 10,
        backgroundColor: COLORS.TEXT_LIGHT_GRAY,
        gap: 10,
        height: '100%',
    },

});
