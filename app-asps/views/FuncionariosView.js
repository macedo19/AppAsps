import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/views/style-funcionarios';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const FuncionariosView = () => {
  const [funcionarios, setFuncionarios] = useState([]);

  useEffect(() => {
    // Função para carregar dados da API
    const fetchFuncionarios = async () => {
      try {
        const response = await fetch('https://urban-build.vercel.app/funcionarios/lista');
        const data = await response.json();
        const arrayData = Object.values(data.resultados);
        setFuncionarios(arrayData); 
      } catch (error) {
        console.error('Erro ao carregar funcionários:', error);
      }
    };

    fetchFuncionarios();
  }, []); 

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.cardContainer}>
      <Text style={styles.cardTitle}>{item.nome}</Text>
      <View style={styles.cardContent}>
        <Text style={styles.cardCargo}>{item.cargo}</Text>
      </View>
      <View style={styles.cardOptions}>
        <TouchableOpacity>
          <Icon name="edit" size={20} color="blue" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="trash" size={20} color="red" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={funcionarios}
        keyExtractor={(item) => item.id} // Certifique-se de que a chave seja uma string ou número
        renderItem={renderItem}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
      />
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Funcionarios" component={FuncionariosView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
    cardContainer: {
      flex: 1,
      backgroundColor: '#fff',
      borderRadius: 8,
      padding: 16,
      margin: 8,
    },
    cardTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    cardContent: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10,
    },
    cardCargo: {
      marginTop: 10,
    },
    cardOptions: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 10,
    },
    columnWrapper: {
      justifyContent: 'space-between',
    },
  });

export default App;
