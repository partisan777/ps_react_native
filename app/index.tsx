import { Animated,  StyleSheet, Text, View, ImageBackground, Dimensions } from 'react-native';
import { useRef } from 'react';
import { COLORS } from '../common/CONSTANTS';
import { CustomAnimatedLink } from '../common/CustomAnimetedLink';



export default function StartScreen() {

////Animation button
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

////Animation padding top
  const windowHeight = Dimensions.get('window').height;
  const paddingAnimation = (
    styles.button.height +
    styles.button.marginBottom +
    styles.h3.maxHeight +
    styles.h3.marginBottom +
    styles.h1.marginBottom +
    styles.h1.maxHeight
  );

  const animatedTextValue = new Animated.ValueXY({
		x: 0,
		y: 30
	});

	Animated.timing(animatedTextValue, {
		toValue: {
			x: 0,
			y: windowHeight - paddingAnimation
		},
		duration: 1700,
		useNativeDriver: false
	}).start();

////Animation Opacity
  const opacityAnimation = useRef(new Animated.Value(0)).current;

  const opacityStyle = { opacity: opacityAnimation };

  Animated.timing(opacityAnimation, {
    toValue: 1,
    duration: 3000,
    useNativeDriver: true
  }).start();

  return (
      <View style={styles.container}>
        <ImageBackground source={require('../assets/cup.png')} resizeMode="cover" style={styles.backGrounImage}>
          <Animated.View style={[styles.animatedTextWiew, opacityStyle]}>
            <Animated.View style={{...styles.animatedTextWiew, paddingTop: animatedTextValue.y}}>
              <Text style={styles.h1}>{`Одно из самых вкусных кофе в городе!`}</Text>
			      </Animated.View>
          </Animated.View>
        </ImageBackground>
        <Text style={styles.h3}>{`Свежие зёрна, настоящая арабика и бережная обжарка`}</Text>
        <CustomAnimatedLink viewStyle={styles.button}
                            textStyle={styles}
                            title={'Начать'}
                            backGroundColor={colorButton}
                            fadeIn={fadeInButton}
                            fadeOut={fadeOutButton}
                            route={'/catalog'}
        />
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BLACK,
    alignItems: 'center',
    justifyContent: 'flex-end',
  }, h1: {
    color: COLORS.WHITE,
    fontSize: 34,
    maxHeight: 129,
    textAlign: 'center',
    marginBottom: 21,
    paddingLeft: 28,
    paddingRight: 28,
  }, h3: {
    color: COLORS.GRAY,
    maxHeight: 44,
    fontSize: 16,
    marginBottom: 24,
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
    marginBottom: 28,
    backgroundColor: COLORS.BROWN_LIGHT,
  }, buttonText: {
    textAlign: 'center',
    fontSize: 16,
    color: COLORS.WHITE,
  }, backGrounImage: {
    width: '100%',
    height: '85%',
    flex: 1,
    justifyContent: 'flex-end',
  }, animatedTextWiew: {
    flex: 1,
    alignItems: 'center',
    height: 100,
    flexGrow: 1,
  }
});
