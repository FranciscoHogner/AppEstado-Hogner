import GameScreen from "../screens/GameScreen";
import HighscoreDetailScreen from "../screens/HighscoreDetailScreen";
import HighscoreScreen from "../screens/HighscoreScreen";
import HomeScreen from "../screens/HomeScreen";
import ScoreScreen from "../screens/ScoreScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import { Text } from "react-native";

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator 
        tabBarOptions = {{
            showLabel: false,
            style: {
                position: 'absolute',
                bottom: 10,
                marginHorizontal: 10,
                borderRadius: 15,
                height: 60,
            }
        }}>
            <Tab.Screen 
                name='Home' 
                component={HomeScreen} 
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={styles.tabStyle}>
                            <Text>
                                Home
                            </Text>
                        </View>
                    )
                }}/>
            <Tab.Screen 
                name='Game'
                component={GameScreen}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={styles.tabStyle}>
                            <Text>
                                Game
                            </Text>
                        </View>
                    )
                }}
                />
            <Tab.Screen 
                name='SS' 
                component={ScoreScreen}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={styles.tabStyle}>
                            <Text>
                                Score
                            </Text>
                        </View>
                    )
                }}
                />
            <Tab.Screen 
                name='HDS' 
                component={HighscoreDetailScreen}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={styles.tabStyle}>
                            <Text>
                                End
                            </Text>
                        </View>
                    )
                }}
                />
            <Tab.Screen 
                name='HS' 
                component={HighscoreScreen}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={styles.tabStyle}>
                            <Text>
                                HighScore
                            </Text>
                        </View>
                    )
                }}
                />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    tabStyle: {
        justifyContent: 'center',
        alignItems: 'center',
    },
  });

export default Tabs;

