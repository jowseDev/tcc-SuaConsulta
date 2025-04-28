import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
  Switch,
  StatusBar,
} from 'react-native';
import React, { useState } from 'react';
import styles from './styles';

const LoginScreen = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <SafeAreaView>
      <StatusBar backgroundColor="#000089" barStyle="light-content" />
      <View style={styles.container}>
      

        <View style={styles.parteSuperior}>
          <Image
            style={styles.logo}
            source={require('../../assets/LogoSuaAgenda.png')}
          />

          <View style={styles.entradaDados}>
            <Text style={styles.rotulo}>CPF ou E-mail:</Text>
            <TextInput
              style={styles.campoEntrada}
              placeholder="000.000.000-00"
              secureTextEntry={false}
               placeholderTextColor="white"
              onChangeText={''}
              value={''}
            />

            <Text style={styles.rotulo}>Senha:</Text>
            <TextInput
              style={styles.campoEntrada}
              placeholder="Senha"
              secureTextEntry={true}
              placeholderTextColor="white"
              onChangeText={''}
              value={''}
            />

            <View style={styles.containerSalvarSenha}>
              <Switch
                trackColor={{ false: '#767577', true: '#81b0ff' }}
                thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
              <Text style={styles.textoSalvarSenha}>Salvar Senha</Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.botaoAcessar}
            onPress={() => Alert.alert('Acessando...')}>
            <Text style={styles.textoBotao}>Acessar</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.parteBaixo}>
        <Text style={styles.textoParteBaixo}>Ainda não tem cadastro?</Text>

        <TouchableOpacity
          style={styles.botaoCadastro}
          onPress={() => navigation.navigate('Cadastro')}>
          <Text style={styles.textoBotao}>Cadastrar</Text>
        </TouchableOpacity>

        <Text style={styles.versao}>Versão 1.0</Text>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen; 