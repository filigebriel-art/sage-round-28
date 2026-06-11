import { Button, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { decrease, increase, reset } from "./redux/counterSlice";

export default function CounterScreen(){
    const counter=useSelector(state=>state.counter.value)
    const dispatch=useDispatch()
    return(
        <View>
            <Text style={{fontSize:60, textAlign:"center"}}>
                {counter}
            </Text>
            <Button title="increament" onPress={()=>dispatch(increase())}/>
            <Button title="decreament" onPress={()=>dispatch(decrease())}/>
            <Button title="reset" onPress={()=>dispatch(reset())}/>

        </View>
    )
}