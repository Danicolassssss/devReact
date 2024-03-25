import { Text,View,Image } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { Child } from "./components/Child";


export default function App() {
  const [age, setAge] = useState(0);
  function hello(name){
    setAge(age+1);
  }
  console.log(age);
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{backgroundColor:"red", flex:1}}>
        <Child onPress={hello} />
      </SafeAreaView>
    </SafeAreaProvider>
    
  );
};

