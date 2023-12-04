import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { stylesFuncionarioForm } from "../../styles/forms/style-funcionarioss-form";
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const FormularioFuncionario = ({ onSave, onCancel }) => {
  const [novoFuncionario, setNovoFuncionario] = useState({
    nome: "",
    rg: "",
    cpf: "",
    sexo: "",
    idade: "",
    rua: "",
    numero: "",
    bairro: "",
    cidade: "",
    estado: "",
    codigo: "",
    tipo_contratacao: "",
    data_admissao: "",
    tipo_salario: "",
    // ... outros campos
  });

  const SexoSelector = ({ selectedValue, onSelect }) => {
    const [options] = useState(["Masculino", "Feminino"]);

    return (
      <View style={stylesFuncionarioForm.radioContainer}>
        <Text style={stylesFuncionarioForm.subtitle}>Sexo:</Text>
        {options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[
              stylesFuncionarioForm.radioButton,
              selectedValue === option && stylesFuncionarioForm.selectedButton,
            ]}
            onPress={() => onSelect(option)}
          >
            <Text style={stylesFuncionarioForm.buttonText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const ContratacaoSeletor = ({ selectedValue, onSelect }) => {
    const [options] = useState(["CLT", "PJ"]);

    return (
      <View style={stylesFuncionarioForm.radioContainer}>
        <Text style={stylesFuncionarioForm.subtitle}>Tipo da contratação:</Text>
        {options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[
              stylesFuncionarioForm.radioButton,
              selectedValue === option && stylesFuncionarioForm.selectedButton,
            ]}
            onPress={() => onSelect(option)}
          >
            <Text style={stylesFuncionarioForm.buttonText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const SalárioCalculado = ({ selectedValue, onSelect }) => {
    const [options] = useState(["Bruto Mensal", "P/ hora"]);

    return (
      <View style={stylesFuncionarioForm.radioContainer}>
        <Text style={stylesFuncionarioForm.subtitle}>Base para Salário:</Text>
        {options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[
              stylesFuncionarioForm.radioButton,
              selectedValue === option && stylesFuncionarioForm.selectedButton,
            ]}
            onPress={() => onSelect(option)}
          >
            <Text style={stylesFuncionarioForm.buttonText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const [dadosPessoaisVisible, setDadosPessoaisVisible] = useState(true);
  const [dadosEnderecoVisible, setDadosEnderecoVisible] = useState(true);
  const [dadosFuncionarioVisible, setDadosFuncionarioVisible] = useState(true);

  const toggleDadosPessoais = () =>
    setDadosPessoaisVisible(!dadosPessoaisVisible);
  const toggleDadosEndereco = () =>
    setDadosEnderecoVisible(!dadosEnderecoVisible);
  const toggleDadosFuncionario = () =>
    setDadosFuncionarioVisible(!dadosFuncionarioVisible);

  const salvarNovoFuncionario = () => {
    // Envia os dados para a API
    fetch('https://urban-build.vercel.app/funcionarios/list', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(novoFuncionario),
    })
    .then(response => response.json())
    .then(data => {
      // Faça algo com a resposta da API, se necessário
      console.log('Resposta da API:', data);
      // Chama a função onSave se a requisição for bem-sucedida
      onSave(novoFuncionario);
    })
    .catch(error => {
      console.error('Erro na requisição:', error);
      // Trate o erro de alguma forma, se necessário
    });
  };

  return (
    <ScrollView contentContainerStyle={stylesFuncionarioForm.scrollContainer}>
      <View style={stylesFuncionarioForm.container}>
        <TouchableOpacity
          onPress={toggleDadosPessoais}
          style={[
            stylesFuncionarioForm.sectionHeader,
            { marginBottom: 10, backgroundColor: "#f0f0f0", marginTop: 10 },
          ]}
        >
          <Text style={stylesFuncionarioForm.title}>Dados Pessoais</Text>
        </TouchableOpacity>
        {dadosPessoaisVisible && (
          <>
            {/* Campos de Dados Pessoais */}
            <TextInput
              placeholder="Nome"
              value={novoFuncionario.nome}
              onChangeText={(text) =>
                setNovoFuncionario({ ...novoFuncionario, nome: text })
              }
              style={stylesFuncionarioForm.input}
            />
            <TextInput
              placeholder="RG"
              value={novoFuncionario.rg}
              onChangeText={(text) =>
                setNovoFuncionario({ ...novoFuncionario, rg: text })
              }
              style={stylesFuncionarioForm.input}
            />
            <TextInput
              placeholder="CPF"
              value={novoFuncionario.cpf}
              onChangeText={(text) =>
                setNovoFuncionario({ ...novoFuncionario, cpf: text })
              }
              style={stylesFuncionarioForm.input}
            />
            <TextInput
              placeholder="Nacionalidade"
              value={novoFuncionario.nacionalidade}
              onChangeText={(text) =>
                setNovoFuncionario({ ...novoFuncionario, nacionalidade: text })
              }
              style={stylesFuncionarioForm.input}
            />
            <TextInput
              placeholder="Idade"
              value={novoFuncionario.idade}
              onChangeText={(text) =>
                setNovoFuncionario({ ...novoFuncionario, idade: text })
              }
              style={stylesFuncionarioForm.input}
            />
            <SexoSelector
              options={["Masculino", "Feminino"]}
              selectedValue={novoFuncionario.sexo}
              onSelect={(value) =>
                setNovoFuncionario({ ...novoFuncionario, sexo: value })
              }
            />
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
              value={novoFuncionario.rua}
              onChangeText={(text) =>
                setNovoFuncionario({ ...novoFuncionario, rua: text })
              }
              style={stylesFuncionarioForm.input}
            />
            <TextInput
              placeholder="Número"
              value={novoFuncionario.numero}
              onChangeText={(text) =>
                setNovoFuncionario({ ...novoFuncionario, numero: text })
              }
              style={stylesFuncionarioForm.input}
            />
            <TextInput
              placeholder="Bairro"
              value={novoFuncionario.bairro}
              onChangeText={(text) =>
                setNovoFuncionario({ ...novoFuncionario, bairro: text })
              }
              style={stylesFuncionarioForm.input}
            />
            <TextInput
              placeholder="Cidade"
              value={novoFuncionario.cidade}
              onChangeText={(text) =>
                setNovoFuncionario({ ...novoFuncionario, cidade: text })
              }
              style={stylesFuncionarioForm.input}
            />
            <TextInput
              placeholder="Estado"
              value={novoFuncionario.estado}
              onChangeText={(text) =>
                setNovoFuncionario({ ...novoFuncionario, estado: text })
              }
              style={stylesFuncionarioForm.input}
            />
          </>
        )}

        <TouchableOpacity
          onPress={toggleDadosFuncionario}
          style={[
            stylesFuncionarioForm.sectionHeader,
            { marginBottom: 10, backgroundColor: "#f0f0f0", marginTop: 10 },
          ]}
        >
          <Text style={stylesFuncionarioForm.title}>Dados Funcionário</Text>
        </TouchableOpacity>
        {dadosFuncionarioVisible && (
          <>
            {/* Campos de Dados Funcionário */}
            <TextInput
              placeholder="Codigo do funcionário"
              value={novoFuncionario.codigo}
              onChangeText={(text) =>
                setNovoFuncionario({ ...novoFuncionario, codigo: text })
              }
              style={stylesFuncionarioForm.input}
            />
              <ContratacaoSeletor
              options={["CLT", "PJ"]}
              selectedValue={novoFuncionario.sexo}
              onSelect={(value) =>
                setNovoFuncionario({ ...novoFuncionario, sexo: value })
              }
            />
            <TextInput
              placeholder="Data admissão"
              value={novoFuncionario.data_admissao}
              onChangeText={(text) =>
                setNovoFuncionario({ ...novoFuncionario, data_admissao: text })
              }
              style={stylesFuncionarioForm.input}
            />
               <SalárioCalculado
              options={["Bruto Mensal", "P/ hora"]}
              selectedValue={novoFuncionario.sexo}
              onSelect={(value) =>
                setNovoFuncionario({ ...novoFuncionario, sexo: value })
              }
            />
            <TextInput
              placeholder="Cargo"
              value={novoFuncionario.codigo_cargo}
              onChangeText={(text) =>
                setNovoFuncionario({ ...novoFuncionario, codigo_cargo: text })
              }
              style={stylesFuncionarioForm.input}
            />
          </>
        )}

        <View style={stylesFuncionarioForm.buttonsContainer}>
          <Button
            title="Salvar"
            onPress={salvarNovoFuncionario}
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

export default FormularioFuncionario;
