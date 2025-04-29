import React from 'react';
import { View, Text, TouchableOpacity, StatusBar, Image, ScrollView } from 'react-native';
import styles from './styles';

const ConsultasConcluidas = ({ navigation }) => {
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
          <View style={styles.cardConsulta}>
            <Image source={require('../../assets/consultaConcluidaImg2.png')}
            resizeMode="contain"
            style={styles.imagemConsulta} />
            <View style={styles.infoContainer}>
              <Text style={styles.tituloConsulta}>Consulta de Rotina</Text>
              <Text style={styles.medico}>Dr. Carlos Silva</Text>
              <Text style={styles.descricao}>Avaliação geral de saúde concluída. Paciente com boa saúde geral, sem queixas específicas. Pressão arterial normal, peso estável.</Text>
              <View style={styles.dataHoraContainer}>
                <Text style={styles.data}>10/03/2024</Text>
                <Text style={styles.hora}>14:30</Text>
              </View>
            </View>
          </View>

          <View style={styles.cardConsulta}>
            <Image source={require('../../assets/consultaConcluidaImg2.png')}
            resizeMode="contain"
            style={styles.imagemConsulta} />
            <View style={styles.infoContainer}>
              <Text style={styles.tituloConsulta}>Exame de Sangue</Text>
              <Text style={styles.medico}>Dra. Ana Oliveira</Text>
              <Text style={styles.descricao}>Coleta de sangue realizada com sucesso. Exames solicitados: hemograma completo, glicemia, colesterol e triglicerídeos.</Text>
              <View style={styles.dataHoraContainer}>
                <Text style={styles.data}>15/03/2024</Text>
                <Text style={styles.hora}>09:00</Text>
              </View>
            </View>
          </View>

          <View style={styles.cardConsulta}>
            <Image source={require('../../assets/consultaConcluidaImg2.png')}
            resizeMode="contain"
            style={styles.imagemConsulta} />
            <View style={styles.infoContainer}>
              <Text style={styles.tituloConsulta}>Avaliação Cardiológica</Text>
              <Text style={styles.medico}>Dr. Pedro Santos</Text>
              <Text style={styles.descricao}>Eletrocardiograma realizado. Ritmo cardíaco normal, sem alterações significativas. Pressão arterial dentro dos parâmetros normais.</Text>
              <View style={styles.dataHoraContainer}>
                <Text style={styles.data}>20/03/2024</Text>
                <Text style={styles.hora}>15:45</Text>
              </View>
            </View>
          </View>

          <View style={styles.cardConsulta}>
            <Image source={require('../../assets/consultaConcluidaImg2.png')}
            resizeMode="contain"
            style={styles.imagemConsulta} />
            <View style={styles.infoContainer}>
              <Text style={styles.tituloConsulta}>Consulta com Dermatologista</Text>
              <Text style={styles.medico}>Dra. Mariana Costa</Text>
              <Text style={styles.descricao}>Avaliação dermatológica completa. Pele saudável, sem lesões ou alterações significativas. Recomendação de uso de protetor solar diário.</Text>
              <View style={styles.dataHoraContainer}>
                <Text style={styles.data}>25/03/2024</Text>
                <Text style={styles.hora}>11:30</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ConsultasConcluidas; 