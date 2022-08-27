import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Forecast(props) {     
    return (          
        <View style={styles.onText}>
            <Text style={styles.mainText}>{props.main}</Text>             
            <Text style={styles.descriptionText}>{props.description}</Text>                 
            <Text style={styles.tempText}>{props.temp} °C</Text> 
        </View>
    )
} 

const styles = StyleSheet.create({
    onText:{
        flexDirection: 'column',
        alignItems: 'center'
    },
    mainText:{
        paddingTop: 20,
        fontSize: 30,
        color:'white'
    },
    descriptionText:{
        paddingTop: 20,
        fontSize: 20,
        color:'white'
    },
    tempText:{
        paddingTop: 20,
        fontSize: 20,
        color:'white'
    }
})