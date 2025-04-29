import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from './styles1';

const Cadastro = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [cartaoSUS, setCartaoSUS] = useState('');
  const [cpf, setCpf] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [sexo, setSexo] = useState('Masculino');
  const [cep, setCep] = useState('');
  const [rua, setRua] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [complemento, setComplemento] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  return (
    <SafeAreaView style={styles.container1}>
      <StatusBar backgroundColor="#000089" barStyle="light-content" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>

        <View style={styles.container2}>
          <View style={styles.titulo}>
            <Text style={styles.tituloTexto}>Cadastrar Usuário</Text>
          </View>

          <View style={styles.linha} />

          {/* Informações Pessoais */}
          <Text style={styles.subtitulo}>Informações Pessoais</Text>

          <View style={styles.entradaDados}>
            <Text style={styles.rotulo}>Nome</Text>
            <TextInput
              style={styles.campoEntrada}
              value={nome}
              onChangeText={setNome}
              placeholder="Digite seu nome"
              placeholderTextColor="#000089"
            />

            <Text style={styles.rotulo}>Cartão do SUS</Text>
            <TextInput
              style={styles.campoEntrada}
              value={cartaoSUS}
              onChangeText={setCartaoSUS}
              placeholder="Digite o seu Cartão do SUS"
              placeholderTextColor="#000089"
            />

            <Text style={styles.rotulo}>Cadastro de Pessoa Física (CPF)</Text>
            <TextInput
              style={styles.campoEntrada}
              value={cpf}
              onChangeText={setCpf}
              placeholder="Digite seu CPF"
              placeholderTextColor="#000089"
            />

            <Text style={styles.rotulo}>Data de Nascimento</Text>
            <TextInput
              style={styles.campoEntrada}
              value={dataNascimento}
              onChangeText={setDataNascimento}
              placeholder="Ex: 29/02/1998"
              placeholderTextColor="#000089"
            />

            <Text style={styles.rotulo}>Sexo</Text>
            <View style={styles.campoPicker}>
              <Picker
                selectedValue={sexo}
                onValueChange={(itemValue) => setSexo(itemValue)}
                style={styles.picker}
              >
                <Picker.Item label="Masculino" value="Masculino" />
                <Picker.Item label="Feminino" value="Feminino" />
              </Picker>
            </View>
          </View>

          <View style={styles.linha} />

          {/* Endereço */}
          <Text style={styles.subtitulo}>Endereço</Text>

          <View style={styles.entradaDados}>
            <Text style={styles.rotulo}>CEP</Text>
            <TextInput
              style={styles.campoEntrada}
              value={cep}
              onChangeText={setCep}
              placeholder="Digite seu CEP"
              placeholderTextColor="#000089"
            />

            <Text style={styles.rotulo}>Rua</Text>
            <TextInput
              style={styles.campoEntrada}
              value={rua}
              onChangeText={setRua}
              placeholder="Digite a Rua"
              placeholderTextColor="#000089"
            />

            <Text style={styles.rotulo}>Bairro</Text>
            <TextInput
              style={styles.campoEntrada}
              value={bairro}
              onChangeText={setBairro}
              placeholder="Digite o Bairro"
              placeholderTextColor="#000089"
            />

            <Text style={styles.rotulo}>Cidade</Text>
            <TextInput
              style={styles.campoEntrada}
              value={cidade}
              onChangeText={setCidade}
              placeholder="Digite a Cidade"
              placeholderTextColor="#000089"
            />

            <Text style={styles.rotulo}>Estado</Text>
            <TextInput
              style={styles.campoEntrada}
              value={estado}
              onChangeText={setEstado}
              placeholder="Digite o Estado"
              placeholderTextColor="#000089"
            />

            <Text style={styles.rotulo}>Complemento</Text>
            <TextInput
              style={styles.campoEntrada}
              value={complemento}
              onChangeText={setComplemento}
              placeholder="Complemento (opcional)"
              placeholderTextColor="#000089"
            />
          </View>

          <View style={styles.linha} />

          {/* Contato */}
          <Text style={styles.subtitulo}>Contato</Text>

          <View style={styles.entradaDados}>
            <Text style={styles.rotulo}>Telefone</Text>
            <TextInput
              style={styles.campoEntrada}
              value={telefone}
              onChangeText={setTelefone}
              placeholder="Digite seu telefone"
              placeholderTextColor="#000089"
            />

            <Text style={styles.rotulo}>E-mail</Text>
            <TextInput
              style={styles.campoEntrada}
              value={email}
              onChangeText={setEmail}
              placeholder="Digite seu e-mail"
              placeholderTextColor="#000089"
              keyboardType="email-address"
            />
          </View>

          <View style={styles.linha} />

          {/* Senha */}
          <Text style={styles.subtitulo}>Senha</Text>

          <View style={styles.entradaDados}>
            <Text style={styles.rotulo}>Senha</Text>
            <TextInput
              style={styles.campoEntrada}
              value={senha}
              onChangeText={setSenha}
              placeholder="Digite sua senha"
              placeholderTextColor="#000089"
              secureTextEntry
            />

            <Text style={styles.rotulo}>Confirmar Senha</Text>
            <TextInput
              style={styles.campoEntrada}
              value={confirmarSenha}
              onChangeText={setConfirmarSenha}
              placeholder="Confirme sua senha"
              placeholderTextColor="#000089"
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

      </ScrollView>
    </SafeAreaView>
  );
};
export default Cadastro;