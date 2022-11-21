import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react'
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { Button } from './Button';
import { Info } from './Info';
import { backgroudCard } from '../theme/colorTheme';

interface Props{
    id:string,
    dueDate:string,
    state:string,//'Recibido'|'EnCamino'|'Entregado'|'Devuelto'|'Cancelado',
    total:string

}


export const CardPedido = ({id,dueDate,state,total}:Props) => {

    const {height,width}=useWindowDimensions();
    const navigation = useNavigation();
    const onPress =()=>{
        navigation.navigate('Resume',{id})
    }
    
    return (
        <View style={styles.card}>
            
            <Info
                id={id} 
                date={dueDate}
                state={state}
                total={total}
            />
            <View style={[styles.row]} >
                <Button id={id} title='Ver resumen' onPress={onPress, {id}}      />
                <Text style={{width:'5%'}}></Text>
                <Button id={id} title='Volver a pedir' type/>
            </View>
        </View>
    )
}


export const styles = StyleSheet.create({
    flex:{
        flex:1
    },
    card:{
        height:175,
        backgroundColor:backgroudCard,
        borderRadius:10,
        paddingHorizontal:15,
        paddingVertical:10,
        marginVertical:10,
        
    },
    row:{
        flexDirection:'row',
    },
    spaceBetween:{
        flex:1,
        justifyContent:'space-between'
    }
    
})