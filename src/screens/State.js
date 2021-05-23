import React, { useState } from "react";
import { Text, View,StyleSheet, ScrollView,TextInput,FlatList,TouchableOpacity } from "react-native";
import { ListItem,Icon  } from 'react-native-elements'
import { Header } from "react-native-elements";
import HeaderBar from "../component/header";
const State = ({stateName,stateData,history}) => {
    const [volatile, setVolatile] = useState({
        listData : stateData,
    })
    const handleStateClick = (dsData,stateName)=>{
        let districtData =  dsData["districts"]
        let stName = stateName.toString()
        history.push({pathname:`/districts`,districtData, stName})
    }
    const handleSearch = (value) => {
        let listData = stateData.filter(ds=>Object.keys(ds).toString().toLowerCase().includes(value.toLowerCase()))
        setVolatile((state)=>({
            ...state,
            listData
        }))
    }
    return(
        <View style={styles.stateContainer}>
            <Header/>
            <HeaderBar handleSearch={handleSearch} placeholder="Search state"/>
            <View>
                <ScrollView style={{marginBottom:170}}>
                    {
                         volatile?.listData.map((item, i) => (
                            <TouchableOpacity key={i} onPress={()=>handleStateClick(item[Object.keys(item)],Object.keys(item))}  style={{backgroundColor:'grey',margin:5}} >
                                <ListItem bottomDivider>
                                <Icon name="home"/>
                                <ListItem.Content>
                                    <ListItem.Title><Text style={{fontWeight:'bold', fontSize:18}}>{Object.keys(item)}</Text></ListItem.Title>
                                    <Text>{`Last update: ${new Date(item[Object.keys(item)].meta?.last_updated).getDate()}-${(new Date(item[Object.keys(item)].meta?.last_updated).getMonth() +1)}-${new Date(item[Object.keys(item)].meta?.last_updated).getFullYear()}`}</Text>
                                </ListItem.Content>
                                <ListItem.Chevron size={30} />
                                </ListItem>
                            </TouchableOpacity>   
                          ))
                    }
                </ScrollView>
            </View>
           
        </View>
    )
}
export default State
const styles = StyleSheet.create({
    stateContainer:{
        paddingBottom:200
    },
})