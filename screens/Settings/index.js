import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,View,TextInput,Modal,Text, ScrollView } from 'react-native';
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









export default function About(props) {
  
const [close,closeBtn] = useState(true);

  return (
    
    <Provider>



    <View style={styles.container}>
   
  

   
   

      
      <View style={styles.bttn}>
       <IconButton icon="menu" style={{marginTop:20,marginLeft:0}}  onPress={()=>{
          props.navigation.openDrawer()
          
         
          closeBtn(false)
        }} color='white'></IconButton>
        
   
        
        <Text style={styles.time}>Settings</Text>
        
   
    
      
      
      
     
      
      </View>
      <Drawer.Section style={{marginTop:5}} >
                   
            
                         <DrawerItem
                    icon={({color,size})=>(
                        <Icons
                        name="settings"
                        color="wheat"
                        size={27}

                        />
    )}  labelStyle={{color:"white",fontSize:16}}
                    label="General"
                    onPress={()=>{
                        props.navigation.navigate('General')
                    }}/>


                    </Drawer.Section>
                    <Drawer.Section>
                    <DrawerItem
                    icon={({color,size})=>(
                        <Icons
                        name="notifications"
                        color="wheat"
                        size={27}

                        />
    )}  labelStyle={{color:"white",fontSize:16}}
                    label="Notifications"
                    onPress={()=>{
                        props.navigation.navigate('Notifications')
                    }}/>
                    </Drawer.Section>
                    <Drawer.Section>
                    <DrawerItem
                    icon={({color,size})=>(
                        <Icons
                        name="cloud"
                        color="wheat"
                        size={27}

                        />
    )}  labelStyle={{color:"white",fontSize:18}}
                    label="Backup and Restore"
                    onPress={()=>{
                        props.navigation.navigate('Backup')
                    }}/>
                    </Drawer.Section>
          
                  
                    <Drawer.Section>
                    <DrawerItem
                    icon={({color,size})=>(
                   <Icons
                        name="contacts"
                        color="wheat"
                        size={27}

                        />
    )}  labelStyle={{color:"white",fontSize:18}}
                    label="Contact Us"
                    onPress={()=>{
                        props.navigation.navigate('About')
                    }}/>
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
