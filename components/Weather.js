import React, { useEffect, useState } from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import Forecast from "./Forecast";

export default function Weather(props) {   

    useEffect(() => {         
        console.log(`fetching data with zipCode = ${props.zipCode}`)         
        if (props.zipCode) {             
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=f8a1a1cea99f01b19b0ceea91204f5ce`)
            .then((response) => response.json())
            .then((json) => {
                setForecastInfo({
                    main: json.weather[0].main,
                    description: json.weather[0].description,
                    temp: json.main.temp
                });
            })
            .catch((error) => {
                console.warn(error);
            });
        }
    }, [props.zipCode]) 

    const [forecastInfo, setForecastInfo] = useState({         
        main: 'main',         
        description: 'description',         
        temp: 0     
    })  

    return (       
        <View>             
            <ImageBackground source={require('../backgroundd.jpg')} style={styles.backdrop}>                 
                <View style={styles.background}>
                    <Text style={styles.zipCodeText}>Zip Code is {props.zipCode}</Text>
                    <Forecast {...forecastInfo} />
                </View>             
            </ImageBackground>         
        </View>    
    )
} 

const styles = StyleSheet.create({     
    backdrop: {
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    zipCodeText:{
        paddingTop: 30,
        color:'white',
        fontSize: 20,
        textAlign: 'center'
    },
    background:{
        width: '100%',
        height: '35%',
        backgroundColor: 'rgba(0, 0, 50, 0.35)'
    }
})