import React from 'react'

export const useColor = (state:string) => {
    let iconName=''
    switch (state) {
        case 'Recibido':
            iconName= '#checkmark-done-outline'
            break;
        case 'En camino':
            iconName='walk-outline'
            break;
        case 'Entregado':
            iconName='check-bag-outline'
            break;
        case 'Cancelado':
            iconName='alert-circle-outline'
            break;
        case 'Devuelto':
            iconName='return-up-back-outline'
            break;
        default:
            iconName='#-outline'
            break;
    }

    let colorName=''
    
    switch (state) {
        case 'Recibido':
            colorName= '#673ab7'
            break;
        case 'En camino':
            colorName='#03a9f4'
            break;
        case 'Entregado':
            colorName='#4caf50'
            break;
        case 'Cancelado':
            colorName='#f44336'
            break;
        case 'Devuelto':
            colorName='#ffc107'
            break;
        default:
            colorName='#6b40d' 
            break;
    }
  return {colorName,iconName }
}
