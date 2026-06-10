import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";

export default function Apicall(){

    const [data,setData]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(Response=>Response.json())
        .then(data=>setData(data))
        .catch(err=>console.log(err))
    },[])
    return (
        <View style={{flex:1}}>
     <FlatList 
     data={data}
    keyExtractor={(item)=>item.id.toString()}
     renderItem={({item})=>(
              <View style={{padding:10}}>
                <Text 
                style={{color:'blue'}}>Title:{item.title}</Text>

                <Text >Body:{item.body}</Text>

              </View>
     )}
     
     />



        </View>
    )
}