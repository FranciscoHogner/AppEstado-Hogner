import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import React from "react";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.texto}>
        Empiezas con 100$ {'\n'}
        Apuesta de a 10$ o 50$ e intenta conseguir mas!
      </Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Game");
        }}
      >
        <View 
        style={styles.button}>
          <Text style={styles.buttonText}>COMENZAR</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  texto: {
    fontSize: 24,
  },
  button: {
    marginTop: 200,
    height: Dimensions.get('window').height/5,
    width: Dimensions.get('window').width/3,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
  },
  buttonText: {
    fontSize: 20,
    alignItems:'center',
  },
  pitos: {
    alignItems:'center',
  },  
});

export default HomeScreen;
