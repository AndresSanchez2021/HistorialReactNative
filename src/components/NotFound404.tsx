import React from 'react'
import { View, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const NotFound404 = () => {
  return (
    <View style={[stylesNotFound.flex,stylesNotFound.card]}>
      
      <Text style={[stylesNotFound.text]}>
        <Icon name={'paw-outline'}  size={150} color='#6b40d6' />
      </Text>


      <Text style={[stylesNotFound.text]}>
        La pagina se encuentra en mantenimiento
      </Text>
    </View>
  )
}

export const stylesNotFound = StyleSheet.create({
  flex:{
      flex:1,
      justifyContent:'center',
      textAlign:'center',
  },
  card:{
      backgroundColor:'#f4f6f8',
      borderRadius:10,
      paddingHorizontal:15,
      paddingVertical:10,
      marginVertical:10,
      
  },
  text:{
    fontSize:30,
    color:'#6b40d6',
    textAlign:'center',
  
  },
  row:{
      flexDirection:'row',
  },
  spaceBetween:{
      flex:1,
      justifyContent:'space-between'
  }
  
})