import React from 'react';
import { View, Text, TouchableOpacity, StatusBar, Image, ScrollView } from 'react-native';
import styles from './styles';

const CartSus = ({ navigation }) => {
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
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container2}>
          <View style={styles.cardInfo}>
            <Text style={styles.titulo}>Carteirinha do SUS</Text>
            <View style={styles.linhaDivisoria} />
            
            <View style={styles.infoContainer}>
              <Text style={styles.nome}>José Augusto Martins Filho</Text>
              <Text style={styles.rotulo}>Nome do usuário</Text>
            </View>

            <View style={styles.infoContainer}>
              <Text style={styles.info}>345.162.612-33</Text>
              <Text style={styles.rotulo}>CPF (Cadastro de pessoa física)</Text>
            </View>
                  
            <View style={styles.infoContainer}>
              <Text style={styles.info}>Rua Pernambuco Nº 112 - Estrela d´oeste</Text>
              <Text style={styles.rotulo}>Endereço</Text>
            </View>
            
            <View style={styles.infoContainer}>
              <Text style={styles.info}>29 de Setembro de 2006</Text>
              <Text style={styles.rotulo}>Data de nascimento</Text>
            </View>

            <View style={styles.infoContainer}>
              <Text style={styles.info}>Tipo Sanguíneo: O+</Text>
              <Text style={styles.rotulo}>Tipo Sanguíneo</Text>
            </View>

            <View style={styles.infoContainer}>
              <Text style={styles.info}>Alergia a Penicilina</Text>
              <Text style={styles.rotulo}>Alergias</Text>
            </View>

            <View style={styles.infoContainer}>
              <Text style={styles.info}>123.4567.8901.2345</Text>
              <Text style={styles.rotulo}>Número do Cartão SUS</Text>
            </View>

            <View style={styles.linhaDivisoria} />
            <Text style={styles.textoOferecido}>Oferecido por:</Text>
            <View style={styles.containerLogos}>
              <Image source={require('../../assets/LogoSuaAgenda.png')} style={styles.logoSuaConsulta} />
              <Image source={require('../../assets/logoSUS.png')} style={styles.logoSuaConsulta} />
              <Image source={require('../../assets/brasilGovLogo.png')} style={styles.logoSuaConsulta} />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default CartSus; 