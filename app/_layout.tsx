import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { COLORS } from '../common/CONSTANTS';
import { Text, View } from 'react-native';
import { normalize } from '@/utils/utils';

export default function RootRayout() {
	const insets = useSafeAreaInsets();
	const [loaded, error] = useFonts({
		Sora: require('../assets/fonts/SoraVariable-Regular.ttf'),
    });

	if (!loaded) {
		return <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black'}}>
			<Text style={{color: 'white', fontSize: 16}}>Загрузка шрифтов...</Text>
			<Text style={{color: 'white', fontFamily: 'Sora', fontSize: normalize(16)}}>Загрузка шрифтов...</Text>
		</View>;
	};

	return (
		<SafeAreaProvider>
			<StatusBar style="light" />
			<Stack
				screenOptions={{
					contentStyle: {
						backgroundColor: COLORS.BLACK,
						paddingTop: insets.top,
					},
					headerShown: false,
				}}
			>
				<Stack.Screen name="index" />
			</Stack>
		</SafeAreaProvider>
	);
}
