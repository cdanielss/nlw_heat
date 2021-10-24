import React from 'react';
import { Home } from './src/srceens/home';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import { AuthProvider } from './src/hooks/auth';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  })
  /* Se a Fontes não foram carregadas, retorna pagina de loading */
  if(!fontsLoaded){
    return <AppLoading/>
  }
   
  return (
    <AuthProvider>
      <StatusBar style="light" translucent /* backgroundColor="transparent" *//>
      <Home/>
    </AuthProvider>
  );
}

