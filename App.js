import { Text,View,Image,Platform } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { Child } from "./components/Child";


export default function App() {

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{backgroundColor:"red", flex:1}}>
        
        {Platform.OS === "ios" ? <Text>IOS</Text> : <Text>Android</Text>}
      </SafeAreaView>
    </SafeAreaProvider>
    
  );
};

