import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importando as telas
import Login from './screens/login';
import Home from './screens/home';
import Cadastro from './screens/cadastro1';
import CartSus from './screens/cartSus';
import AgendarConsulta from './screens/agendarConsulta';
import ConsultasAgendadas from './screens/consultasAgendadas';
import ConsultasConcluidas from './screens/consultasConcluidas';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#000089',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        {/* Esconde a barra superior na tela de Login */}
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        {/* Mantém a barra com botão de voltar nas outras telas */}
        <Stack.Screen 
          name="Home" 
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Cadastro" component={Cadastro} />
  
        <Stack.Screen 
          name="CartSus" 
          component={CartSus}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="AgendarConsulta" component={AgendarConsulta} />
        <Stack.Screen name="ConsultasAgendadas" component={ConsultasAgendadas} />
        <Stack.Screen name="ConsultasConcluidas" component={ConsultasConcluidas} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
