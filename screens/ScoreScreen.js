import {
  Dimensions,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import Card from "../components/Card";
import React from "react";
import { useState } from "react";

const ScoreScreen = ({ navigation, route }) => {
  const [diferencia, setDiferencia] = useState(100);
  const [modalVisible, setModalVisible] = useState(false);
  const [result, setResult] = useState('');

  const handleDiferencia = () => {
    if (route.params > diferencia) {
      setDiferencia((route.params - diferencia) + '$');
      setResult("Ganaste: ");
    }
    else if (route.params < diferencia) {
      setDiferencia(diferencia - route.params + '$');
      setResult("Perdiste: ");
    }
    else if(route.params == diferencia) {
      setResult("Te mantuviste");
      setDiferencia("");
    }
    return diferencia;
  };
  const handleModalVisible = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.screen}>
      <Card style={styles.moneyContainer}>
        <Text>Dinero: {route.params}</Text>
      </Card>
      <TouchableOpacity style={styles.button} onPress={() => {handleDiferencia(); handleModalVisible();}}>
        <View>
          <Text>Ver Ganancias/Perdidas</Text>
        </View>
      </TouchableOpacity>
      <Modal transparent={true} animationType="fade" visible={modalVisible} onRequestClose={() => {setModalVisible(false)}}>
        <TouchableOpacity onPress={() => {setModalVisible(false)}}>
          <View style={styles.modal}>
            <Text>{result}{diferencia}</Text>
          </View>
        </TouchableOpacity>
      </Modal>
      {console.log(diferencia)}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'pink',
    marginTop: 200,
    height: Dimensions.get('window').height/5,
    width: Dimensions.get('window').width/3,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    marginTop: 200,
    margin: 100,
    height: '45%',
    padding: 0,
    borderWidth: 3,
    borderRadius: 20,
    borderColor: "black",
    backgroundColor: "#ECECEC",
    alignItems: "center",
    justifyContent: "center",
    justifyContent: "space-evenly",
  },
  moneyContainer: {
    marginTop: 20,
    height: Dimensions.get('window').height/10,
    width: Dimensions.get('window').width/5,
    alignItems: "center",
    justifyContent: "center",
  }
});

export default ScoreScreen;
