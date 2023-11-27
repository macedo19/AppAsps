import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  botaoContainer: {
    marginBottom: 10,
    alignSelf: 'center',
    width: '50%',
  },
  itemContainer: {
    flexDirection: 'row',
    height: 40,
    backgroundColor: '#E7E6E1',
  },
  itemText: {
    textAlign: 'center',
  },
  opcoesContainer: {
    flexDirection: 'row',
    height: 40,
    backgroundColor: '#E7E6E1',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  opcoesText: {
    textAlign: 'center',
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});