import React from 'react'
import { View, Text, StyleSheet, StatusBar } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { useColor } from '../customHooks/useColor';
import { backgroudCard, colorPrincipal, dark } from '../theme/colorTheme';

interface Props{
    title:String,
    bold?:boolean
    text?:String,
    icon?:String,
    color?:String,
}


export const MiniCard = ({title,text='',icon='',bold=false,color=colorPrincipal}:Props) => {
    const boldN = bold ? 'bold':'';
    const marginT = text==='' ? 15:0;

    const TextRender=( { t })=>{
        if(t!==''){
            return(
                <Text style={ {...stylesInfoDetail.textSub,fontSize:18}}>
                    {text}
                </Text>
            )
        }else{<></>}
        
    } 

  return (

    <View style={stylesInfoDetail.card}>
                
            <View style={[stylesInfoDetail.flex]}>
                <View>
                    <Text style={{ ...stylesInfoDetail.text,fontWeight:boldN,marginTop:marginT}}>
                        {title}
                    </Text>
                    <TextRender t={text}/>
                </View>



                <Icon name={icon}  size={40} color={color}/>


            </View>

            
    </View>
      

  )
}

export const stylesInfoDetail = StyleSheet.create({
  card:{
    height:60,
    backgroundColor:backgroudCard,
    justifyContent:'center',
    textAlign:'center',
    borderRadius:10,
    paddingHorizontal:15,
    paddingVertical:5,
    marginVertical:5,
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
    alignContent:'center'
  
  },
  text:{
    fontSize:20,
    color:dark,
    textAlign:'center',
    alignSelf:'flex-start',
  
  },
  row:{
      flexDirection:'row',
  },
  spaceBetween:{
      flex:1,
      justifyContent:'space-between'
  }
  
})