import { Text,TouchableOpacity } from "react-native";

export function Child({onPress}){
    function onPress_(){
        onPress('Jhon');
    }
    return <>
        <TouchableOpacity onPress={onPress_}>
            <Text>Press Me</Text>
        </TouchableOpacity>
    </>
}