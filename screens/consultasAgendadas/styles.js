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
  cabecalho: {
    backgroundColor: '#000089',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  botaoVoltar: {
    width: 30,
    height: 30,
  },
  logoHeader: {
    width: 120,
    height: 40,
  },
});

export default styles; 