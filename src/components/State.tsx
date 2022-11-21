import React from 'react'
import { View, Text, StyleSheet, StatusBar } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { useColor } from '../customHooks/useColor';
import { backgroudCard, dark } from '../theme/colorTheme';

export const State = ({state}) => {
    const {colorName,iconName}=useColor('Devuelto');

  return (
    <View style={[stylesState.card]}>
      
      <Text style={[stylesState.text]}>
        <Icon name={iconName}  size={50} color={colorName}/>
      </Text>
      <Text style={{
        ...stylesState.text,
        color:colorName}}>
        {state}
      </Text>

    </View>
  )
}

export const stylesState = StyleSheet.create({
  card:{
    height:85,
    backgroundColor:backgroudCard,
    justifyContent:'center',
    textAlign:'center',
    borderRadius:10,
    paddingHorizontal:15,
    paddingVertical:10,
    marginBottom:15,
  },

  text:{
    fontSize:20,
    textAlign:'center',
  },

  
})