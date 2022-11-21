import { StyleSheet } from "react-native";
import { backgroudCard } from './colorTheme';

export const styles = StyleSheet.create({
    row:{
        flexDirection:'row',
    },
    downLeft:{
        flexDirection:'row',
        justifyContent:'flex-end',
        
    },
    flex:{
        flex:1
    },
    globalMargin:{
        marginHorizontal:20
    },
    title:{
        fontSize:30,
        marginBottom:10
    },
    btn:{
        width:'100%',
        height:40,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
        marginRight:10,
    },
    btnPrimary:{
        backgroundColor:'#6b40d6',
    },
    btnSecondary:{
        backgroundColor:"#fff",
        borderColor:"#c1c1c1",
        borderWidth:1
    },
    
    botonBigText:{
        fontSize:18,
        fontWeight:'400',
        color:'#6b40d6',
    },
    white:{
        color:'white',
    },


    infoContainer:{
        flex:1,
        backgroundColor:backgroudCard,

    },
    infoRow:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'backgroudCard',

    },
    infoRow2:{
        flex:2,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'backgroudCard',

    },
    infoTitle:{
        fontWeight:'bold',
        fontSize:25,
        fontFamily:"notoserif",
        color:'black',

    },
    infoBadge:{
        borderRadius:5,
        width:80,
        height:25,
        padding:4,
        backgroundColor:'#6b40ds',
        color:'white',
        fontSize:13,
        textAlign:'center',
    },
    infoSubtitle:{

    },
    infoLink:{
        fontWeight:"bold",
        fontSize:20,
        color:"#6b40d6",
    },
    infoText:{
        fontWeight:'100',
        fontSize:20,
        fontFamily:"notoserif",

    },
})