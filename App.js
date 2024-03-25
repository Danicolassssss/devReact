import { Text,View } from "react-native";
import { User } from "./components/User";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  square:{
    width:100,
    height:100,
    backgroundColor:"blue"
  },
  text:{
    color:"white",
    fontSize:30
  }
})

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{backgroundColor:"red", flex:1}}>
        <View style={s.square}>
          <Text style={s.text}>Hello World</Text>
          <Text style={s.text}>Hello World</Text>
          <User/>
          <Text style={s.text}>Hello World</Text>
      </View>

      </SafeAreaView>
    </SafeAreaProvider>
    
  );
}

