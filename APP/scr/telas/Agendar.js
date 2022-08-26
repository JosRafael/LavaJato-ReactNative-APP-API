import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Keyboard,
  ScrollView,
  Alert,
  Linking,
} from "react-native";

import COLORS from "../components/colors2";
import Input from "../components/Input";
import Loader from "../components/Loader";
import Button1 from "../components/Button1";
import LavaJatos from "../components/lavajatos";

import api from "../services/api";

const Agendar = ({ navigation }) => {
  const [inputs, setInputs] = React.useState({
    Data: "",
    Hora: "",
    Placa: "",
  });
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  const validate = () => {
    Keyboard.dismiss();
    let isValid = true;

    if (!inputs.Data) {
      handleError("Digite uma data válida", "Data");
      isValid = false;
    }

    if (!inputs.Hora) {
      handleError("Digite uma hora", "Hora");
      isValid = false;
    }

    if (!inputs.Placa) {
      handleError("Digite um número de placa válido", "Placa");
      isValid = false;
    }
  };

  const Link = `https://api.whatsapp.com/send?phone=5587988290714&text=Olá, realizei um agendamento. Poderia conferir? Informações do agendamento: Placa: ${inputs.Placa} | Data: ${inputs.Data} | Hora: ${inputs.Hora}`;

  const handleOnchange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };
  const handleError = (error, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: error }));
  };

  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
      <Loader visible={loading} />
      <ScrollView
        contentContainerStyle={{ paddingTop: 50, paddingHorizontal: 18 }}
      >
        <Text style={{ color: COLORS.black, fontSize: 40, fontWeight: "bold" }}>
          Agendar
        </Text>
        <Text style={{ color: COLORS.grey, fontSize: 18, marginVertical: 10 }}>
          Combinar um agendamento
        </Text>

        <View style={{ marginVertical: 20 }}>
          <Input
            onChangeText={(text) => handleOnchange(text, "Data")}
            onFocus={() => handleError(null, "Data")}
            iconName=""
            label="Data"
            placeholder="Digite uma data"
            error={errors.Data}
          />

          <Input
            onChangeText={(text) => handleOnchange(text, "Hora")}
            onFocus={() => handleError(null, "Hora")}
            iconName=""
            label="Hora"
            placeholder="Informe o horario"
            error={errors.Hora}
          />
          <Input
            onChangeText={(text) => handleOnchange(text, "Placa")}
            onFocus={() => handleError(null, "Placa")}
            iconName=""
            label="Placa"
            placeholder="Placa do Veiculo"
            error={errors.Placa}
          />
          <Button1
            title="Agendar"
            onPress={() => {
              Linking.openURL(Link);
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Agendar;
