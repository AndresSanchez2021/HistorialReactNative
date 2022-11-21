import 'react-native-gesture-handler';
import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigator/StackNavigator';
import { BottomTabsNavigation } from './src/navigator/BottomTabsNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
  return (
   <SafeAreaProvider>
    <NavigationContainer>
     <BottomTabsNavigation/>
    </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default App
