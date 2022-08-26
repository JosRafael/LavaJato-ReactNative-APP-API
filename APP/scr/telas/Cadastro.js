import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Keyboard,
  ScrollView,
  Alert,
} from "react-native";

import COLORS from "../components/colors2";
import Input from "../components/Input";
import Loader from "../components/Loader";
import Button1 from "../components/Button1";

import api from "../services/api";

const Cadastro = ({ navigation }) => {
  const [inputs, setInputs] = React.useState({
    email: "",
    nome: "",
    telefone: "",
    password: "",
  });
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  const validate = () => {
    Keyboard.dismiss();
    let isValid = true;

    if (!inputs.email) {
      handleError("Digite um email válido", "email");
      isValid = false;
    } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
      handleError("Digite um email válido", "email");
      isValid = false;
    }

    if (!inputs.nome) {
      handleError("Digite um nome", "nome");
      isValid = false;
    }

    if (!inputs.telefone) {
      handleError("Digite um número de telefone válido", "telefone");
      isValid = false;
    }

    if (!inputs.password) {
      handleError("Digte uma senha", "password");
      isValid = false;
    } else if (inputs.password.length < 4) {
      handleError("Senha minima de 4 digitos", "password");
      isValid = false;
    }

    if (isValid) {
      register();
    }
  };

  async function register() {
    try {
      setLoading(false);
      const response = await api.post("/usuario/cadastrar", inputs);
      const res = response.data;
      AsyncStorage.setItem("@user", JSON.stringify(res));
      navigation.navigate("Login");
    } catch (error) {
      Alert.alert("Erro", "Algo deu errado");
    }
  }

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
          Cadastre-se
        </Text>
        <Text style={{ color: COLORS.grey, fontSize: 18, marginVertical: 10 }}>
          Faça seu registro na CARWASH
        </Text>

        <View style={{ marginVertical: 20 }}>
          <Input
            onChangeText={(text) => handleOnchange(text, "email")}
            onFocus={() => handleError(null, "email")}
            iconName="email-outline"
            label="Email"
            placeholder="Digite um email"
            error={errors.email}
          />

          <Input
            onChangeText={(text) => handleOnchange(text, "nome")}
            onFocus={() => handleError(null, "nome")}
            iconName="account-outline"
            label="Full Name"
            placeholder="Informe o seu nome completo"
            error={errors.nome}
          />

          <Input
            keyboardType="numeric"
            onChangeText={(text) => handleOnchange(text, "telefone")}
            onFocus={() => handleError(null, "telefone")}
            iconName="phone-outline"
            label="Telefone Number"
            placeholder="Informe um número de telefone"
            error={errors.telefone}
          />
          <Input
            onChangeText={(text) => handleOnchange(text, "password")}
            onFocus={() => handleError(null, "password")}
            iconName="lock-outline"
            label="Password"
            placeholder="Digite sua senha"
            error={errors.password}
            password
          />
          <Button1 title="Registrar" onPress={validate} />
          <Text
            onPress={() => navigation.navigate("Login")}
            style={{
              color: COLORS.black,
              fontWeight: "bold",
              textAlign: "center",
              fontSize: 16,
            }}
          >
            Já possui uma conta ?Login
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Cadastro;
