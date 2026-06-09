import { Text, View } from "react-native";

export default function Greet(props){
    return(
        <View>
            <Text style={{color:"white"}}>{props.name}</Text>
        </View>
    )

}