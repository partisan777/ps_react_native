import {View, Text, StyleSheet } from 'react-native'
import { CustomAnimatedButton } from '../../shared/button/CustomAnimatedButton';
import { COLORS } from '../../common/CONSTANTS';


export function AddressDisplay() {

    return (
        <View style={styles.container}>
            <Text style={styles.h3}>{'Адрес'}</Text>
            <View style={styles.h1_container}>
                <Text style={styles.h1}>{'Москва, Новослободская 23'}</Text>
                <CustomAnimatedButton
                    viewStyle={styles.button}
                    textStyle={styles}
                    title={require('../../assets/edit.png')}
                />
            </View>
        </View>
    )
};


const styles = StyleSheet.create({
    container: {
        height: 50,
        gap: 4,
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
    },
});
