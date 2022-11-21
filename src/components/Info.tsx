import React from 'react'
import { styles } from '../theme/appTheme'
import { Text, View } from 'react-native';
import { Badge } from './Badge';
import { backgroudCard } from '../theme/colorTheme';

interface Props{
    id:String,
    date:String,
    total:String,
    state:String
}

export const Info = ({id,date,total,state='Devuelto'}:Props) => {
  return (
    <View style={{...styles.flex, backgroundColor:{backgroudCard}}} >

        <View style={styles.infoContainer}>
            <View style={styles.infoRow}>

                <Text style={styles.infoTitle}>
                   ID {id}
                </Text>

                <Badge state={state}/>
            </View>



            <View style={styles.infoRow2}>
                <View style={{flex:1}} >
                    <Text style={styles.infoText}>
                        Fecha:{date}
                    </Text>

                    <Text style={styles.infoText}>
                        Total:{total}
                    </Text>

                </View>
                
                <View  >
                    <Text  style={styles.infoText}></Text> 
                    <Text style={styles.infoLink}>Calificar ></Text>
                </View>
            </View>

        </View>
    </View>

  )
}
