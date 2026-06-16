import { Button, Text, View } from "react-native";

export default function HomeScreen({navigation}){
    return <View>
        <Button title="Goto Detail" onPress={()=>navigation.navigate("Detail")}/>
        <Button title="Goto FlatListScreen" onPress={()=>navigation.navigate("FlatListScreen")}/>
        <Button title=" Goto Apicall " onPress={()=>navigation.navigate("Apicall")}/>
        <Button title=" Goto counterScreen " onPress={()=>navigation.navigate("CounterScreen")}/>
    </View>
}