import GameScreen from "../screens/GameScreen";
import HighscoreDetailScreen from "../screens/HighscoreDetailScreen";
import HighscoreScreen from "../screens/HighscoreScreen";
import HomeScreen from "../screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import ScoreScreen from "../screens/ScoreScreen";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const GameNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{title: "Juego de Apuestas"}}
      />
      <Stack.Screen name="Game" component={GameScreen} />
      <Stack.Screen name="Score" component={ScoreScreen} />
      <Stack.Screen name="Highscore" component={HighscoreScreen} />
      <Stack.Screen name="ScoreDetails" component={HighscoreDetailScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default GameNavigator;
