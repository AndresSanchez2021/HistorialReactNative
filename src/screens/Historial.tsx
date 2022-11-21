import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Button, ScrollView, Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { CardPedido } from '../components/CardPedido';
import { fetchHistoria, getHistoria } from '../redux/ActionCreators';

interface Props extends StackScreenProps<any,any>{};

 const Historial = ({Historias, getHistorias}) => {

  const ejemplo={
    id:"54145154",
    dueDate:"12/02/2021",
    state:"En camino",
    total:"280000",
  }

  const ejemplo1={
    id:"056220",
    dueDate:"12/02/2021",
    state:"Entregado",
    total:"2000",
  }
  const ejemplo2={
    id:"3424",
    dueDate:"31/11/2021",
    state:'Recibido',
    total:"59000",
  }
  const ejemplo3={
    id:"3424",
    dueDate:"31/11/2021",
    state:'Devuelto',
    total:"59000",
  }
  const ejemplo4={
    id:"3424",
    dueDate:"31/11/2021",
    state:'Recibido',
    total:"59000",
  }
  
  useEffect(() => {
    getHistorias()
  }, [])
  
  //
  console.log(' historia:',Historias );
  
  return (
    <ScrollView>
      <View style={styles.globalMargin}>
        
        <CardPedido {...ejemplo} />
        <CardPedido {...ejemplo1} />
        <CardPedido {...ejemplo2} />
        <CardPedido {...ejemplo3} />
        <CardPedido {...ejemplo4} />

      </View>
    </ScrollView>
  )
}

const mapStateToProps= state =>(
  // me va a mapear el estado global y se lo pasa al 
  //componente CartCounter por medio de props
  {
    Historias:state.historial
  }
)

const mapDispatchToProps=(dispatch)=>{
  getHistorias(){
    dispatch(fetchHistoria());    
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Historial);