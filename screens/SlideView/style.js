import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    root:{
        position:'absolute',
        left:0,
        right:0,
        zIndex:100,
        backgroundColor:"#282828",
        borderTopLeftRadius:18,
        borderTopRightRadius:18,
        overflow:"hidden",

    },
    imgIn:{
       width:100,
       height:100,
       alignItems:'center',
       justifyContent:'center',
       marginRight:'auto',
       marginLeft:'auto'
    },
    textIn:{
       paddingLeft:6,
       marginTop:40,
       
    },
    btnView:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:80
        

    },
    dates:{
  



    },

    saveBtn:{
       marginTop:20,
       width: 100

    },
    descr:{
        marginTop:40,
       
        borderRadius: 50,
        

    },
 
    header:{
        height:50,
        backgroundColor:"gray"
    },
    common:{
        shadowColor:"black",
        shadowOffset:{
            width:0,
        },
        shadowOpacity:0.24,
        shadowRadius:4,
        elevation:3

    },
    closeIcon:{
       position:'absolute',
       right:0,
       top:0,
       zIndex:10 
    },
    backDrop:{
        ...StyleSheet.absoluteFillObject,
        zIndex:80,
        backgroundColor:'rgba(0,0,0,0.012)'
    }

})
export default styles