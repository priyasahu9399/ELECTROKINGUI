
import React from "react";
import { View, Text } from " react-native";
import { NavigationContainer } from "@react-navigation/native";

import Root from "./Root";
// import Root from './Root'
// import { Provider } from "react-redux";
// import { store } from './redux'


const App = () => {
  return (
   
      <NavigationContainer>
        <Root/>
      </NavigationContainer>
  
  )
}

export default App

