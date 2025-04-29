import React from 'react';
import { View, Text, TouchableOpacity, StatusBar, Image } from 'react-native';
import styles from './styles';

const ConsultasAgendadas = ({ navigation }) => {
  return (
    <View style={styles.container1}>
      <StatusBar backgroundColor="#000089" barStyle="light-content" />
      <View style={styles.cabecalho}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image source={require('../../assets/botaoVoltarImg.png')}
          resizeMode="contain"
          style={styles.botaoVoltar} />
        </TouchableOpacity>
        <Image source={require('../../assets/LogoSuaAgenda.png')} 
        resizeMode="contain"
        style={styles.logoHeader} />
        <View style={{ width: 30 }} />
      </View>
      <View style={styles.container2}>
      </View>
    </View>
  );
};

export default ConsultasAgendadas; 