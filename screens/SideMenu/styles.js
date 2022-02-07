
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    drawContent:{
        flex:1,
    },
    userInfoFunction:{
        paddingLeft:28,
    },
    title:{
        fontSize:26,
        marginTop:9,
        fontWeight:'bold',
        color:'white',
        fontFamily:"monospace"

    },
    caption:{
        fontSize:14,
        lineHeight:14,
        color:'white'
    },
    row:{
        flexDirection:"row",
        marginTop:20,
        alignItems:"center"
    },
    section:{
        flexDirection:"row",
        alignItems:"center",
        marginRight:15,

    },
    paragraph:{
        fontWeight:"bold",
        marginRight:3,

    },
    drawerSection:{
        marginTop:15,
    },
    bottomDrawerSection:{
        marginBottom:15,
        borderTopColor:"#f4f4f4",
        borderTopWidth:2

    },
    preference:{
        flexDirection:"row",
        justifyContent:'space-between',
        paddingVertical:12,
        paddingHorizontal:16
    }


    
})

export default styles