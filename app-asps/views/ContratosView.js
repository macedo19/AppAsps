import React, { useState } from 'react';
import { View, FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/views/style-contratos';
import Icon from 'react-native-vector-icons/FontAwesome';

const ContratosView = () => {
  const [contratos, setContratos] = useState([
    { id: '1', status: 'Em andamento', valor: '1500', data_inicio: "01/07/2023", data_fim: "01/07/2023", quantidade_funcionarios_alocado: "4", empresa_contratante: "Hering", progresso: '10' },
    { id: '2', status: 'Finalizado', valor: '1900', data_inicio: "01/06/2023", data_fim: "01/07/2023", quantidade_funcionarios_alocado: "2", empresa_contratante: "Hering", progresso: '50' },
    { id: '3', status: 'Finalizado', valor: '1900', data_inicio: "01/06/2023", data_fim: "01/07/2023", quantidade_funcionarios_alocado: "2", empresa_contratante: "Hering", progresso: '90' },
  ]);

  const [selectedContrato, setSelectedContrato] = useState(null);

  const editarContrato = (item) => {
    setSelectedContrato(item);
  };

  const renderItem = ({ item }) => {
    const progressBarColor = getProgressBarColor(item.progresso);

    return (
      <View style={styles.cardContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.cardTitle}>{item.status}</Text>
          <Text style={styles.dateText}>{item.data_inicio} - {item.data_fim}</Text>
        </View>
        <View style={styles.companyInfoContainer}>
          <Text style={styles.companyName}>{item.empresa_contratante}</Text>
          <View style={styles.infoContainer}>
            <Icon name="users" size={20} color="blue" style={styles.iconUsers} />
            <Text style={styles.infoText}>{item.quantidade_funcionarios_alocado} funcionários</Text>
          </View>
        </View>
        <View style={styles.progressContainer}>
          <View style={[styles.progressBar, { width: `${item.progresso}%`, backgroundColor: progressBarColor }]} />
        </View>
        <View style={styles.extraContainer}>
          {/* Adicione qualquer conteúdo adicional abaixo do progresso aqui */}
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.valueTitle}>Valor estimado para obra:</Text>
        </View>
        <View style={styles.valueContainer}>
          <Text style={styles.valueText}>R$ {item.valor}</Text>
        </View>
        <View style={styles.cardOptions}>
          <TouchableOpacity style={styles.optionButton} onPress={() => editarContrato(item)}>
            <Icon name="edit" size={20} color="blue" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionButton} onPress={() => apagarContrato(item)}>
            <Icon name="trash" size={20} color="red" />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const getProgressBarColor = (progresso) => {
    const progress = parseInt(progresso, 10);

    if (progress < 30) {
      return 'red';
    } else if (progress < 70) {
      return 'yellow';
    } else {
      return 'green';
    }
  };

  const apagarContrato = (item) => {
    // Implemente a lógica para apagar o contrato conforme necessário
    console.log('Contrato apagado:', item);
  };

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={contratos}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Cor de fundo com opacidade para torná-lo transparente
    borderRadius: 8,
    padding: 16,
    margin: 8,
    paddingBottom: 80,
    shadowColor: '#000', // Cor da sombra
    shadowOffset: { width: 0, height: 2 }, // Offset da sombra
    shadowOpacity: 0.3, // Opacidade da sombra
    shadowRadius: 2, // Raio da sombra
    elevation: 3, // Elevação para a sombra no Android
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  companyInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  companyName: {
    fontSize: 16,
    marginBottom: 10,
  },
  dateText: {
    fontSize: 12,
  },
  progressContainer: {
    marginTop: 20, // Espaçamento adicionado entre o progresso e a view abaixo
    height: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
  },
  extraContainer: {
    // Estilo para a view abaixo do progresso
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconUsers: {
    marginRight: 8,
  },
  infoText: {
    fontSize: 14,
    color: '#333',
  },
  valueTitle: {
    fontSize: 16,
    color: '#333',
    marginBottom: 4,
    marginTop: 10
  },
  valueContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  valueText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  cardOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
  },
  optionButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    borderRadius: 8,
  },
});

export default ContratosView;
