import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, ScrollView, TouchableOpacity, Platform } from "react-native";
import { stylesFuncionarioForm } from "../../styles/forms/style-funcionarioss-form";
import { createStackNavigator } from '@react-navigation/stack';
import { Picker } from '@react-native-picker/picker'; // Import Picker from the new package

const Stack = createStackNavigator();

const EmpresasForm = ({ onSave, onCancel }) => {
  const [novaEmpresa, setNovaEmpresa] = useState({
    nome: "",
    segmento: "",
    rua: "",
    numero: "",
    bairro: "",
    cidade: "",
    estado: "",
    codigo: "",
  });

  const [segmentos, setSegmentos] = useState([]);
  const [dadosEmpresaVisible, setDadosEmpressaVisible] = useState(true);
  const [dadosEnderecoVisible, setDadosEnderecoVisible] = useState(true);

  const toggleDadosEmpresa = () => setDadosEmpressaVisible(!dadosEmpresaVisible);
  const toggleDadosEndereco = () => setDadosEnderecoVisible(!dadosEnderecoVisible);

  const salvarNovaEmpresa = () => {
     // Envia os dados para a API
     fetch('https://urban-build.vercel.app/empresa/criaempresa', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(novaEmpresa),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Resposta da API:', data);
      onSave(novaEmpresa);
    })
    .catch(error => {
      console.error('Erro na requisição:', error);
    });
  };
  

  useEffect(() => {
    // Fetch segmentos on component mount
    fetchSegmentos();
  }, []); // Empty dependency array ensures it only runs once on mount
  
  const fetchSegmentos = () => {
    // Replace the fetch URL with your API endpoint
    fetch("https://urban-build.vercel.app/segmento/listasegmento")
      .then((response) => response.json())
      .then((data) => {
        const arrayData = Object.values(data.resultados);
        setSegmentos(arrayData);

        setSegmentos(arrayData)
         
      })
      .catch((error) => console.error("Erro ao obter segmentos:", error));
  };


  return (
    <ScrollView contentContainerStyle={stylesFuncionarioForm.scrollContainer}>
      <View style={stylesFuncionarioForm.container}>
        <TouchableOpacity
          onPress={toggleDadosEmpresa}
          style={[
            stylesFuncionarioForm.sectionHeader,
            { marginBottom: 10, backgroundColor: "#f0f0f0", marginTop: 10 },
          ]}
        >
          <Text style={stylesFuncionarioForm.title}>Dados Pessoais</Text>
        </TouchableOpacity>
        {dadosEmpresaVisible && (
          <>
            {/* Campos de Dados Pessoais */}
            <TextInput
              placeholder="Codigo empresa"
              value={novaEmpresa.codigo}
              onChangeText={(text) => setNovaEmpresa({ ...novaEmpresa, codigo: text })}
              style={stylesFuncionarioForm.input}
            />
            <TextInput
              placeholder="Nome da empresa"
              value={novaEmpresa.nome}
              onChangeText={(text) => setNovaEmpresa({ ...novaEmpresa, nome: text })}
              style={stylesFuncionarioForm.input}
            />
            <View style={stylesFuncionarioForm.input}>
              {/* Utiliza o Picker para o campo de segmento */}
              <Picker
                selectedValue={novaEmpresa.segmento}
                onValueChange={(itemValue) => setNovaEmpresa({ ...novaEmpresa, segmento: itemValue })}
              >
                <Picker.Item label="Selecione o Segmento" value="" />
                {segmentos.map((segmento) => (
                  <Picker.Item key={segmento.id} label={segmento.descricao} value={segmento.id} style={{
                    color: "#000"
                  }} />
                ))}
              </Picker>
            </View>
          </>
        )}

        <TouchableOpacity
          onPress={toggleDadosEndereco}
          style={[
            stylesFuncionarioForm.sectionHeader,
            { marginBottom: 10, backgroundColor: "#f0f0f0", marginTop: 10 },
          ]}
        >
          <Text style={stylesFuncionarioForm.title}>Dados Endereço</Text>
        </TouchableOpacity>
        {dadosEnderecoVisible && (
          <>
            {/* Campos de Dados Endereço */}
            <TextInput
              placeholder="Rua"
              value={novaEmpresa.rua}
              onChangeText={(text) => setNovaEmpresa({ ...novaEmpresa, rua: text })}
              style={stylesFuncionarioForm.input}
            />
            <TextInput
              placeholder="Número"
              value={novaEmpresa.numero}
              onChangeText={(text) => setNovaEmpresa({ ...novaEmpresa, numero: text })}
              style={stylesFuncionarioForm.input}
            />
            <TextInput
              placeholder="Bairro"
              value={novaEmpresa.bairro}
              onChangeText={(text) => setNovaEmpresa({ ...novaEmpresa, bairro: text })}
              style={stylesFuncionarioForm.input}
            />
            <TextInput
              placeholder="Cidade"
              value={novaEmpresa.cidade}
              onChangeText={(text) => setNovaEmpresa({ ...novaEmpresa, cidade: text })}
              style={stylesFuncionarioForm.input}
            />
            <TextInput
              placeholder="Estado"
              value={novaEmpresa.estado}
              onChangeText={(text) => setNovaEmpresa({ ...novaEmpresa, estado: text })}
              style={stylesFuncionarioForm.input}
            />
          </>
        )}
        <View style={stylesFuncionarioForm.buttonsContainer}>
          <Button
            title="Salvar"
            onPress={salvarNovaEmpresa}
            style={stylesFuncionarioForm.button}
          />
          <View style={{ marginTop: 10 }}>
            <Button
              title="Cancelar"
              onPress={onCancel}
              style={stylesFuncionarioForm.button}
              color="#f66"
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default EmpresasForm;
