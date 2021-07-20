import { StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { Dimensions } from 'react-native';
import React from 'react';

const HighscoreDetailScreen = () => {
    const item = useSelector((state) => state.scores.selected) || {};
    return (
        <View style={styles.screen}>
          <View style={styles.detail}>
            <Text style={styles.title}>Jugador: {item.name}</Text>
            <Text style={styles.text}>Dinero Final: {item.dinero}</Text>
          </View>
        </View>
      )
    }
    
    const styles = StyleSheet.create({
      screen: {
        flex: 1,
        paddingBottom: 10,
      },
      detail: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: Dimensions.get("window").height > 600 ? 20 : 10,
      },
      title: {
        fontSize: 40,
        fontFamily: 'open-sans-bold',
      },
      text: {
        fontSize: 26,
        fontFamily: 'open-sans',
      }
    });

export default HighscoreDetailScreen;