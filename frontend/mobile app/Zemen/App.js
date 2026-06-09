import { useState } from "react";
import { Button } from "react-native";
import { TextInput } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";

export default function App(){
  const [text,setText]=useState('')
  function handlePress(){
    alert({setText})
  }
  return<View 
  style={{
    backgroundColor:"grey",
    justifyContent:"center",
    alignItems:"center",
    flex:1,

  }}>
  <Text
  style={{
    backgroundColor:"brown",
    color:"white",
    padding:10
    
  }}>Welcome to Zemen</Text>
  <TextInput placeholder="Enter text"
  style={{
    borderWidth:2,
    padding:5
  }}
  value={text}
  onChangeText={setText}
  keyboardType="numeric"/>
  <TextInput style={{borderWidth:2}}
  placeholder="Multiline"
  multiline
  numberOfLines={5}/>
  <Text>Text from input:{text}</Text>
  <Button title="click" onPress={handlePress}/>


  </View>
}