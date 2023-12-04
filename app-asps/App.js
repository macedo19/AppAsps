import React from "react";
import { View, Text, StatusBar } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"; // ou a biblioteca que preferir

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FuncionariosView from "./views/FuncionariosView";
import ContratosView from "./views/ContratosView";
import ParametrizacaoView from "./views/ParametrizacaoVIew";
import EmpresasView from "./views/EmpresasView";
import CargosView from "./views/CargosView";
import HeaderMarca from "./views/HeaderMarca";

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <StatusBar hidden />
      <Tab.Navigator
        screenOptions={{
          header: ({ route }) => <HeaderMarca title={'UrbanBuild'} />, // Use HeaderMarca
        }}
      >
        <Tab.Screen
          name="Funcionários"
          component={FuncionariosView}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="users" size={25} color="black" />
            ),
          }}
        />

        <Tab.Screen
          name="Contratos"
          component={ContratosView}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="briefcase" size={25} color="black" />
            ),
          }}
        />
        <Tab.Screen
          name="Empresas"
          component={EmpresasView}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="building" size={25} color="black" />
            ),
          }}
        />
        <Tab.Screen
          name="Cargos"
          component={CargosView}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="address-card" size={25} color="black" />
            ),
          }}
        />
        <Tab.Screen
          name="Parâmetros"
          component={ParametrizacaoView}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="plus" size={25} color="black" />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
