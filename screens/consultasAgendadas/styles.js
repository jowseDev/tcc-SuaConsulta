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
    backgroundColor: '#ededed',
    paddingTop: 20,
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
  cardConsulta: {
    backgroundColor: '#000089',
    width: width * 0.9,
    marginBottom: 20,
    borderRadius: 20,
    flexDirection: 'row',
    padding: 15,
    shadowColor: 'black',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  imagemConsulta: {
    width: 60,
    height: 60,
    marginRight: 15,
    tintColor: 'white',
  },
  infoContainer: {
    flex: 1,
  },
  tituloConsulta: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  medico: {
    color: 'white',
    fontSize: 16,
    marginBottom: 5,
  },
  descricao: {
    color: 'white',
    fontSize: 14,
    marginBottom: 10,
  },
  dataHoraContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  data: {
    color: 'white',
    fontSize: 14,
  },
  hora: {
    color: 'white',
    fontSize: 14,
  },
});

export default styles; 