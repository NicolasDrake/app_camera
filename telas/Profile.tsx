import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../App";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type ProfileScreenProp = NativeStackNavigationProp<
  RootStackParamList,
  "Profile"
>;

export default function Profile() {
  const route = useRoute();
  const navigation = useNavigation<ProfileScreenProp>();

  const { nome, email, foto } = route.params as {
    nome: string;
    email: string;
    foto: string;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meu Perfil</Text>

      <Image source={{ uri: foto }} style={styles.image} />

      <Text style={styles.text}>Nome: {nome}</Text>
      <Text style={styles.text}>E-mail: {email}</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>VOLTAR</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#121212",
  },

  title: {
    fontSize: 30,
    marginBottom: 25,
    color: "#ffffff",
    letterSpacing: 3,
  },

  text: {
    fontSize: 20,
    marginTop: 10,
    color: "#ffffff",
    letterSpacing: 1,
  },

  image: {
    width: 200,
    height: 200,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "#7f00ff",
  },

  button: {
    backgroundColor: "#A020F0",
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 5,
    marginTop: 30,
  },

  buttonText: {
    color: "#ffffff",
    letterSpacing: 1,
    fontSize: 19,
  },
});
