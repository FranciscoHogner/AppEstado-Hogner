import {
  Button,
  Dimensions,
  StyleSheet,
  Text,
  View,
} from "react-native";

import Card from "../components/Card";
import CardContainer from "../components/CardContainer";
import Colors from "../constants/colors";
import React from "react";
import { useState } from "react";

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const random = Math.floor(Math.random() * (max - min) + min);

  if (random === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return random;
  }
};

const GameScreen = ({ navigation }) => {
  const [dinero, setDinero] = useState(100);
  const [cartaJugador, setCartaJugador] = useState(0);
  const [cartaMaquina, setCartaMaquina] = useState(0);

  const handleNewNumber = () => {
    const nextCartaJugador = generateRandomBetween(1, 12);
    const nextCartaMaquina = generateRandomBetween(1, 12);
    setCartaJugador(nextCartaJugador);
    setCartaMaquina(nextCartaMaquina);
    return {
      nextCartaJugador,
      nextCartaMaquina,
    };
  };
  const handleApuestaBaja = () => {
    const { nextCartaJugador, nextCartaMaquina } = handleNewNumber();
    if (nextCartaJugador > nextCartaMaquina) {
      setDinero(dinero + 10);
      return(dinero);
    } else {
      setDinero(dinero - 10);
      return(dinero);
    }
  };
  const handleApuestaAlta = () => {
    const { nextCartaJugador, nextCartaMaquina } = handleNewNumber();
    if (nextCartaJugador > nextCartaMaquina) {
      setDinero(dinero + 50);
      return{dinero};
    } else {
      setDinero(dinero - 50);
      return{dinero};
    }
  };

  return (
    <View style={styles.screen}>
      <View>
        <Card style={styles.moneyContainer}>
          <Text style={styles.money}>Dinero: {dinero}</Text>
        </Card>
      </View>
      <View style={styles.cardContainer}>
        <Text style={styles.numero}>Tu Numero</Text>
        <CardContainer>{cartaJugador}</CardContainer>
        <Text style={styles.numero}>Numero de la casa</Text>
        <CardContainer>{cartaMaquina}</CardContainer>
      </View>
      <View style={styles.betButtons}>
        <Button
          title="Apostar 10"
          onPress={handleApuestaBaja}
          color={Colors.black}
        ></Button>
        <Button
          title="Apostar 50"
          onPress={handleApuestaAlta}
          color={Colors.primary}
        ></Button>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    marginTop: 10,
  },
  numero: {
    fontFamily: "open-sans-bold",
  },
  betButtons: {
    flexDirection: "row",
  },
  cardContainer: {
    marginTop: '20%',
    alignItems: 'center',
    alignContent: 'space-around'
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: Dimensions.get("window").height > 600 ? 20 : 10,
    padding: 10,
    width: 300,
    maxWidth: "80%",
    marginBottom: 10,
  },
  moneyContainer: {
    marginTop: 20,
    minHeight: "5%",
    maxHeight: "100%",
    minWidth: "35%",
    alignItems: "center",
    justifyContent: "center",
  },
  money: {},
  nextButton: {
    marginTop: 0,
    alignItems: "flex-end",
  },
});

export default GameScreen;
