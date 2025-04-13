import {View, Text, StyleSheet, Dimensions } from 'react-native'
import { CustomAnimatedButton } from '../../shared/button/CustomAnimatedButton';
import { COLORS } from '../../common/CONSTANTS';
import { destinationAddressAtom } from '@/store/DestinationAddress';
import { useAtom } from 'jotai';
import * as Location from 'expo-location';
import { useRouter } from 'expo-router';


export function AddressDisplay() {
    const router = useRouter();
    const [address, setAddress] = useAtom<Location.LocationGeocodedAddress[] | null>(destinationAddressAtom);
    const screenWidth = Dimensions.get('window').width;

    return (
        <View style={{...styles.container, width: screenWidth}}>
            <Text style={styles.h3}>{'Адрес'}</Text>
            <View style={styles.h1_container}>
                <Text style={styles.h1}>{address ? `${address[0].city}, ${address[0].name}` : 'Адрес не определен'}</Text>
                <CustomAnimatedButton
                    viewStyle={styles.button}
                    img={require('../../assets/edit.png')}
                    imgStyle={styles.buttonImg}
                    onPressOut={() => router.push('/change-address')}
                />
            </View>
        </View>
    )
};


const styles = StyleSheet.create({
    container: {
        height: 50,
        gap: 4,
        backgroundColor: COLORS.BLACK,
    },
    h1_container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    h1: {
        color: COLORS.TEXT_LIGHT_GRAY,
        fontSize: 14,
    },
    h3: {
        fontSize: 12,
        color: COLORS.TEXT_GRAY2,
    },
    button: {
        marginLeft: 10,
        width: 14,
        height: 14,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonImg: {
        width: 14,
        height: 14,
    },
});
