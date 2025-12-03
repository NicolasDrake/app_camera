import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, Alert } from "react-native";

import * as ImagePicker from "expo-image-picker";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../App";

type HomeScreenProp = NativeStackNavigationProp<RootStackParamList, "Home">;

export default function Home() {
  const navigation = useNavigation<HomeScreenProp>();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [foto, setFoto] = useState<string | null>(null);

  const tirarFoto = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();

    if (status !== "granted") {
      Alert.alert("Permissão negada", "Você precisa permitir o uso da câmera!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      setFoto(result.assets[0].uri);
    }
  };

  const verPerfil = () => {
    if (!nome || !email || !foto) {
      Alert.alert("Atenção", "Preencha todos os campos e tire uma foto!");
      return;
    }

    navigation.navigate("Profile", {
      nome,
      email,
      foto,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Perfil</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        onChangeText={setNome}
      />

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        keyboardType="email-address"
        onChangeText={setEmail}
      />

      <TouchableOpacity style={styles.button} onPress={tirarFoto}>
        <Text style={styles.buttonText}>TIRAR FOTO</Text>
      </TouchableOpacity>

      {foto && <Image source={{ uri: foto }} style={styles.image} />}

      <TouchableOpacity style={styles.button} onPress={verPerfil}>
        <Text style={styles.buttonText}>PERFIL</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 35,
    backgroundColor: "#121212",
  },

  title: {
    fontSize: 30,
    marginBottom: 30,
    color: "#ffffff",
  },

  input: {
    width: "90%",
    padding: 15,
    borderRadius: 5,
    marginBottom: 20,
    backgroundColor: "#121212",
    color: "#ffffff",
    borderWidth: 2,
    borderColor: "#7f00ff",
    fontSize: 20,
  },

  image: {
    width: 200,
    height: 200,
    borderRadius: 150,
    marginTop: 35,
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

