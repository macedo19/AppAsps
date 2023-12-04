import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { styleContratosForm } from "../../styles/forms/style-contratos-form";

const ContratoForm = ({ onSave, onCancel }) => {
  const [novoContrato, setNovoContrato] = useState({
    codigo: "",
    valor: "",
    contagem_prazo: "",
    prazo: "",
    data_inicio: "",
    descricao: "",
    funcionario: "",
    empresa: "",
  });

  const SexoSelector = ({ selectedValue, onSelect }) => {
    const [options] = useState(["Masculino", "Feminino"]);

    return (
      <View style={styleContratosForm.radioContainer}>
        <Text style={styleContratosForm.subtitle}>Sexo:</Text>
        {options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styleContratosForm.radioButton,
              selectedValue === option && styleContratosForm.selectedButton,
            ]}
            onPress={() => onSelect(option)}
          >
            <Text style={styleContratosForm.buttonText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };


  const [dadosContrato, setDadosContratoVisible] = useState(true);

  const toggleDadosContratos = () =>
     setDadosContratoVisible(!dadosContrato);


  const salvarNovoFuncionario = () => {
    onSave(novoContrato);
  };

  return (
    <ScrollView contentContainerStyle={styleContratosForm.scrollContainer}>
      <View style={styleContratosForm.container}>
        <TouchableOpacity
          onPress={toggleDadosContratos}
          style={[
            styleContratosForm.sectionHeader,
            { marginBottom: 10, backgroundColor: "#f0f0f0", marginTop: 10 }, // Adicione esta linha
          ]}
        >
          <Text style={styleContratosForm.title}>Dados Pessoais</Text>
        </TouchableOpacity>
        {dadosContrato && (
          <>
            {/* Campos de Dados Pessoais */}
            <TextInput
              placeholder="Codigo"
              value={novoContrato.codigo}
              onChangeText={(text) =>
                setNovoContrato({ ...novoContrato, codigo: text })
              }
              style={styleContratosForm.input}
            />
            <TextInput
              placeholder="Valor"
              value={novoContrato.valor}
              onChangeText={(text) =>
                setNovoContrato({ ...novoContrato, valor: text })
              }
              style={styleContratosForm.input}
            />
            <TextInput
              placeholder="Contagem Prazo"
              value={novoContrato.contagem_prazo}
              onChangeText={(text) =>
                setNovoContrato({ ...novoContrato, contagem_prazo: text })
              }
              style={styleContratosForm.input}
            />
            <TextInput
              placeholder="Prazo"
              value={novoContrato.prazo}
              onChangeText={(text) =>
                setNovoContrato({ ...novoContrato, prazo: text })
              }
              style={styleContratosForm.input}
            />
            <TextInput
              placeholder="Data início"
              value={novoContrato.data_inicio}
              onChangeText={(text) =>
                setNovoContrato({ ...novoContrato, data_inicio: text })
              }
              style={styleContratosForm.input}
            />
            <TextInput
              placeholder="Descrição"
              value={novoContrato.descricao}
              onChangeText={(text) =>
                setNovoContrato({ ...novoContrato, descricao: text })
              }
              style={styleContratosForm.input}
            />
            <TextInput
              placeholder="Funcionarios"
              value={novoContrato.funcionario}
              onChangeText={(text) =>
                setNovoContrato({ ...novoContrato, funcionario: text })
              }
              style={styleContratosForm.input}
            />
            <TextInput
              placeholder="Empresa"
              value={novoContrato.empresa}
              onChangeText={(text) =>
                setNovoContrato({ ...novoContrato, empresa: text })
              }
              style={styleContratosForm.input}
            />
            {/* <SexoSelector
              options={["Masculino", "Feminino"]}
              selectedValue={novoContrato.sexo}
              onSelect={(value) =>
                setNovoContrato({ ...novoContrato, sexo: value })
              }
            /> */}
          </>
        )}

        <View style={styleContratosForm.buttonsContainer}>
          <Button
            title="Salvar"
            onPress={salvarNovoFuncionario}
            style={styleContratosForm.button}
          />

          <View style={{ marginTop: 10 }}>
            <Button
              title="Cancelar"
              onPress={onCancel}
              style={styleContratosForm.button}
              color="#f66"
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ContratoForm;
