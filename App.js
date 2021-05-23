import React from 'react'
import { View,StyleSheet } from 'react-native';
import Routes from './src/routes/Routes';


const App = () => <View style={styles.container}><Routes/></View>
export default App;

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#f0f8ff',
    }
})