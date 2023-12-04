import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const CargosView = () => {
  const [cargos, setCargos] = useState([]);

  const [selectedCargo, setSelectedCargo] = useState(null);



  useEffect(() => {
    // Função para carregar dados da API
    const fetchCargos = async () => {
      try {
        const response = await fetch('https://urban-build.vercel.app/cargo/listacargo');
        const data = await response.json();
        const arrayData = Object.values(data.resultados);
        console.log(arrayData)
        setCargos(arrayData); 
      } catch (error) {
        console.error('Erro ao carregar cargos:', error);
      }
    };

    fetchCargos();
  }, []); 



  const editarCargo = (item) => {
    setSelectedCargo(item);
  };

  const apagarCargo = (item) => {
    console.log('Cargo apagado:', item);
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.rowContainer}>
        <Text style={styles.infoText}>{item.codigo}</Text>
        <Text style={styles.infoText}>{item.nome}</Text>
        <Text style={styles.infoText}>{item.salario}</Text>
        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.optionButton} onPress={() => editarCargo(item)}>
            <Icon name="edit" size={20} color="blue" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionButton} onPress={() => apagarCargo(item)}>
            <Icon name="trash" size={20} color="red" />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Cargos cadastrados</Text>
      <View style={styles.headerRow}>
        <Text style={styles.headerText}>Código</Text>
        <Text style={styles.headerText}>Nome</Text>
        <Text style={styles.headerText}>Salário</Text>
        <Text style={styles.headerText}>Ações</Text>
      </View>
      <FlatList
        data={cargos}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 8,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 8,
    marginBottom: 8,
  },
  infoText: {
    flex: 1,
    textAlign: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1,
  },
  optionButton: {
    padding: 8,
    borderRadius: 8,
  },
});

export default CargosView;
