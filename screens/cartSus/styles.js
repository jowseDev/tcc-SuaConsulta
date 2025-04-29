import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flexGrow: 1,
    paddingVertical: 20,
  },
  container2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ededed',
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
  titulo: {
    color: '#000089',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  infoContainer: {
    marginBottom: 25,
  },
  nome: {
    color: '#000089',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  rotulo: {
    color: '#000089',
    fontSize: 14,
    fontWeight: 'bold',
  },
  info: {
    color: '#000089',
    fontSize: 18,
    marginBottom: 5,
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
  cabecalho: {
    backgroundColor: '#000089',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  botaoVoltar: {
    width: 35,
    height: 35,
  },
  logoHeader: {
    width: 140,
    height: 45,
  },
});

export default styles; 