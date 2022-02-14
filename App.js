import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Home from "./screens/Home/"
import { createDrawerNavigator } from "@react-navigation/drawer";
import About from "./screens/About"
import SideMenu from "./screens/SideMenu";
import Settings from "./screens/Settings"
import General from "./screens/General"
import Backup from "./screens/Backup"
import Notifications from "./screens/Notifications"
import firebase from "./utils/firebase.js"

const Drawer = createDrawerNavigator();


export default function App(){

  return(
    <NavigationContainer>
        <Drawer.Navigator initialRouteName={Home} drawerContent={props => <SideMenu {...props}/>} screenOptions={{ headerShown:false,drawerType:'back',overlayColor:'#00000000'}} initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="About" component={About} />
          <Drawer.Screen name="Settings" component={Settings} />
          <Drawer.Screen name="General" component={General} />
          <Drawer.Screen name="Notifications" component={Notifications} />
          <Drawer.Screen name="Backup" component={Backup}/>

    

        </Drawer.Navigator>
   


    </NavigationContainer>

  )
}