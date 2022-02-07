import React, { useRef, useEffect } from "react"
import { Modal, View, Dimensions, Animated, Pressable, Text } from "react-native"
import { useState } from "react"
import { TextInput, Image } from 'react-native';
import { IconButton, Portal, Colors } from "react-native-paper";
import styles from "./style"
import { Button } from "react-native-paper"
import DatePicker from "react-datepicker";

import Reinput from 'reinput'

export default function SlideView({ show, onDismiss, children, enableBackDropDismiss }) {
    const bottomSheetHeight = Dimensions.get('window').height * 0.5
    const deviceWidth = Dimensions.get('window').width
    const [text, setText] = React.useState("");
    const [open, setOpen] = useState(show)
    const bottom = useRef(new Animated.Value(-bottomSheetHeight)).current;

    const onGesture = (event) => {
        if (event.nativeEvent.translateY > 0) {
            bottom.setValue(event.nativeEvent.translateY)
        }

    };


    const onGestureEnd = (event) => {
        if (event.nativeEvent.translateY > bottomSheetHeight / 2) {
            onDismiss();
        } else {
            bottom.setValue(0);
        }

    };




    useEffect(() => {
        if (show) {
            setOpen(show);
            Animated.timing(bottom, {
                toValue: 0,
                duration: 500,
                useNativeDriver: false
            }).start();

        } else {
            Animated.timing(bottom, {
                toValue: -bottomSheetHeight,
                duration: 500,
                useNativeDriver: false
            }).start(() => {
                setOpen(false)

            });
        }

    }, [show]);
    if (!open) {
        return null;
    }
    return (
        <Portal>
            <Pressable onPress={enableBackDropDismiss ? onDismiss : undefined} style={styles.backDrop}>

            </Pressable>


            <Animated.View
                style={[styles.root,
                {
                    height: bottomSheetHeight,
                    bottom: bottom,
                    shadowOffset: {
                        height: -3
                    }
                }, styles.common]}
            >

                <View style={[styles.header, styles.common, {
                    shadowOffset: {
                        height: 3
                    },
                },

                ]}>

                    <View style={{
                        width: 60,
                        height: 3,
                        borderRadius: 1.5,
                        position: 'absolute',
                        top: 0,
                        left: (deviceWidth - 60) / 2,
                        zIndex: 10,
                        backgroundColor: "#ccc"
                    }}>
                    </View>
                    <IconButton color="lightblue" icon="notebook" style={styles.saveIcon} ></IconButton>
                    <IconButton color="red" icon="close" style={styles.closeIcon} onPress={onDismiss}></IconButton>

                </View>
                <View style={styles.imgIn}>
                    <Button size={90} contentStyle={{ width: 120 }} color="rgb(202, 120, 120)" icon="image" mode="outlined" >Select</Button>

                </View>



                <Reinput icon={<Image style={{ width: 40, height: 40 }} source={require("../../assets/tag.png")} />} label='Title' marginTop={20} color="white" labelActiveColor="rgb(92, 196, 168)" marginLeft={10} marginRight={10} underlineActiveColor="rgb(92, 196, 168)" textAlign="center" />
                <View style={styles.dates}>

                </View>
                <Reinput icon={<Image style={{ width: 40, height: 40 }} source={require("../../assets/map.png")} />} label='Location' marginTop={20} color="white" labelActiveColor="rgb(92, 196, 168)" marginLeft={10} marginRight={10} underlineActiveColor="rgb(92, 196, 168)" />

                <Reinput icon={<Image style={{ width: 40, height: 40 }} source={require("../../assets/happy.png")} />} label='Adventure' maxHeight={140} color="white" marginTop={20} labelActiveColor="rgb(92, 196, 168)" marginLeft={10} marginRight={10} underlineActiveColor="rgb(92, 196, 168)" />


                <View style={styles.btnView}>

                </View>
                {children}

            </Animated.View>
        </Portal>


    )
}

