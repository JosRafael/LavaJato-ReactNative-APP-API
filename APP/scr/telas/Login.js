import React, { useEffect } from "react";
import { View, Text, SafeAreaView, Keyboard, Alert } from "react-native";
import COLORS from "../components/colors2";
import Button from "../components/Button1";
import Input from "../components/Input";
import Loader from "../components/Loader";

import AsyncStorage from "@react-native-async-storage/async-storage";

import api from "../services/api";

const Login = ({ navigation }) => {
  const [inputs, setInputs] = React.useState({ email: "", password: "" });
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  const checkLogin = async () => {
    AsyncStorage.clear();
    const user = await AsyncStorage.getItem("@user");
    if (user) {
      navigation.replace("Home");
    }
  };

  const validate = async () => {
    Keyboard.dismiss();
    let isValid = true;
    if (!inputs.email) {
      handleError("Digite um email", "email");
      isValid = false;
    }
    if (!inputs.password) {
      handleError("Digite uma senha", "password");
      isValid = false;
    }
    if (isValid) {
      login();
    }
  };

  const login = async () => {
    setLoading(true);
    setTimeout(async () => {
      try {
        setLoading(false);
        const response = await api.post("/usuario/login", inputs);
        const res = response.data;

        if (res.error) {
          Alert(res.message);
          return false;
        }
        await AsyncStorage.setItem("@user", JSON.stringify(res.usuario));
        navigation.navigate("Home");
      } catch (err) {
        Alert(err.message);
      }
    }, 3000);
  };
  useEffect(() => {
    checkLogin();
  }),
    [];

  const handleOnchange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };

  const handleError = (error, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: error }));
  };
  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
      <Loader visible={loading} />
      <View style={{ paddingTop: 50, paddingHorizontal: 20 }}>
        <Text style={{ color: COLORS.black, fontSize: 40, fontWeight: "bold" }}>
          Log In
        </Text>
        <Text style={{ color: COLORS.grey, fontSize: 18, marginVertical: 10 }}>
          Faça log in para conhecer o nosso App.
        </Text>
        <View style={{ marginVertical: 20 }}>
          <Input
            onChangeText={(text) => handleOnchange(text, "email")}
            onFocus={() => handleError(null, "email")}
            iconName="email-outline"
            label="Email"
            placeholder="Digite seu email"
            error={errors.email}
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
          <Button title="Entrar" onPress={validate} />
          <Text
            onPress={() => navigation.navigate("Cadastro")}
            style={{
              color: COLORS.black,
              fontWeight: "bold",
              textAlign: "center",
              fontSize: 16,
            }}
          >
            Ainda não tem conta? Cadastre-se
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
