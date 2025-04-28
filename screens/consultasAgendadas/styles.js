import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ededed',
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
});

export default styles; 