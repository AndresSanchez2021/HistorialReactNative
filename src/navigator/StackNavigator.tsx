import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Historial } from '../screens/Historial';
import { Resumen } from '../screens/Resumen';


export type RootStackParams={
  Historial:undefined,
  Resumen: {id:number, nombre:string},

}

const Stack = createStackNavigator<RootStackParams>();

export const  StackNavigator=()=> {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown:true, //para mostrar el header
        headerStyle:{
          elevation:0
        },
        cardStyle:{
          backgroundColor:'white'
        }
      }}
     
    >
      <Stack.Screen name="Historial" options={{title:'Historial'}} component={Historial} />
      <Stack.Screen name="Resumen" options={{title:'Resumen'}} component={Resumen} />
    </Stack.Navigator>
  );
}