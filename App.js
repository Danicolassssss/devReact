import { Text,View,Image } from "react-native";
import { User } from "./components/User";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import { FlexDemo } from "./components/FlexDemo/FlexDemo";
import { ScoreCounter } from "./components/ScoreCounter";

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
        <User firstname={"Jhon"} lastname={'Doe'} age={40} adress={{street:'12 rue deu chateau',city:'bonnay'}} doSomething = {function(){console.log("User Authentificated");}}>
          <Image source={{uri:"https://www.w3schools.com/w3images/avatar2.png"}} style={{width:100,height:100}} />
        </User>
        <ScoreCounter></ScoreCounter>
      </SafeAreaView>
    </SafeAreaProvider>
    
  );
};

