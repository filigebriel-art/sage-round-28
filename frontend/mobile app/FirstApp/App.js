import { useState } from "react";
import { ActivityIndicator, Button, Image, Pressable, ScrollView, Switch, Text, TextInput, View } from "react-native";
import Greet from "./Greet";

export default function App(){
  const [ison,setIson]=useState("false")
  return(
    <ScrollView>
    <View
    style={{
      backgroundColor:"grey",
      flex:1,
      justifyContent:"center",
      alignItems:"center"
    }}>


      <Text
      style={{
        backgroundColor:"brown",
        color:"white",
        fontSize:30
      }}>Hello!! To My First app  </Text>
      <Button title="click" onPress={()=>alert("button clicked")}/>

        <Image 
        source={{uri:"https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg"}}
        style={{width:150, height:150}}/>


        <Image
           source={require("./assets/image.png")}
           style={{width:150,height:150}}
        />

        <TextInput placeholder="Enter your name"
        style={{padding:10,
               borderWidth:1,
               backgroundColor:"pink"}}/>



               <Pressable 
               onPress={()=>alert("pressable clicked")}
               style={{
                backgroundColor:"white",
                padding:10,
                margin:10,
              
               }}
               >Pressable
               </Pressable>

               <ActivityIndicator size="large"
               color="white"/>
              <Switch value={ison}
              onValueChange={setIson}/>

              <Greet name="abebe"/>
              <Greet name="kebede"/>
              <Greet name="chala"/>

    </View>
    </ScrollView>
  )
}