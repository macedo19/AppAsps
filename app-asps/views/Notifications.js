import React, { useState } from "react";
import { View, Text, Button, ScrollView } from "react-native";
import { styleContratosForm } from "../styles/forms/style-contratos-form";

const NotificacaoForm = ({ onSave, onCancel }) => {
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

  const [selectedOption, setSelectedOption] = useState("manha");

  const salvarNovoFuncionario = () => {
    onSave(novoContrato);
  };

  return (
    <ScrollView contentContainerStyle={styleContratosForm.scrollContainer}>
      <View style={styleContratosForm.container}>
        <View
          style={[
            styleContratosForm.sectionHeader,
            { marginBottom: 10, backgroundColor: "#f0f0f0", marginTop: 10 },
          ]}
        >
          <Text style={styleContratosForm.title}>
            Selecione o horário para envio das informações para o e-mail:
          </Text>
        </View>

        {/* Picker estilizado para simular botões */}
        <View style={styleContratosForm.pickerContainer}>
          <Button
            title="Manhã"
            onPress={() => setSelectedOption("manha")}
            color={selectedOption === "manha" ? "#3498db" : "#bdc3c7"}
          />
          <Button
            title="Tarde"
            onPress={() => setSelectedOption("tarde")}
            color={selectedOption === "tarde" ? "#2ecc71" : "#bdc3c7"}
          />
          <Button
            title="Noite"
            onPress={() => setSelectedOption("noite")}
            color={selectedOption === "noite" ? "#e74c3c" : "#bdc3c7"}
          />
        </View>

        {/* Texto fora dos botões, alinhado ao lado */}
        <Text style={[styleContratosForm.buttonDescription, { marginBottom: 10 }]}>
          Observação:{" "}
          {selectedOption === "manha"
            ? "O envio das informações no e-mail ocorrerá no início do dia (entre as 08:00 e 08:30)"
            : selectedOption === "tarde"
            ? "O envio das informações no e-mail ocorrerá no meio do dia (entre as 13:00 e 13:30)"
            : "O envio das informações no e-mail ocorrerá no fim do dia (entre as 18:30 e 19:00)"}
        </Text>

        <View style={[styleContratosForm.buttonsContainer, { marginBottom: 10 }]}>
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

export default NotificacaoForm;
