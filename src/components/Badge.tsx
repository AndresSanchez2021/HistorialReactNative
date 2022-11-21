import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { useColor } from '../customHooks/useColor';

interface ColorState{
    state:'Recibido'|'En camino'|'Entregado'|'Cancelado'|'Devuelto'
}
export const Badge = ({state}:ColorState) => {


    const {colorName,iconName}=useColor(state);

    return (
        
            <Text
                style={{
                ...styles.infoBadge,
                backgroundColor:colorName
            }}
            >
                {state}
            </Text>
            
    )
}
