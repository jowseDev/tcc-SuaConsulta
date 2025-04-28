import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2011b1',
  },
  cardInfo: {
    width: '90%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  nome: {
    color: '#000089',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 2,
  },
  rotulo: {
    color: '#000089',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  info: {
    color: '#000089',
    fontSize: 16,
    marginBottom: 2,
  },
  parteBaixo: {
    backgroundColor: '#000089',
    width: '100%',
    padding: 20,
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  botaoVoltar: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    width: '50%',
    alignItems: 'center',
  },
  textoBotao: {
    color: '#000089',
    fontWeight: 'bold',
    fontSize: 16,
  },
  linhaDivisoria: {
    height: 1,
    backgroundColor: '#000089',
    width: '100%',
    marginVertical: 15,
  },
  containerLogos: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 10,
  },
  logoSuaConsulta: {
    width: 80,
    height: 40,
  },
  textoOferecido: {
    color: '#000089',
    fontSize: 12,
    marginTop: 15,
    textAlign: 'center',
  },
});

export default styles; 