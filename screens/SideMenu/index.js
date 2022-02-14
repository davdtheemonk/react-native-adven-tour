import React from "react"
import {View,}from "react-native"
import {DrawerContentScrollView,DrawerItem} from "@react-navigation/drawer"
import styles from "./styles"
import Data from "../Data"
import { Alert } from "react-native"
import {
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    Switch,
    TochableRipple,
    IconButton,
    Button
} from "react-native-paper"

import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import Icons from "react-native-vector-icons/MaterialIcons"
import { ScrollView } from "react-native"
export default function SideMenu(props){
    return(
     
        
     <View style={{flex:1,backgroundColor:"#393a39"}}>
        <DrawerContentScrollView {...props}>
            <View style={styles.drawerContent}>
               <View style={styles.userInfoSection}>
                   <View style={{width:'100%',height:100,marginTop:20}}>
                       <View style={{marginLeft:15,flexDirection:"column"}}>
                           <Title style={styles.title}><Icon
                        name="pen"
                        color="wheat"
                        size={35}
                        /> Adven-Tour</Title>
                           {Data.length==1 ? <Caption style={styles.caption}>{Data.length} Adventure</Caption>:<Caption style={styles.caption}>{Data.length} Adventures</Caption>}
                       </View>
                   </View>
               </View>
               
               <Drawer.Section >
                   
                   <DrawerItem
                    icon={({color,size})=>(
                        <Icon
                        name="fire"
                        color="white"
                        size={30}
                        />
                    )}
                    onPress={()=>props.navigation.navigate('Home')}
                    labelStyle={{color:"white",fontSize:18,fontFamily:"monospace"}}
                    label="Adventures"/>
                         <DrawerItem
                    icon={({color,size})=>(
                        <Icons
                        name="settings"
                        color="white"
                        size={30}

                        />
    )}  labelStyle={{color:"white",fontSize:18,fontFamily:"monospace"}}
                    label="Settings"
                    onPress={()=>{
                        props.navigation.navigate('Settings')
                    }}/>
          
            
               <DrawerItem
                    icon={({color,size})=>(
                        <Icon
                        name="bookmark-outline"
                        color="white"
                        size={30}

                        />
    )}  labelStyle={{color:"white",fontSize:18,fontFamily:"monospace"}}
                    label="About"
                    onPress={()=>{
                        props.navigation.navigate('About')
                    }}/>
          
               
                         
               </Drawer.Section>
            </View>
        </DrawerContentScrollView>
        
     </View>
   
        
    )
}