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

const Cadastro = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <SafeAreaView style={styles.container1}>
      <StatusBar backgroundColor="#000089" barStyle="light-content" />
      <View style={styles.container2}>
        <View style={styles.titulo}>
        <Text style={styles.tituloTexto}>Cadastro de Usuário</Text>
        </View>
          <View style={styles.entradaDados}>
          <Text style={styles.rotulo}>Nome</Text>
          <TextInput
            style={styles.campoEntrada}
            value={nome}
            onChangeText={setNome}
            placeholder="Digite seu nome"
            placeholderTextColor="#000089" // Deixa ai nao da para colocar no style
          />
          <Text style={styles.rotulo}>Cartão do SUS</Text>
          <TextInput
            style={styles.campoEntrada}
            value={nome}
            onChangeText={setNome}
            placeholder="Digite o seu Cartão do SUS"
            placeholderTextColor="#000089" 
          />
           <Text style={styles.rotulo}>Cadastro de Pesssoa Física(CPF)</Text>
          <TextInput
            style={styles.campoEntrada}
            value={nome}
            onChangeText={setNome}
            placeholder="Digite seu CPF"
            placeholderTextColor="#000089" 
          />
          <Text style={styles.rotulo}>Email</Text>
          <TextInput
            style={styles.campoEntrada}
            value={email}
            onChangeText={setEmail}
            placeholder="Digite seu email"
            keyboardType="email-address"
            placeholderTextColor="#000089" 
          />
            <TextInput
            style={styles.campoEntrada}
            value={email}
            onChangeText={setEmail}
            placeholder="Digite seu email"
            keyboardType="email-address"
            placeholderTextColor="#000089" 
          />
          <Text style={styles.rotulo}>Senha</Text>
          <TextInput
            style={styles.campoEntrada}
            value={senha}
            onChangeText={''}
            placeholder="Digite sua senha"
            placeholderTextColor="#000089" 
          />
<Text style={styles.rotulo}>Senha</Text>
          <TextInput
            style={styles.campoEntrada}
            value={senha}
            onChangeText={''}
            placeholder="Digite sua senha"
            placeholderTextColor="#000089" 
                      />
<Text style={styles.rotulo}>Senha</Text>
          <TextInput
            style={styles.campoEntrada}
            value={senha}
            onChangeText={''}
            placeholder="Digite sua senha"
            placeholderTextColor="#000089" 
                      />
        <Text style={styles.rotulo}>Senha</Text>
          <TextInput
            style={styles.campoEntrada}
            value={senha}
            onChangeText={''}
            placeholder="Digite sua senha"
            placeholderTextColor="#000089" 
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