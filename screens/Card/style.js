import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    image:{
        width:150,
        height:320,
        borderBottomLeftRadius:5,
        borderBottomRightRadius:5,
        borderTopLeftRadius:5,
        borderTopRightRadius:5,
        marginLeft:15,
        shadowColor: "0px 2.98256px 7.4564px rgba(0,0,0,0.1)"
      },
    card:{
    
        justifyContent:'flex-start',
        flexDirection:'row',
        position:'relative',
        marginBottom:50
      
        
        
        
    
       

    },
    card1:{
       display:'flex',
       flex:1,
       flexDirection:'column',
       marginLeft:20,
       
    },
    card1info:{
       
        display: 'flex',
        flexDirection: 'row',
        padding: 0 ,
        marginBottom: 20,
        color:"white",
        


    },
    card1descr:{
        fontSize:10,
        color:"white",
        fontFamily:'monospace'

    },
    card1date:{
        fontSize:10,
        color:"white",
        fontWeight:'bold',
        marginBottom:10

    },
    card1title:{
        fontWeight:'bold',
        color: 'azure',
        fontSize:25,
        marginBottom:15,
        fontFamily:'monospace'

    },
    card1maps:{
        marginLeft:7,
        fontSize:10,
        fontWeight:'bold',
        color: 'rgb(165, 160, 160)'
    },
    card1loc:{
        color:'rgb(165, 160, 160)',
        fontWeight:'bold',
        fontSize:15

    }


})

export default styles