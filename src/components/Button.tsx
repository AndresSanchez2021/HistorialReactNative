import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { styles } from '../theme/appTheme';

interface Props{
    title?:string,
    type?:boolean,
    page?:'Resume',
    id:string,
}

export const Button = ({title='Ver resumen',type=false,page='Resume', id='54546'}:Props)=> {

    const navigation =useNavigation()
    const typeBoton = type === true ? styles.btnSecondary:styles.btnPrimary
    const colorTextBoton = type === true ? styles.botonBigText:styles.white
    
    

    return (
        <View style={{flex:1}}>
            <TouchableOpacity
                style={[styles.btn, typeBoton]}
                onPress={()=> navigation.navigate('Resumen', {id} )}
            >
            <Text
                style={[styles.botonBigText, colorTextBoton]}
            >
                {title}
            </Text>
            </TouchableOpacity>
        </View>
    )
}
