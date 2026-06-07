import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import PetListScreen from './screens/PetListScreen';
import { initDatabase } from './utils/database';

const Stack = createStackNavigator();

export default function App() {
  useEffect(() => {
    initDatabase(); // cria tabelas na primeira vez
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ title: '📝 Criar Conta' }} />
        <Stack.Screen name="PetList" component={PetListScreen} options={{ title: '🐾 Pets Disponíveis' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
