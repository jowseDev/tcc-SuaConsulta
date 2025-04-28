import React from 'react';
import { View, Text, TouchableOpacity, StatusBar, Image } from 'react-native';
import styles from './styles';

const CartSus = ({ navigation }) => {
  return (
    <View style={styles.container1}>
      <StatusBar backgroundColor="#000089" barStyle="light-content" />
      <View style={styles.container2}>
        <View style={styles.cardInfo}>
          <Text style={styles.nome}>Carteirinha do SUS</Text>
          <Text style={styles.info}>José Augusto Martins Filho</Text>
          <Text style={styles.rotulo}>Nome do usuário</Text>
          
          <Text style={styles.info}>345.162.612-33</Text>
          <Text style={styles.rotulo}>CPF (Cadastro de pessoa física)</Text>
                
          <Text style={styles.info}>Rua Pernambuco Nº 112 - Estrela d´oeste</Text>
          <Text style={styles.rotulo}>Endereço</Text>
          
          <Text style={styles.info}>29 de Setembro de 2006</Text>
          <Text style={styles.rotulo}>Data de nascimento</Text>

          <Text style={styles.info}>Tipo Sanguíneo: O+</Text>
          <Text style={styles.rotulo}>Tipo Sanguíneo</Text>

          <Text style={styles.info}>Alergia a Penicilina</Text>
          <Text style={styles.rotulo}>Alergias</Text>

          <View style={styles.linhaDivisoria} />
          <Text style={styles.textoOferecido}>Oferecido por:</Text>
          <View style={styles.containerLogos}>
            <Image source={require('../../assets/LogoSuaAgenda.png')} style={styles.logoSuaConsulta} />
            <Image source={require('../../assets/LogoSuaAgenda.png')} style={styles.logoSuaConsulta} />
            <Image source={require('../../assets/LogoSuaAgenda.png')} style={styles.logoSuaConsulta} />
          </View>
        </View>
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

export default CartSus; 