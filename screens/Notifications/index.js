import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,View,TextInput,Modal,Text, ScrollView,Switch} from 'react-native';
import Header from '../Header';
import { Image } from 'react-native';
import house from "../../assets/afr.jpg"
import {DrawerContentScrollView,DrawerItem} from "@react-navigation/drawer"

import {Caption, FAB, IconButton,Drawer} from "react-native-paper"
import {useState } from 'react';
import SlideView from '../SlideView';
import { NavigationContainer } from '@react-navigation/native';
import SideMenu from '../SideMenu';
import { Provider } from 'react-native-paper';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {Button} from "react-native-paper"
import Icon from "react-native-vector-icons/Feather"
import Icons from "react-native-vector-icons/MaterialIcons"









export default function General(props) {
  
const [close,closeBtn] = useState(true);
const [isEnabled, setIsEnabled] = useState(false);
const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    
    <Provider>



    <View style={styles.container}>
   
  

   
   

      
      <View style={styles.bttn}>
       <IconButton icon="keyboard-backspace" style={{marginTop:20,marginLeft:0}}  onPress={()=>{
          props.navigation.navigate('Settings')
          
         
          closeBtn(false)
        }} color='white'></IconButton>
        
   
        
        <Text style={styles.time}>Notifications</Text>
        
   
    
      
      
      
     
      
      </View>
      <Drawer.Section style={{marginTop:5}} >
                   <Text style={{color:'wheat',fontSize:16,marginLeft:75}}>Push</Text>
                   <DrawerItem label="Notifications"   labelStyle={{color:"white",marginLeft:55,fontSize:16}}>
                  
                       

                   </DrawerItem>
                   <View style={styles.toggle}>
                   <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "lightblue" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
                  </View>
                   <DrawerItem label="Sound and vibration"   labelStyle={{color:"white",marginLeft:55,fontSize:16}}/>

                  


                    </Drawer.Section>
                   
    




   
          
   
     

     
    
   
    
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
  toggle:{
   marginTop:-50,
   marginRight:46
  

  },
  settings:{
    flexDirection:"column",
    flex:1

  },
  icon1:{

    display:"flex",
    padding:20,
    flexDirection:"row",
    marginTop:20,
    marginBottom:10,
    marginLeft:3
   },
  icon2:{
    display:"flex",
    marginTop:1,
    padding:20,
    marginBottom:10 ,

    flexDirection:"row"
  },
  icon3:{
    display:"flex",
    marginTop:-20,
    padding:20,
    marginBottom:10 ,
    marginLeft:-3,

    flexDirection:"row"
  },
  icon4:{
    display:"flex",
    marginTop:-22,
    padding:20,
    marginLeft:-5,
    marginBottom:10 ,

    flexDirection:"row"
  },
  icon5:{
    marginTop:-22,
    display:"flex",
    marginLeft:-3,
    padding:20,
    marginBottom:10 ,

    flexDirection:"row"
  },
  text1:{
    marginLeft:8,
    marginTop:2,
    color:"white",
    fontWeight:'bold',
    fontFamily:"monospace"

  },
  text2:{
    marginLeft:17,
    marginTop:2,
    color:"white",
    fontWeight:'bold',
    fontFamily:"monospace"

  },  text3:{
    marginTop:29,
    marginLeft:5,
    color:"white",
    fontWeight:'bold',
    fontFamily:"monospace"

  },  text4:{
    marginTop:29,
    marginLeft:5,
    color:"white",
    fontWeight:'bold',
    fontFamily:"monospace"

  },  text5:{
    marginTop:29,
    marginLeft:5,
    color:"white",
    fontWeight:'bold',
    fontFamily:"monospace"

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
    backgroundColor:"rgb(200,120,120)"
  },
  modalView:{
    position:'absolute',
    bottom:65,
    width:'100%'

  },
  modalBtns:{

  }
});
