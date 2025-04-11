import { StyleSheet, View, Text } from "react-native";
import { COLORS, RADIUSES } from "../../common/CONSTANTS";
import HomeImg from "../../assets/HomeImg";
import BagImg from "../../assets/BagImg";


export default function TabIcon (props: any) {
    const {focused, title, imgId} = props;
    const activeColorImg = focused ? COLORS.BROWN_LIGHT : COLORS.TEXT_GRAY3;
    const activeColorP6lptik = focused ? COLORS.BROWN_LIGHT : COLORS.TRANSPARENT;

    let RRR = () => <Imgg color={activeColorImg} /> ;

    return (
        <View style={styles.tabIconMainContainer}>
            <View style={styles.tabBarImgContainer}>
                {imgId===1 && <HomeImg color={activeColorImg}/>}
                {imgId===2 && <BagImg color={activeColorImg}/>}
                <View style={{...styles.tabBarImgP6lptik, backgroundColor: activeColorP6lptik}}></View>
            </View>
            <View style={styles.tabIconTextContainer}>
                <Text style={styles.tabIconText}>{title}</Text>
            </View>
        </View>
    );

};

const styles = StyleSheet.create({
    tabIconMainContainer: {
        flexDirection: 'row',
        width: 180,
        gap: 10,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 5,
    },
    tabIconTextContainer: {

    },
    tabIconText: {
        fontFamily: 'Sora',
        fontSize: 14,
        color: COLORS.TEXT_GRAY3,
    },
    tabBarImgContainer: {
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    tabBarImg: {
        width: 24,
        height: 24,
    },
    tabBarImgP6lptik: {
        marginTop: 5,
        width: 10,
        height: 5,
        borderRadius: RADIUSES.r18,
    },
})
