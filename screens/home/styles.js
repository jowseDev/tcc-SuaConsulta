import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ededed',
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
  },
  saudacao: {
    width: '100%',
    paddingLeft: 20,
    marginTop: 20,
    marginBottom: 10,
    alignItems: 'flex-start',
  },
  textoSaudacao: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000089',
  },
  coracao: {
    width: 25,
    height: 25,
  },
  carouselContainer: {
    width: width,
    height: height * 0.3,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 0,
    marginBottom: 25,
  },
  carouselItem: {
    width: width,
    height: height * 0.3,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  image: {
    width: 350,
    height: 250,
    borderRadius: 10,
  },
  cartaoSus: {
    backgroundColor: '#000089',
    width: width * 0.9,
    height: 220,
    marginBottom: 15,
    flexDirection: 'row',
    borderRadius: 20,
    shadowColor: 'black',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  ladoEsquerdo: {
    flex: 1,
    borderRightWidth: 1,
    borderRightColor: 'white',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ladoDireito: {
    flex: 1,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoSuaConsulta: {
    width: 100,
    height: 50,
    marginBottom: 10,
  },
  tituloCarteirinha: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  linhaDivisoria: {
    height: 1,
    backgroundColor: 'white',
    width: '100%',
    marginVertical: 10,
  },
  numeroSus: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
  },
  botaoAcessar: {
    alignSelf: 'flex-end',
    marginBottom: 10,
  },
  textoBotao: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  tituloCarteirinhaDireita: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  cartaoHomeImg: {
    height: 70,
    width: 110,
  },
  cardConsulta: {
    backgroundColor: '#000089',
    width: width * 0.9,
    height: 80,
    marginTop: 15,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    shadowColor: 'black',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  imagemAgendarConsulta: {
    width: 50,
    height: 71,
    marginRight: 15,
  },
  imagemConsultasAgendadas: {
    width: 60,
    height: 60,
    marginRight: 15,
  },
  imagemHistoricoConsultas: {
    width: 60,
    height: 60,
    marginRight: 15,
  },
  textoConsulta: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
  },
  setaBotao: {
    width: 50,
    height: 25,
  },
  statusBar: {
    backgroundColor: '#000089',
    height: 20,
    width: '100%',
  },
  agendarConsulta: {
    backgroundColor: '#000089',
    width: width * 0.9,
    height: 220,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  cabecalho: {
    backgroundColor: '#000089',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  botaoSair: {
    width: 30,
    height: 30,
  },
  logoHeader: {
    width: 120,
    height: 40,
  },
  logoSUS:{
    backgroundColor: 'white', 
    width: 70,
    height: 70,
  },
});

export default styles;