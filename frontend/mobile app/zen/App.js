import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native";
import HomeScreen from "./HomeScreen";
import DetailScreen from "./DetailScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FlatListScreen from "./FlatListScreen";
import Apicall from "./Apicall";
import { Provider } from "react-redux";
import CounterScreen from "./CounterScreen";
import { store } from "./redux/store";

const Stack=createNativeStackNavigator()

export default function App(){
  return<Provider store={store}>
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen}/>
      <Stack.Screen name="Detail" component={DetailScreen}/>
      <Stack.Screen name="FlatListScreen" component={FlatListScreen}/>
      <Stack.Screen name="Apicall" component={Apicall}/>
      <Stack.Screen name="CounterScreen" component={CounterScreen}/>

    </Stack.Navigator>

  </NavigationContainer>
  </Provider>
}