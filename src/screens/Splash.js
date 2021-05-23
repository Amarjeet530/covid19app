import React, { useEffect } from "react";
import { View,Text,StyleSheet,Image } from "react-native";
import covid from '../assets/image/covid.png';
const SplashScreen = ({history}) => {
    useEffect(()=>{
        setTimeout(()=>{history.push('/state')},5000)
    })
    return(
        <View style={styles.splashContainer}>
            <Image
                source={covid}
                style={{ width: 200, height: 200 }}
                />
            <Text style={styles.label}>Covid 19 - India</Text>
            <Text>By Amar</Text>
        </View>
    )
}

const styles  =  StyleSheet.create({
    splashContainer:{
        display:'flex',
        height:'100%',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column'
    },
    label:{
        fontSize:40,
        color:'#8a2be2',
        fontWeight:'bold'
    }
})
export default SplashScreen;