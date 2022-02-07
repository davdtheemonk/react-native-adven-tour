import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,View,TextInput,Modal,Text, ScrollView } from 'react-native';
import Header from '../Header';
import { Image } from 'react-native';
import house from "../../assets/afr.jpg"
import {FAB, IconButton} from "react-native-paper"
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
import {DrawerContentScrollView} from "@react-navigation/drawer"





const Drawer = createDrawerNavigator();

export default function Home(props) {
  const [show,setShow] = useState(false)
  const [translu,setTranslu] = useState(false)
  function whatTime() {
     
    const date = new Date()
    const hour = date.getHours()
    let time = ""
    if(hour>=4 && hour<12){
      time = "Morning"
      
    }
    else if(hour>=12 && hour<=16){
      time = "Afternoon"
      
    }
    else if(hour>16 && hour<=18){
      time= "Evening"
      
    }
    else{
      time = "Night"
    }
    
    return `Good ${time},`
    
  }
 
  const data = Data.map((item)=>{
    return(

    <Card 
    key={item.id}
    item ={item}
    />)
  })
  const[modal,setModal] = useState(false)
  
 


  return (
    
    <Provider>
      






       <View style={styles.container}>
       {modal==false &&<View style={styles.btn}>
     
     <TouchableOpacity>
  <FAB style={{backgroundColor:"rgb(209, 144, 144)"}} color='#393a39' icon="pencil" onPress={() => {
  setShow(true)
 }}>
  
</FAB>
</TouchableOpacity>

</View>}
         
   
   
  

   
 

      <Image style={{height:150,width:'100%',position:"absolute",left:0,right:0,top:0,resizeMode:"cover"}}source={house}></Image>
      
      <View style={styles.bttn}>
        <IconButton icon="menu" onPress={()=>{
          props.navigation.openDrawer()
          setTranslu(true)
        }} color='white'></IconButton>
   
        
        <Text style={styles.time}>{whatTime()}</Text>
   
    
      
      
      
     
      
      </View>
   
      
      
      <Header/>
     

     
     
     
    <SlideView show={show} onDismiss={()=>{
      setShow(false);}
      }
      enableBackDropDismiss>
        <ScrollView contentContainerStyle={{padding:16}}/>
      </SlideView>
      
{data}
   
      <StatusBar style="auto"/>
      
  
      
    </View>
  
    
    </Provider>
   
   
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    
    width:'100%',
    height:'100%',
    backgroundColor: '#212221'
   
  },
  btn:{

    position:'absolute',
    right:30,
    bottom:29,
    




  },

  
  time:{
    color:'white',
    fontWeight:'bold',
    fontSize:20,
    marginTop:9,
    height:60,
    marginLeft:15,
    fontFamily:"monospace"

  },
  bttn:{
    maxHeight:20,
    marginTop:40
  },
  modalView:{
    position:'absolute',
    bottom:65,
    width:'100%'

  },
  modalBtns:{

  }
});
