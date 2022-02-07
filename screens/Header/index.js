import React from "react"
import image from "./favicon.png"
import styles from "./styles"

import {Text,View,Image} from "react-native";

import Data from "../Data"



export default function Header(){

  const data = Data.map((item)=>{
    return[
      item.title,
      item.image,
      item.description]
  })

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
      
      return `Good,${time}`
      
    }
    
    return(
    <View style={styles.navbar}>
       
    
       {data.length == 0 && <Text style={styles.text}>Add Adventures...</Text>}
       
    </View>
    )
}