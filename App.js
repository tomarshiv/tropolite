
import React from "react";
import { useState, useEffect } from "react";
import HomeScreen from "./Components/HomeScreen";
import Login from "./Components/LoginScreen";
import { View, Text } from "react-native";
import RootNavigator from "./Components/RootNavigator";
import { NavigationContainer } from "@react-navigation/native";
import Product from "./Components/Product";



const App = (props) => {


  return (
    <>


      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>


    </>





  )

}
export default App; 