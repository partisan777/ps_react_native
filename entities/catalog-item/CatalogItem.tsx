import { View, Text, StyleSheet, Image, ImageBackground, Animated, TouchableOpacity, Dimensions } from "react-native";
import { CatalogItemProps } from './CatalogItemProps';
import { RADIUSES, COLORS } from '../../common/CONSTANTS';
import { CustomAnimatedButton } from "../../shared/button/CustomAnimatedButton";
import { useRouter } from "expo-router";
import { normalize } from '@/utils/utils';

export function CatalogItem (props: CatalogItemProps) {
    const { id, name, subTitle, type, price, image, description, rating } = props;
    // const navigation = useNavigation();
    const router = useRouter();

    const animatedColorButtonValue = new Animated.Value(100);

      const colorButton = animatedColorButtonValue.interpolate({
            inputRange: [0, 100],
            outputRange: [COLORS.BROWN, COLORS.BROWN_LIGHT]
        });

      const fadeInButton = Animated.timing(animatedColorButtonValue, {
                toValue: 0,
                duration: 100,
                useNativeDriver: true
        });

      const fadeOutButton = Animated.timing(animatedColorButtonValue, {
                toValue: 100,
                duration: 100,
                useNativeDriver: true
        });
        const dynamicMargin = (Dimensions.get('window').width - styles.container.width * 2 )/4;
        return (
            <TouchableOpacity onPress={() => router.push(`/catalog/${id}`)}>
                <View style={{...styles.container, marginHorizontal: dynamicMargin, marginVertical: dynamicMargin / 2 }}>
                    <View>
                        <Image source={{ uri: image, }} resizeMode="cover" style={styles.mainImage} />
                    </View>
                    <View style={styles.ratingContainer}>
                        <Image source={require('../../assets/star.png')} resizeMode="cover" style={styles.ratingImage} />
                        <Text style={styles.ratingText}>{rating}</Text>
                    </View>
                    <View style={styles.titleContainer}>
                        <Text style={styles.mainTitleText}>{name}</Text>
                        <Text style={styles.subTitleText}>{subTitle}</Text>
                    </View>
                    <View style={styles.priceContainer}>
                        <Text style={styles.price}>{price + ' ₽'}</Text>
                        <CustomAnimatedButton
                            title={'+'}
                            viewStyle={styles.addToCartButtonView}
                            textStyle={styles.addToCartButtonText}
                            backGroundColor={colorButton}
                            fadeIn={fadeInButton}
                            fadeOut={fadeOutButton}
                        />
                    </View>
            </View>
        </TouchableOpacity>
    );1
};


const styles = StyleSheet.create({
    container: {
        width: 155,
        height: 280,
        borderRadius: RADIUSES.r16,
        backgroundColor: COLORS.WHITE,
        alignItems: 'center',
        paddingTop: 4,
    },
    mainImage: {
        width: 141,
        height: 132,
        borderRadius: RADIUSES.r16,
        marginTop: 4,
    },
    ratingContainer: {
        flexDirection: 'row',
        width: 55,
        height: 25,
        paddingTop: 11,
        paddingRight: 8,
        paddingBottom: 3,
        paddingLeft: 8,
        backgroundColor: COLORS.TRANSPARENT,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
    },
    ratingImage: {
        width: 10,
        height: 10,
    },
    ratingText: {
        width: 16,
        height: 13,
        fontSize: normalize(10),
        marginLeft: 5,
        color: COLORS.WHITE,
    },
    titleContainer: {
        marginTop: 12,
        marginBottom: 12,
        paddingLeft: 5,
        flex: 1,
        width: '90%',
        // paddingHorizontal: 25,
        justifyContent: 'flex-start',
        alignItems: 'flex-start'

    },
    mainTitleText: {
        fontSize: 16,
        color: COLORS.DARK_BROWN,
        marginBottom: 4,
    },
    subTitleText: {
        fontSize: 12,
        color: COLORS.TEXT_GRAY,
    },
    priceContainer: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        height: 40,
        paddingLeft: 12,
        paddingRight: 12,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    price: {
        color: COLORS.DARK_GREEN,
        fontSize: 18,
    },
    addToCartButtonView: {
        backgroundColor: COLORS.BROWN_LIGHT,
        justifyContent: 'center',
        alignItems: 'center',
        width: 32,
        height: 32,
        borderRadius: RADIUSES.r10,
    },
    addToCartButtonText: {
        color: COLORS.WHITE,
        fontSize: normalize(20),
    },

});
