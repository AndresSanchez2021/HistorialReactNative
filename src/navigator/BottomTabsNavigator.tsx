import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Historial } from '../screens/Historial';
import { BottomTabInicio } from '../screens/BottomTabInicio';
import { StackNavigator } from './StackNavigator';
import { Text } from 'react-native';
import { TopTabNavigator } from './TopTabNavigator';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();


export const BottomTabsNavigation=() => {
  return (
    <Tab.Navigator
        sceneContainerStyle={{
            backgroundColor:'white'
        }}


     
        screenOptions={({route})=>({
            tabBarActiveTintColor: '#6b40d6',
            tabBarIndicatorStyle:{backgroundColor:'#6b40d6'},
            tabBarIcon:({color,focused,size})=>{
                let iconName: string='I'
                
                switch (route.name) {
                    case 'Historial':
                        iconName='home-outline'
                        break;
                    case 'Inicio':
                        iconName='stopwatch-outline'
                        break;
                    case 'Promos':
                        iconName='ribbon-outline'
                        break;
                    case 'Cuenta':
                        iconName='paw-outline'
                        break;
                }
                return <Icon name={iconName}  size={30} color={color} />;
               
            }
        })}

    >

      <Tab.Screen name="Inicio" component={BottomTabInicio} />
      <Tab.Screen name="Historial" component={TopTabNavigator} /> 
      <Tab.Screen name="Promos" component={BottomTabInicio} />
      <Tab.Screen name="Cuenta" component={BottomTabInicio} />
     
    </Tab.Navigator>
  );
}