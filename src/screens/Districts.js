import React, { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { DistrictsCard } from "../component/Card";
import HeaderBar from "../component/header";

const Districts = ({location,history}) => {
    const {districtData,stName} = location || {}
    const distName = Object.keys(districtData);
    
    const [volatile, setVolatile] = useState({
        dsName:distName
    })
    useEffect(()=>{
        if(!stName) history.push('/')
    },[])
    const handleSearch = (value)=>{
       let dsName= distName?.filter(e=>e.toLowerCase().includes(value.toLowerCase()))
       setVolatile((state)=>({
           ...state,
           dsName,
       }))
    }
    return(
        <View style={{paddingBottom:140}}>
            <HeaderBar handleSearch = {handleSearch} goBack={()=> history.push('/state')} placeholder="Search your districts"/>
            <ScrollView style={{marginBottom:100}}>
                {
                    volatile?.dsName?.map((e)=>{
                        return <View key={e}><DistrictsCard districtName = {e} dsData = {districtData[e]}/></View>
                    })
                }
            </ScrollView>
        </View>
    )
}
export default Districts