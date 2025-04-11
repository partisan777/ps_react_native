import { Tabs } from 'expo-router';
import { COLORS, RADIUSES } from '../../../common/CONSTANTS';
import TabIcon from '../../../entities/tab-icon/TabIcon';

export default function TabLayout() {

  return (
    <Tabs
    screenOptions={{
        tabBarActiveTintColor: COLORS.BROWN_LIGHT,
        headerShown: false,
        tabBarStyle: {
          width: '100%',
          height: 55,
          backgroundColor: COLORS.WHITE,
          borderRadius: RADIUSES.r24,
        },
        tabBarLabelStyle: {
          fontWeight: 'bold',
          color: COLORS.TEXT_GRAY3,
        },
      }}
    >
      <Tabs.Screen
        name="catalog-tab"
        options={{
          title: '',
          tabBarIcon: (({ focused }) => <TabIcon focused={focused} title={'Главная'} imgId={1}/>),
        }}
      />
      <Tabs.Screen
        name="cart-tab"
        options={{
          title: '',
          tabBarIcon: (({ focused }) => <TabIcon focused={focused} title={'Заказ'}  imgId={2}/>),
        }}
      />
    </Tabs>
  );
};
