import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { CustomButton } from '../common/CustomButton';

export const StartScreen = () => {

    return (
      <View style={styles.container}>
        <ImageBackground source={require('../assets/cup.png')} resizeMode="cover" style={styles.backGrounImage}>
            <Text style={styles.h1}>{`Одно из самых вкусных кофе в городе!`}</Text>
        </ImageBackground>
        <Text style={styles.h3}>{`Свежие зёрна, настоящая арабика и бережная обжарка`}</Text>
        <CustomButton  title={'Начать'} viewStyle={styles.button} textStyle={styles.buttonText}/>
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'flex-end',
      paddingBottom: 28
    }, h1: {
      color: '#fff',
      fontSize: 34,
      textAlign: 'center',
      paddingBottom: 21,
      paddingLeft: 28,
      paddingRight: 28,
    }, h3: {
      color: '#A9A9A9',
      fontSize: 16,
      paddingBottom: 24,
      paddingLeft: 28,
      paddingRight: 28,
      textAlign: 'center',
    }, button: {
      width: 315,
      height: 62,
      borderRadius: 16,
      paddingTop: 20,
      paddingRight: 109,
      paddingBottom: 20,
      paddingLeft: 109,
      backgroundColor: '#C67C4E',
    }, buttonText: {
      textAlign: 'center',
      fontSize: 16,
      color: '#fff',
    },
    backGrounImage: {
      width: '100%',
      height: '85%',
      flex: 1,
      justifyContent: 'flex-end',
    }
  });
