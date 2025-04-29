import React from 'react';
import { View, Text, SafeAreaView, Dimensions, Image, StatusBar, TouchableOpacity, ScrollView } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import styles from './styles';

const { width, height } = Dimensions.get('window');

const images = [
  require('../../assets/imagemHome1.png'),
  require('../../assets/imagemHome2.png'),
  require('../../assets/imagemHome3.png'),
];

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#000089" barStyle="light-content" />
      <View style={styles.cabecalho}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Image source={require('../../assets/botaoSairImg.png')}
          resizeMode="contain"
          style={styles.botaoSair} />
        </TouchableOpacity>
        <Image source={require('../../assets/LogoSuaAgenda.png')} 
        resizeMode="contain"
        style={styles.logoHeader} />
        <View style={{ width: 30 }} />
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.saudacao}>
          <Text style={styles.textoSaudacao}>Olá, José 💙</Text>
        </View>
        <View style={styles.carouselContainer}>
          <Carousel
            loop
            width={width}
            height={height * 0.6}
            autoPlay={true}
            data={images}
            scrollAnimationDuration={1000}
            renderItem={({ item }) => (
              <View style={styles.carouselItem}>
                <Image source={item} style={styles.image} />
              </View>
            )}
          />
        </View>
        <View style={styles.cartaoSus}>
          <View style={styles.ladoEsquerdo}>
            <Image source={require('../../assets/logoSUS.png')} 
            resizeMode="contain"
            style={styles.logoSUS} />
            <Text style={styles.tituloCarteirinha}>Minha carteirinha SUS</Text>
            <View style={styles.linhaDivisoria} />
            <Text style={styles.numeroSus}>123.4567.8901.2345</Text>
          </View>
          <View style={styles.ladoDireito}>
            <TouchableOpacity
              style={styles.botaoAcessar}
              onPress={() => navigation.navigate('CartSus')}
            >
              <Text style={styles.textoBotao}>Clique e Acesse {'>'}</Text>
            </TouchableOpacity>
            <Text style={styles.tituloCarteirinhaDireita}>Minha Carteirinha SUS Online</Text>
            <View style={styles.linhaDivisoria} />
            <Image source={require('../../assets/cartaoSusImg.png')} 
            resizeMode="contain"
            style={styles.cartaoHomeImg}/>
          </View>
        </View>

        <TouchableOpacity 
          style={styles.cardConsulta}
          onPress={() => navigation.navigate('AgendarConsulta')}
        >
          <Image source={require('../../assets/agendarConsultaImg.png')}
          resizeMode="contain"
          style={styles.imagemAgendarConsulta} />
          <Text style={styles.textoConsulta}>Agendar consulta</Text>
          <Image source={require('../../assets/setaBotaoImg.png')} 
          resizeMode="contain"
          style={styles.setaBotao} />
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.cardConsulta}
          onPress={() => navigation.navigate('ConsultasAgendadas')}
        >
          <Image source={require('../../assets/consultaAgendadaImg.png')} 
          resizeMode="contain"
          style={styles.imagemConsultasAgendadas} />
          <Text style={styles.textoConsulta}>Consultas Agendadas</Text>
          <Image source={require('../../assets/setaBotaoImg.png')}
          resizeMode="contain"
          style={styles.setaBotao} />
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.cardConsulta}
          onPress={() => navigation.navigate('ConsultasConcluidas')}
        >
          <Image source={require('../../assets/consultaConcluidaImg.png')}
          resizeMode="contain"
          style={styles.imagemHistoricoConsultas} />
          <Text style={styles.textoConsulta}>Histórico de consultas</Text>
          <Image source={require('../../assets/setaBotaoImg.png')}
          resizeMode="contain"
          style={styles.setaBotao} />
        </TouchableOpacity>
        <View> Teste</View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
