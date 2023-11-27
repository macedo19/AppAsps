
import React from 'react';
import { View, Text } from 'react-native';

function HomeView() {
    return (
      <View>
        {/* Conteúdo da tela HomeView */}
      </View>
    );
  }
  
  HomeView.navigationOptions = {
    title: 'Home',
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Configuracoes')}>
        <Icon name="cog" size={30} color="#000" style={{ marginRight: 15 }} />
      </TouchableOpacity>
    ),
  };


export default HomeView;