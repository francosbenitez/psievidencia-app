import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/home";
import PsychologistsDetail from "./src/screens/psychologists-detail";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Psievidencia" }}
        />
        <Stack.Screen
          name="PsychologistsDetail"
          component={PsychologistsDetail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
