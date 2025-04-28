import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  barra: {
    paddingTop: 28,
    backgroundColor: '#080430',
  },
  parteSuperior: {
    backgroundColor: '#000089',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: 'center',
    paddingBottom: 90,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
  },
  logo: {
    height: 90,
    width: 190,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignSelf: 'center',
    marginBottom: 10,
  },
  entradaDados: {
    width: '80%',
  },
  campoEntrada: {
    borderWidth: 2,
    padding: 10,
    marginVertical: 10,
    width: '100%',
    borderColor: 'white',
    backgroundColor: '#000089',
    borderRadius: 8,
    shadowColor: 'white',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  rotulo: {
    color: 'white',
    backgroundColor: '#000089',
    fontFamily: 'Nunito',
    paddingTop: 10,
    textAlign: 'left',
  },
  containerSalvarSenha: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    padding: 10,
  },
  textoSalvarSenha: {
    color: 'white',
    marginLeft: 8,
  },
  botaoAcessar: {
    backgroundColor: '#3019c5',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    width: '45%',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  botaoCadastro: {
    backgroundColor: '#3019c5',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    width: '45%',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  textoBotao: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  parteBaixo: {
    alignItems: 'center',
    marginTop: 40,
  },
  textoParteBaixo: {
    padding: 20,
    color: '#000089',
    fontSize: 16,
  },
  versao: {
    paddingTop: 80,
  },
});

export default styles; 