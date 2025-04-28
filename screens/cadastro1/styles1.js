import { StyleSheet } from 'react-native';

const styles1 = StyleSheet.create({
espaco:{
  padding: 30,
  backgroundColor: '#ededed',
  },
  container1: {},
  container2: {
    alignItems: 'center',
    backgroundColor: '#ededed',
  },
  entradaDados: {
    width: '80%',
    paddingTop: 20,
    alignItems: 'center',
    marginBottom: 50,
  },
  rotulo: {
    color: '#000089',
    fontFamily: 'Nunito',
    textAlign: 'left',
    width: '100%',
    paddingLeft: 10,
    marginBottom: 2,
  },

  campoEntrada: {
    color: '#000089',
    padding: 12,
    marginVertical: 15,
    width: '100%',
    borderColor: '#000089',
    backgroundColor: '#ededed',
    borderRadius: 8,
    borderWidth: 2,
    textAlign: 'left',
    shadowColor: 'black',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  parteBaixo: {
    backgroundColor: '#000089',
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingBottom: 50,
    paddingTop: 670,
  },
  botaoAcessar: {
    backgroundColor: '#3019c5',
    color:'white',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    width: '50%',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,

  },
  statusBar: {
    backgroundColor: '#000089',
    height: 20,
    width: '100%',
  },
});

export default styles1;
