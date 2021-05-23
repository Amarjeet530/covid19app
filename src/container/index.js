import React, { useEffect } from 'react';
import { useState } from 'react';
import { View, ActivityIndicator} from 'react-native';
import State from '../screens/State';
import stateCode from "../utils/format";

const StateContainer = ({history}) => {
    const [volatile, setVolatile] = useState({
        covidData:[],
        stateName:[],
        isLoading : true,
    })

    const fetchData = async()=>{
        let covidData = [];
        let isLoading = true;
        let stateName = []
        try {
            const res = await fetch('https://api.covid19india.org/v4/min/data.min.json')
            const result = await res.json();
            let code = {...stateCode}
            for(let [key,value] of Object.entries(result)){
                stateName.push(code[key])
                const data = {
                    [code[key]]:value
                }
                covidData.push(data);
            }
            isLoading = false;
        } catch (error) {
            console.log(error)
            isLoading=false;
        }   
        setVolatile((state)=>({
            ...state,
            covidData,
            isLoading,
            stateName
        }))
        
    
    }
    useEffect(()=>{fetchData()},[])

    if(volatile?.isLoading) return <View style={{display:'flex',flexDirection:'row',alignItems:'center',height:"100%",justifyContent:'center'}}><ActivityIndicator size="large" color="#0000ff" /></View>
    return <State history={history} stateName = {volatile?.stateName}  stateData= {volatile?.covidData}/>
}
export default StateContainer;