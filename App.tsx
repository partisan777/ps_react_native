import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <Button title={'ewdfw'} color={'red'}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    // backgroundColor: '#fff',
    color: '#fff',
  },
  btn: {
    // backgroundColor: '#fff',
    color: '#fff',
  }
});
