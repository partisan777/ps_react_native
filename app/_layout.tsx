import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { COLORS } from '../common/CONSTANTS';

export default function RootRayout() {
	const insets = useSafeAreaInsets();
	const [loaded, error] = useFonts({
		Sora: require('../assets/fonts/Sora-Variable.ttf'),
    });
	return (
		<SafeAreaProvider>
			<StatusBar style="light" />
			<Stack
				screenOptions={{
					// statusBarColor: COLORS.BLACK,
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
