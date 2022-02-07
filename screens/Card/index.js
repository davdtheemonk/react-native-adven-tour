import React from "react";
import {View,Text,Image} from "react-native"
import styles from"./style"
import { Button } from "react-native-paper";



export default function Card(props){
 return(
<View style={styles.card} >
    <Image source={props.item.image} style={styles.image}></Image>
    
 <View style={styles.card1} >
    <View style={styles.card1info}>
        <Text style={styles.card1loc}>{props.item.location}</Text>
        <Text style={styles.card1maps}>{props.item.Maps}</Text>

    </View>
    <Text style={styles.card1title}>{props.item.title}</Text>
    <Text style={styles.card1date}>{props.item.startdate} - {props.item.enddate}</Text>
    <Text style={styles.card1descr}>{props.item.description}</Text>
    
    
    
 </View>
  </View>
 )   
}