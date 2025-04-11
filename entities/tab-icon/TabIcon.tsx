import { StyleSheet, View, Text, Dimensions } from "react-native";
import { COLORS, RADIUSES } from "../../common/CONSTANTS";
import HomeImg from "../../assets/HomeImg";
import BagImg from "../../assets/BagImg";
import { TabIconProps } from "./TabIconProps";


export default function TabIcon (props: TabIconProps) {
    const {focused, title, imgId} = props;
    const activeColorImg = focused ? COLORS.BROWN_LIGHT : COLORS.TEXT_GRAY3;
    const activeColorP6lptik = focused ? COLORS.BROWN_LIGHT : COLORS.TRANSPARENT;

    const tabWidth = Dimensions.get('window').width / 2;
    const rightBorder = imgId === 1 ? styles.borderedView : {};

    return (
        <View style={{...styles.tabIconMainContainer, width: tabWidth, ...rightBorder }}>
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
        marginTop: 10,
        height: 35,
        flexDirection: 'row',
        width: '100%',
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
        alignItems: 'center',
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
    borderedView: {
        borderRightWidth: 2,
        borderColor: COLORS.TAB_BAR_LIGHT_GRAY,
        borderStyle: 'solid',

    },
});

