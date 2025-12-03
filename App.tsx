import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./telas/Home";
import Profile from "./telas/Profile";

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
          options={{ title: "Início" }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ title: "Perfil do Usuário" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
