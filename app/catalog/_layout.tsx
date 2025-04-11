import {  Stack } from "expo-router";

export default function CatalogLayout() {

    return (
        <Stack>
            <Stack.Screen
                name="(tabs_catalog)"
                options={{
                    headerShown: false, // Убирает заголовок навигации
                }}
        />
        </Stack>
    )
};
