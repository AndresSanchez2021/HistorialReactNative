import React from 'react'
import { View, Text, StyleSheet, StatusBar } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { useColor } from '../customHooks/useColor';
import { backgroudCard, dark } from '../theme/colorTheme';
import { MiniCard } from './MiniCard';

export const FAQ = () => {
    

  return (
    <View style={[]}>

        <Text 
            style={[ stylesFAQ.textSub]}>
               ¿Requieres ayuda o tine algina inquietud?
        </Text>

        <MiniCard title='Escribenos a WhatsApp'  icon='logo-whatsapp' color='#4caf50'bold/>
        <MiniCard title='Llámanos'  icon='call-outline' color='#2196f3' bold/>
      
      

    </View>
  )
}

export const stylesFAQ = StyleSheet.create({
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