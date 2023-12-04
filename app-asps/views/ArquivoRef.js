// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import FormularioFuncionario from './form/FuncionarioForm';

// function HomeView({ navigation }) {
//   const [modalVisible, setModalVisible] = useState(false);

//   const openModal = () => {
//     setModalVisible(true);
//   };

//   const closeModal = () => {
//     setModalVisible(false);
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.row}>
//         <TouchableOpacity style={styles.card} onPress={openModal}>
//           <Text style={styles.cardText}>Funcionários</Text>
//         </TouchableOpacity>
//         {/* Adicione os outros cards conforme necessário */}
//       </View>

//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={closeModal}
//       >
//         <View style={styles.modalContainer}>
//           <FormularioFuncionario onSave={() => {}} onCancel={closeModal} />
//         </View>
//       </Modal>
//     </View>
//   );
// }

// HomeView.navigationOptions = {
//   title: 'Home',
//   headerRight: () => (
//     <TouchableOpacity onPress={() => navigation.navigate('Configuracoes')}>
//       <Icon name="cog" size={30} color="#000" style={{ marginRight: 15 }} />
//     </TouchableOpacity>
//   ),
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 10,
//   },
//   row: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 10,
//   },
//   card: {
//     flex: 1,
//     aspectRatio: 1,
//     backgroundColor: '#D3D3D3', // Cinza claro
//     borderRadius: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//     margin: 3,
//   },
//   cardText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// export default HomeView;
