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

const CargoForm = ({ onSave, onCancel }) => {
  const [novoCargo, setNovoCargo] = useState({
    codigo: "",
    valor: "",
    descricao: ""
  });

  const [dadosCargo, setDadosCargoVisible] = useState(true);

  const toggleDadosCargos = () => setDadosCargoVisible(!dadosCargo);

  const salvarNovoCargo = () => {
    // Construa o objeto que representa os dados a serem enviados
    const dadosParaEnviar = {
      codigo: novoCargo.codigo,
      descricao: novoCargo.descricao,
      valor: novoCargo.valor,
    };

    // Realize a requisição HTTP
    fetch("http://127.0.0.1:3000/cargo/criarcargo", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dadosParaEnviar),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Resposta da API:", data);
        onSave(novoCargo);
      })
      .catch((error) => {
        console.error("Erro na requisição:", error.message);
      });
  };

  return (
    <ScrollView contentContainerStyle={styleContratosForm.scrollContainer}>
      <View style={styleContratosForm.container}>
        <TouchableOpacity
          onPress={toggleDadosCargos}
          style={[
            styleContratosForm.sectionHeader,
            { marginBottom: 10, backgroundColor: "#f0f0f0", marginTop: 10 },
          ]}
        >
          <Text style={styleContratosForm.title}>Dados Pessoais</Text>
        </TouchableOpacity>
        {dadosCargo && (
          <>
            {/* Campos de Dados Pessoais */}
            <TextInput
              placeholder="Codigo"
              value={novoCargo.codigo}
              onChangeText={(text) =>
                setNovoCargo({ ...novoCargo, codigo: text })
              }
              style={styleContratosForm.input}
            />
            <TextInput
              placeholder="Descricao"
              value={novoCargo.descricao}
              onChangeText={(text) =>
                setNovoCargo({ ...novoCargo, descricao: text })
              }
              style={styleContratosForm.input}
            />
            <TextInput
              placeholder="Valor Bruto"
              value={novoCargo.valor}
              onChangeText={(text) =>
                setNovoCargo({ ...novoCargo, valor: text })
              }
              style={styleContratosForm.input}
            />
          </>
        )}

        <View style={styleContratosForm.buttonsContainer}>
          <Button
            title="Salvar"
            onPress={salvarNovoCargo}
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

export default CargoForm;
