import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./src/Home"
import Perfil from "./src/Perfil"

export type RootStackParamList = {
  Home: undefined;
  Perfil: {
    nome: string;
    email: string;
    foto: string;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Pagina principal" }}
        />
        <Stack.Screen
          name="Perfil"
          component={Perfil}
          options={{ title: "Perfil do usuário" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
