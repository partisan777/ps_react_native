import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { HomeImg } from '../../../assets/HomeImg';
import Catalog from '../catalog';

export default function TabLayout() {
  console.log(1111, 'tabs/_layout');
  return (
    <>
    <Catalog />
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        // name="index"
        options={{
          title: 'Home',
          tabBarIcon: () => <HomeImg />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: () => <FontAwesome size={28} name="cog" color={'red'} />,
        }}
      />
    </Tabs>
    </>
  );
};
