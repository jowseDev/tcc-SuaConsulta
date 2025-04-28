import React from 'react';
import { View, Text, TouchableOpacity, StatusBar } from 'react-native';
import styles from './styles';

const ConsultasConcluidas = ({ navigation }) => {
  return (
    <View style={styles.container1}>
      <StatusBar backgroundColor="#000089" barStyle="light-content" />
      <View style={styles.container2}>
      </View>
      <View style={styles.parteBaixo}>
        <TouchableOpacity
          style={styles.botaoVoltar}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.textoBotao}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ConsultasConcluidas; 