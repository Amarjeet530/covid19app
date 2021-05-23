import React from 'react'
import { View,StyleSheet, TextInput,Text } from "react-native";
import { Icon } from 'react-native-elements';
let a = '';
const HeaderBar = ({handleSearch,placeholder,goBack}) =>{ 
    a = placeholder
    return(
        <View>
            {
                 placeholder !== 'Search your districts' ? (
                    <View style={styles.headerContainerState}>
                        <TextInput
                            style={styles.input}
                            onChangeText={handleSearch}
                            placeholder={placeholder}
                        />
                    </View>
                 ) : (
                    <View style={styles.headerContainer}>
                        <Icon name="chevron-left" onPress={goBack} size={50}/>
                        <TextInput
                            inlineImageRight='search_icon'
                            style={styles.input}
                            onChangeText={handleSearch}
                            placeholder={placeholder}
                        />
                    </View>
                 )
            }
        </View>
       
    )
}
const styles = StyleSheet.create({
    headerContainer:{
        elevation:6,
        display:'flex',
        justifyContent:'space-between',
        flexDirection:'row',
        backgroundColor:'#00ffff',
        alignItems:'center',
        shadowColor:'red',
        paddingRight:12,
        paddingBottom:12,
        paddingTop:12,
        marginLeft:-8
    },
    headerContainerState:{
        elevation:6,
        display:'flex',
        justifyContent:'space-between',
        flexDirection:'row',
        backgroundColor:'#00ffff',
        alignItems:'center',
        shadowColor:'red',
        padding:20
    },
    input:{
        width:'100%',
        flex:1,
        backgroundColor:'white',
        elevation:6,
        borderRadius:50,
        padding:10,
        color:'black'
    }
})
export default HeaderBar;