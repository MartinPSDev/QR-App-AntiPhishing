import React, { useEffect } from 'react';
import { Stack } from 'expo-router';
import { useTranslation } from 'react-i18next';

export default function Layout() {
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage('es'); 
  }, [i18n]);

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#4F46E5',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      {/* Añade configuraciones específicas de rutas si es necesario */}
      <Stack.Screen 
        name="ScreenTwo" 
        options={{
          title: 'Screen Two'
        }} 
      />
    </Stack>
  );
}