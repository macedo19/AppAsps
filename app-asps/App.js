import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'; // ou a biblioteca que preferir

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FuncionariosView from './views/FuncionariosView';
import ConfiguracoesView from './views/ContratosView';
import HomeView from './views/HomeView';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Funcionários" component={FuncionariosView} options={{
        tabBarIcon: ({ color, size }) => (
          <Icon name="users" size={25} color="black" />
        ),
      }} />
      <Tab.Screen name="Inicio" component={HomeView} options={{
        tabBarIcon: ({ color, size }) => (
          <Icon name="home" size={25} color="black" />
        ),
      }} />
      <Tab.Screen name="Contratos" component={ConfiguracoesView} options={{
        tabBarIcon: ({ color, size }) => (
          <Icon name="briefcase" size={25} color="black" />
        ),
      }} />
    </Tab.Navigator>
  </NavigationContainer>
    
  );
}

export default App;