import { View } from "react-native";
import Catalog from "./catalog"
import { Link, Stack } from "expo-router";

export function CatalogLayout() {
    console.log(1111, 'catalog/_layout');
    return (
        <>
        {/* <View style={{backgroundColor: 'white', flex: 1}}> */}
            <Catalog />
            <Stack>
                <Stack.Screen name="(tabs)"  />
            </Stack>
        {/* </View> */}
        </>
    )
};
