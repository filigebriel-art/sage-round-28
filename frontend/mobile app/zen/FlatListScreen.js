import { FlatList, Text, View } from "react-native";

export default function FlatListScreen(){
    const data= Array.from(
        {length:100},(_,i)=>({id: i.toString(), name:`Item ${i+1}`})
        
    )
    return(
        <View style={{flex:1}}>
            <FlatList
            
            data={data}
            keyExtractor={(item)=>item.id}
            renderItem={({item})=>(
                <View>
                    <Text>{item.name}</Text>
                    </View>
            )}
            />

        </View>
    )
}