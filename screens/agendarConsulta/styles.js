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
    width: 35,
    height: 35,
  },
  logoHeader: {
    width: 140,
    height: 45,
  },
});

export default styles; 