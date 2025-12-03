import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./src/Home";
import Profile from "./src/Perfil";

export type RootStackParamList = {
  Home: undefined;
  Profile: {
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
          options={{ title: "Página inicial" }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ title: "Seu perfil" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
