import { View, StyleSheet, ScrollView } from 'react-native';
import { CustomAnimatedButton } from '../../shared/button/CustomAnimatedButton';
import { COLORS, RADIUSES } from '../../common/CONSTANTS';
import { CatalogSearchButtonsProps } from './CatalogSearchButtonsProps';
import { buttonList } from '../../models/ButtonList';

export function CatalogSearchButtons ({...props}: CatalogSearchButtonsProps) {

    const { coffeeType, setCoffeeType } = props;

    return (
        <View>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                <View style={styles.container}>
                    {
                        buttonList.map((item, index) => {
                            return  <CustomAnimatedButton
                                        key={item.id}
                                        title={item.label}
                                        viewStyle={[styles.buttonView, coffeeType === item.type ? styles.activeButtonView : styles.notActiveButtonView]}
                                        textStyle={styles.buttonText}
                                        onPressIn={() => { setCoffeeType(item.type) }}
                                    />
                        })
                    }
                </View>
            </ScrollView>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 6,
        marginBottom: 2,
    },
    buttonView: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 103,
        height: 38,
        borderRadius: RADIUSES.r12,
        gap: 5,
    },
    buttonText: {
        color: COLORS.DARK_GREEN,
        fontSize: 14,
    },
    activeButtonView: {
        backgroundColor: COLORS.BROWN_LIGHT,
    },
    notActiveButtonView: {
        backgroundColor: COLORS.WHITE,
    },
});
