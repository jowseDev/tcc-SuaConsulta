import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Alert,
  StatusBar,
} from 'react-native';
import styles from './styles1';

const Cadastro1 = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <SafeAreaView style={styles.container1}>
      <StatusBar backgroundColor="#000089" barStyle="light-content" />
      <View style={styles.container2}>
        <View style={styles.entradaDados}>
          <Text style={styles.rotulo}>Nome</Text>
          <TextInput
            style={styles.campoEntrada}
            value={nome}
            onChangeText={setNome}
            placeholder="Digite seu nome"
          />
          <Text style={styles.rotulo}>Email</Text>
          <TextInput
            style={styles.campoEntrada}
            value={email}
            onChangeText={setEmail}
            placeholder="Digite seu email"
            keyboardType="email-address"
          />
          <Text style={styles.rotulo}>Senha</Text>
          <TextInput
            style={styles.campoEntrada}
            value={senha}
            onChangeText={setSenha}
            placeholder="Digite sua senha"
            secureTextEntry
          />
        </View>
        <TouchableOpacity
          style={styles.botaoAcessar}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={{ color: 'white' }}>Avançar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.espaco}></View>
      <View style={styles.parteBaixo}></View>
    </SafeAreaView>
  );
};
export default Cadastro;