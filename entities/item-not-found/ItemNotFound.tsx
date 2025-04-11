import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../../common/CONSTANTS';

export function ItemNotFound() {

    return (
        <View style={styles.notFoundConainer}>
            <Text style={styles.notFoundText}>Ничего не найдено</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    notFoundConainer: {
        width: '100%',
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    notFoundText: {
        color: COLORS.DARK_GREEN,
        fontSize: 20,
    },
});