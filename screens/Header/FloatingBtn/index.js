import React from "react";
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import {View} from 'react-native'
import { Alert,Pressable } from "react-native";
import { useCallback } from "react";
import styles from './styles'
import BorderColor from "@mui/icons-material/BorderColor";

export default function FloatingBtn(){
  const handleClick = useCallback(item=>{
    Alert.alert("Add Journal","I travelled to",[{
      text:'Cancel',
      onPress:()=>console.log("pressed"),
      style:'cancel',
    },
  {
    text:'OK',
    onPress:()=>console.log('Ok pressed')},
  ]);

  },[])


    
    return(
   
    
        <Pressable>
    <Fab color='primary'>
        <BorderColor/>
      </Fab>
      </Pressable>
    
   
      
     
    

    );
}