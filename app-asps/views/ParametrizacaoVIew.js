import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import FormularioFuncionario from './form/FuncionarioForm';
import EmpresaForm from './form/EmpresasForm';
import ContratosForm from './form/ContratosForm';
import CargoForm from './form/CargoForm';
import NotifcacaoForm from './Notifications';
// import Icon from 'path/to/your/IconComponent'; // Certifique-se de importar o ícone apropriado

const Stack = createStackNavigator();

function ParametrizacaoScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('FuncionarioForm')}>
          <Text style={styles.cardText}>Funcionários</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('ContratosForm')}>
          <Text style={styles.cardText}>Contratos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('EmpresaForm')}>
          <Text style={styles.cardText}>Empresas</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('CargoForm')}>
          <Text style={styles.cardText}>Cargos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('NotifcacaoForm')}>
          <Text style={styles.cardText}>Notificações</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
  
const HomeView = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Cadastre seus parametros" component={ParametrizacaoScreen} /> 
      <Stack.Screen name="FuncionarioForm" component={FormularioFuncionario} />
      <Stack.Screen name="EmpresaForm" component={EmpresaForm} />
      <Stack.Screen name="ContratosForm" component={ContratosForm} />
      <Stack.Screen name="CargoForm" component={CargoForm} />
      <Stack.Screen name="NotifcacaoForm" component={NotifcacaoForm} />
      {/* Adicione outras telas aqui, se necessário */}
    </Stack.Navigator>
  );
};

HomeView.navigationOptions = {
  title: 'Home',
  headerRight: () => (
    <TouchableOpacity onPress={() => navigation.navigate('Configuracoes')}>
      <Icon name="cog" size={30} color="#000" style={{ marginRight: 15 }} />
    </TouchableOpacity>
  ),
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  card: {
    flex: 1,
    aspectRatio: 1,
    backgroundColor: '#D3D3D3', // Cinza claro
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 3,
  },
  cardText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeView;
