import { useNavigation } from "expo-router";
import { StyleSheet, View, Image, TextInput } from "react-native";
import OrderScreenHeader from "../../entities/order-screen-header/OrderScreenHeader";
import { COLORS, RADIUSES } from "../../common/CONSTANTS";
import * as Location from 'expo-location';
import { CustomAnimatedButton } from "@/shared/button/CustomAnimatedButton";
import { useAtom } from "jotai";
import { destinationAddressAtom, destinationAddressCommentAtom } from "@/store/DestinationAddress";
import { useState } from "react";


export default function ChangeAddress() {
    const navigation = useNavigation();
    const [errorMessage, setErrorMessage] = useState<any>(null);
    const [loading, setLoading] = useState<any>(false);
    const [address, setAddress] = useAtom<Location.LocationGeocodedAddress[] | null>(destinationAddressAtom);
    const [comment, setComment] = useAtom<string | null>(destinationAddressCommentAtom);

    const getCurrentLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            setErrorMessage('Разрешение на определение местоположения не предоставлено.');
            return;
        }
        try {
            setErrorMessage(null);
            setLoading(true);
            let location = await Location.getCurrentPositionAsync({});
            let coordinates = { latitude: location.coords.latitude, longitude: location.coords.longitude };
            let address = await Location.reverseGeocodeAsync(coordinates);
            setAddress(address);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setErrorMessage(error.message);
        }
    };

    const setValue = () => {
        if (errorMessage) {
            return errorMessage;
        };
        if (loading) {
            return 'Идет загрузка данных';
        };
        if (address) {
            return `${address[0].city}, ${address[0].name}` ;
        };
        return 'Адрес не определен';
    };

      return (
         <View style={styles.container}>
            <OrderScreenHeader
                title={'Изменить адрес'}
                img={require('../../assets/arrow-left.png')}
                onPress={() => navigation.goBack()}
            />
            <View style={styles.addressContainer}>
                <Image style={styles.addressContainerImg} source={require('../../assets/nav-logo.png')}/>
                <TextInput style={styles.addressContainerText} value={setValue()}/>
                <CustomAnimatedButton
                    img={require('../../assets/get-location.png')}
                    imgStyle={styles.addressContainerGetLocationButtonImg}
                    viewStyle={styles.addressContainerGetLocationButton}
                    onPressOut={getCurrentLocation}
                />
            </View>
            <View style={{...styles.addressContainer, height: 100, alignItems: 'flex-start'}}>
                <Image style={{...styles.addressContainerImg, marginTop: 15}} source={require('../../assets/comment.png')}/>
                <TextInput
                    style={{...styles.addressContainerText, marginRight: 35, height: 90, marginVertical: 10}}
                    placeholder="Введите текст..."
                    onChangeText={setComment}
                    multiline
                    numberOfLines={4}
                />
            </View>
         </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: COLORS.WHITE,
        justifyContent: 'flex-start',
    },
    addressContainer: {
        flexDirection: 'row',
        borderColor: COLORS.LIGHT_GRAY,
        borderWidth: 1,
        borderRadius: RADIUSES.r14,
        marginHorizontal: 30,
        marginVertical: 15,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15,
        height: 60,
        gap: 10,
    },
    addressContainerImg: {
        width: 13,
        height: 17,
    },
    addressContainerText: {
        flex: 1,
        height: 20,
    },
    addressContainerGetLocationButton: {
        height: 34,
        width: 34,
    },
    addressContainerGetLocationButtonImg: {
        height: 34,
        width: 34,
    },
});
