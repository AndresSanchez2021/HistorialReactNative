import React, { useEffect } from 'react'
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/StackNavigator';
import { styles } from '../theme/appTheme';
import { State } from '../components/State';
import { FAQ } from '../components/FAQ';
import { backgroudCard } from '../theme/colorTheme';
import { InfoDetail } from '../components/InfoDetail';
import { Productos } from '../components/Productos';


interface Props extends StackScreenProps<RootStackParams,'Resumen'>{};


export const Resumen = ({route,navigation}:Props )=> {

    const params = route.params;
    useEffect(() => {
      navigation.setOptions({
        title: 'pedido '+params.id.toString()
      })
    }, [])
    
  return (
    <ScrollView>
      <View style={stylesResumen.container}>
        <State state={"En camino"}/>
        <FAQ/>
        <InfoDetail/>
        <Productos/>
      </View>
    </ScrollView>
)
}


export const stylesResumen = StyleSheet.create({
container:{
  flex:1,
  textAlign:'center',
  padding:10,
  marginHorizontal:10
},
})