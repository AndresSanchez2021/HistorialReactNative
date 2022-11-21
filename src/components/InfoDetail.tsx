import React from 'react'
import { View, Text, StyleSheet, StatusBar } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { useColor } from '../customHooks/useColor';
import { backgroudCard, dark } from '../theme/colorTheme';
import { MiniCard } from './MiniCard';

interface Props{
    state?:string
}


export const InfoDetail = ({state}:Props) => {
    

  return (
    <View style={[]}>

        <Text 
            style={[ stylesInfoDetail.textSub]}>
                Información de entrega
        </Text>

        <MiniCard title='Dirección' text={'carrera 6 este # 2-1'} bold/>
        <MiniCard title='Teléfono' text={'carrera 6 este # 2-1'} icon='create-outline' bold/>
        <MiniCard title='Hora de netrega' text={'Valor domicilio'}  bold/>
        <MiniCard title='Dirección' text={'carrera 6 este # 2-1'}  bold/> 
        <MiniCard title='Efectivo' text={'Pago contra entrega'} icon='create-outline' bold/>
        <MiniCard title='Productos' text={'Ver productos'} icon='albums-outline' bold/>
      

    </View>
  )
}

export const stylesInfoDetail = StyleSheet.create({
  card:{
    height:120,
    backgroundColor:backgroudCard,
    justifyContent:'center',
    textAlign:'center',
    borderRadius:10,
    paddingHorizontal:15,
    paddingVertical:10,
    marginVertical:10,
  },
  flex:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    alignContent:'center',
    fontWeight:'bold',
    
    
  },

  textSub:{
    fontSize:20,
    fontWeight:'300',
    color:dark,
    textAlign:'left',
    alignSelf:'flex-start',
  
  },
  text:{
    fontSize:20,
    color:dark,
    textAlign:'center',
    alignSelf:'center',
  
  },
  row:{
      flexDirection:'row',
  },
  spaceBetween:{
      flex:1,
      justifyContent:'space-between'
  }
  
})