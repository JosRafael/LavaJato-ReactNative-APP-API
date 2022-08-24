import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./scr/telas/Login";
import Cadastro from "./scr/telas/Cadastro";
import Pagina1 from "./scr/telas/Pagina1";
import Home from "./scr/telas/Home";
import Esquecisenha from "./scr/telas/Esquecisenha";
import Detalhes from "./scr/telas/Detalhes";
import AgendamentoLava from "./scr/telas/AgendamentoLava";
import Agendar from "./scr/telas/Agendar";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Pagina1"
        component={Pagina1}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="EsqueciSenha" component={Esquecisenha} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detalhes" component={Detalhes} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="AgendamentoLava" component={AgendamentoLava} />
      <Stack.Screen name="Agendar" component={Agendar} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
