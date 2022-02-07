import React, { useCallback } from "react"
import { DrawerNavigationProp } from "@react-navigation/drawer"
import userNavigation from "@react-navigation/native"
import { IconButton } from "react-native-paper"
import View from "react-native"
import { StyleSheet } from "react-native"

export default function Navbar(){
    const handlePressMenuButton = useCallback(()=>{
        navigation.openDrawer()
    },[navigation])
    return(
      <View style={styles.menu}>
        <IconButton color="white" onPress={handlePressMenuButton} icon="menu"></IconButton>
        </View>
    )
}

const styles = StyleSheet.create({
    menu :{
        width:"100%",
        height:"40",
        alignItems:'center',
        alignContent:'center',
        
    }
})