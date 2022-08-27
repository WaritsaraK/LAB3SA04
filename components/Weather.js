import React, { useState } from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import Forecast from "./Forecast";

export default function Weather(props) {   
    const [forecastInfo, setForecastInfo] = useState({         
        main: '-',         
        description: '-',         
        temp: 0     
    })  

    return (       
        <View>             
            <ImageBackground source={require('../backgroundd.jpg')} style={styles.backdrop}>                 
                <Text>Zip Code</Text>                 
                <Text>{props.zipCode}</Text>                 
                <Forecast {...forecastInfo} />             
            </ImageBackground>         
        </View>    
    )
} 

const styles = StyleSheet.create({     
    backdrop: {         
        alignItems: 'center',         
        width: '100%',         
        height: '100%'     
    }, 
}); 