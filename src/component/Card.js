import React from "react";
import { Card, ListItem,Icon  } from "react-native-elements";
import { Text, View,StyleSheet,TouchableOpacity } from "react-native";

const StateCard = ({item,onPress}) => {    
    return(
        <TouchableOpacity onPress={onPress}  style={{backgroundColor:'grey',margin:5}} >
            <ListItem bottomDivider>
            <Icon name="home" />
            <ListItem.Content>
                <ListItem.Title>{Object.keys(item)}</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
            </ListItem>
        </TouchableOpacity>   
    )
}
const DistrictsCard = ({districtName,dsData}) => {
    const {total,meta} = dsData || {};
    const {population} = meta || 0
    const {last_updated} = meta?.tested || ''
    const d = `${new Date(last_updated).getDate()}-${new Date(last_updated).getMonth() +1}-${new Date(last_updated).getFullYear()}`
    const {confirmed,deceased,recovered,tested,vaccinated} = total || 0
    return (
        <Card>
            <Card.Title>
                <View>
                    <Text style={{fontWeight:'bold', fontSize:24}}>{districtName}</Text>
                    <Text style={{color:'#a0522d',fontWeight:'bold'}}>Population: {population}</Text>
                </View>
            </Card.Title>
            <View style={styles.contentText}>
                <View style={styles.labelContainer}>
                    <Text style={[styles.label,styles.lightRed]}>Confirmed cases : {confirmed}</Text>
                </View>
                <View style={styles.labelContainer}>
                    <Text style={[styles.label,styles.orange]}>Tested cases : {tested}</Text>
                </View>
                <View style={styles.labelContainer}>
                    <Text style={[styles.label,styles.green]}>Recovered cases : {recovered}</Text>
                </View>
                <View style={styles.labelContainer}>
                    <Text style={[styles.label,styles.pink]}>Vaccinated : {vaccinated} </Text>
                </View>
                <View style={styles.labelContainer}>
                    <Text style={[styles.label,styles.red]}>Death : {deceased} </Text>
                </View>
                <View style={styles.labelContainer}>
                    <Text style={{color:'black',margin:5}}>Last updated : {d} </Text>
                </View>
            </View>
        </Card>
    )
}

const styles = StyleSheet.create({
    contentText:{
        display:'flex',
        justifyContent:'space-between',

    },
    labelContainer:{
        display:'flex',
        flexDirection:'row',
    },
    label:{
        flex:1,
        fontSize:22,
        margin:5,
        fontWeight:'bold'
    },
    red:{
        color:'#ff0000'
    },
    orange:{
        color:'#ff8c00'
    },
    green:{
        color:'#2e8b57'
    },
    pink:{
        color:'#800080'
    },
    lightRed:{
        color:'#ff6347'
    }
})

export {
    StateCard,
    DistrictsCard
}