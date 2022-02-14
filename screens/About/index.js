import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,View,TextInput,Modal,Text, ScrollView } from 'react-native';
import Header from '../Header';
import { Image } from 'react-native';
import house from "../../assets/afr.jpg"
import {Caption, FAB, IconButton} from "react-native-paper"
import { TouchableOpacity } from 'react-native'
import {useState } from 'react';
import Card from '../Card';
import Data from "../Data"
import SlideView from '../SlideView';
import { NavigationContainer } from '@react-navigation/native';
import SideMenu from '../SideMenu';
import { Provider } from 'react-native-paper';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {Button} from "react-native-paper"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import room from"../../assets/hut2.jpeg"





const Drawer = createDrawerNavigator();


export default function About(props) {
  
const [close,closeBtn] = useState(true);

  return (
    
    <Provider>



    <View style={styles.container}>
   
  

   
 

      
      
      <View style={styles.bttn}>
       <IconButton icon="menu" style={{marginTop:20,marginLeft:0}} onPress={()=>{
          props.navigation.openDrawer()
         
          closeBtn(false)
        }} color='white'></IconButton>
   
        
        <Text style={styles.time}>About</Text>
   
    
      
      
      
     
      
      </View>
      <View style={{flex:1}}>
          <View style={{alignItems:"center",marginTop:70, backgroundColor:"#212221",   borderTopLeftRadius:20,
    borderTopRightRadius:20}}>
      <Text style={{color:"white",marginTop:250,fontSize:25,fontFamily:"monospace"}}>Adven-Tour</Text>
<Caption style={{color:"grey",marginTop:10,fontSize:15}}>Version 1.0.0</Caption>
<Icon
                        name="pen"
                        color="grey"
                        size={35}
                        />
<Button style={{marginTop:40}}size={90}contentStyle={{ width: 250 }}  color="wheat" icon="linkedin" mode="contained" >Follow Me</Button>
<Button style={{marginTop:10}}size={90}contentStyle={{ width: 250 }}  color="lightblue" icon="email" mode="contained" >Send Feedback</Button>
<Button style={{marginTop:10}}size={90}contentStyle={{ width: 250 }}  color="azure" icon="tea" mode="contained" >Buy Me coffee</Button>

<Caption style={{color:"grey",marginTop:45,fontSize:15}}> © 2022 David Mugalla</Caption>


</View>
</View>      
   
     

     
    
   
    
      <StatusBar style="auto"/>
      
      
    </View>
    
    
    </Provider>
   
   
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    
    width:'100%',
    height:'50%',
    backgroundColor: '#212221',


    
   
  },
  btn:{

    position:'absolute',
    width:50,
    height:50,
    alignItems:'center',
    justifyContent:'center',
    right:30,
    top:120,
    




  },

  
  time:{
    color:'white',
    fontWeight:'bold',
    fontSize:20,
    marginTop:25,
    height:60,
    marginLeft:10,
    fontFamily:"monospace"

  },
  bttn:{
    padding:20,
    paddingBottom:7,
      marginTop:0,
      display:"flex",
      flexDirection:"row",
      height:80,
      backgroundColor:"#393a39"
  },
  modalView:{
    position:'absolute',
    bottom:65,
    width:'100%'

  },
  modalBtns:{

  }
});
