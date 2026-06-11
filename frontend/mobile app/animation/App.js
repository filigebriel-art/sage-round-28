import { Animated, Text, View } from 'react-native';
import { useRef,useEffect } from 'react';

export default function App() {
  const fadeAnim=useRef(new Animated.Value(0)).current

  useEffect(()=>{
    Animated.timing(fadeAnim,{
      toValue:1,
      duration:2000,
      useNativeDriver:true
    }).start()
  })
  return (
    <View style={{flex:1 ,justifyContent:"center",alignItems:"center"}}>
      <Animated.View style={{
        width:200, 
        height:200,
        borderRadius:10,
        backgroundColor:"green",
        opacity:fadeAnim}}>
          <Text style={{justifyContent:"center",textAlign:"center",fontSize:"large"}}>Hello</Text>
        </Animated.View>
      
    </View>
  );
}

