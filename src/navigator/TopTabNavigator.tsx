import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Historial } from '../screens/Historial';
import { TopTapServicios } from '../screens/TopTapServicios';
import { StackNavigator } from './StackNavigator';

const Tab = createMaterialTopTabNavigator();
const {top} = useSafeAreaInsets()
export const TopTabNavigator=()=> {
  return (
    <Tab.Navigator
    screenOptions={{
      tabBarActiveTintColor:'#6b40d6'  ,
      tabBarIndicatorStyle:{backgroundColor:'#6b40d6'},
      tabBarLabelStyle: { fontSize: 12 },
      tabBarStyle: { backgroundColor: '#fff'},
      tabBarInactiveTintColor:'#c1c1c1',
      tabBarIndicatorContainerStyle:{ shadowColor: 'transparent'},
    }}
    >
      <Tab.Screen name="Pedido" component={StackNavigator} />
      <Tab.Screen name="Servicios" component={TopTapServicios} />
    </Tab.Navigator>
  );
}