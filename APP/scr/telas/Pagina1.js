import React from "react";
import {
  View,
  Button,
  Text,
  KeyboardAvoidingView,
  StyleSheet,
  ImageBackground,
} from "react-native";
import styles from "../style/styles";

export default function Pagina1({ navigation }) {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require("../../assets/limpeza.jpg")}
        style={styles.image}
      />

      <View style={styles.titles}>
        <Text style={styles.title}>Car Wash</Text>
        <Text style={styles.subtitle}>Version 1.0 aplicattion</Text>
      </View>
    </View>
  );
}
