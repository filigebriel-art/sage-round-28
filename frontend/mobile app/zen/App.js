import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native";
import HomeScreen from "./HomeScreen";
import DetailScreen from "./DetailScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FlatListScreen from "./FlatListScreen";

const Stack=createNativeStackNavigator()

export default function App(){
  return<NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen}/>
      <Stack.Screen name="Detail" component={DetailScreen}/>
      <Stack.Screen name="FlatListScreen" component={FlatListScreen}/>

    </Stack.Navigator>

  </NavigationContainer>
}