import { View, Text } from 'react-native';
import { Link, useLocalSearchParams } from 'expo-router';

export default function Item() {
	const { itemId } = useLocalSearchParams();
	return (
		<View>
			<Text>{itemId}</Text>
			<Link href={'/catalog'}>В каталог</Link>
		</View>
	);
}