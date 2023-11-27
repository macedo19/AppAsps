import React, { useState } from 'react';
import { View, Button, FlatList, Text, StyleSheet } from 'react-native';
import { Table, Row } from 'react-native-table-component';
import Icon from 'react-native-vector-icons/FontAwesome';
import ModalBox from 'react-native-modalbox';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { globalStyles } from '../styles/views/style-funcionarios';
import FormularioFuncionario from './form/FuncionarioForm';

const Stack = createStackNavigator();

const FuncionariosView = () => {
  const [funcionarios, setFuncionarios] = useState([
    { id: '1', nome: 'Funcionário 1' },
    { id: '2', nome: 'Funcionário 2' },
    // Adicione mais funcionários conforme necessário
  ]);

  const [isModalVisible, setModalVisible] = useState(false);

  const adicionarFuncionario = () => {
    setModalVisible(true);
  };

  const salvarNovoFuncionario = (novoFuncionario) => {
    setFuncionarios([...funcionarios, { id: String(funcionarios.length + 1), ...novoFuncionario }]);
    setModalVisible(false);
  };

  const onCancel = () => {
    setModalVisible(false);
  };

  const renderItem = (funcionario) => (
    <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }} key={funcionario.id}>
      <Row
        data={[funcionario.nome]}
        style={globalStyles.itemContainer}
        textStyle={{ ...globalStyles.itemText, fontWeight: 'bold' }}

      />
      <Row
        data={[
          <Icon name="edit" size={20} color="blue" />,
          <Icon name="trash" size={20} color="red" />,
        ]}
        style={globalStyles.opcoesContainer}
        textStyle={{ ...globalStyles.itemText, fontWeight: 'bold' }}

      />
    </Table>
  );

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.botaoContainer}>
        <Button title="Adicionar Funcionário" onPress={adicionarFuncionario} />
      </View>
      <FlatList
        data={funcionarios}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => renderItem(item)}
      />

      {/* ModalBox ou Tela de Formulário */}
      <ModalBox
        isOpen={isModalVisible}
        onClosed={onCancel}
        style={styles.modalBox}
      >
        <FormularioFuncionario onSave={salvarNovoFuncionario} onCancel={onCancel} />
      </ModalBox>
    </View>
  );
};

const styles = StyleSheet.create({
  modalBox: {
    backgroundColor: 'white',
    padding: 20,
  },
});

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Funcionarios" component={FuncionariosView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
