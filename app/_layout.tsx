import { Stack } from 'expo-router';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function RootLayout() {
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
      <Stack.Screen name="index" options={{ title: './Home' }} />
      <Stack.Screen name="scanner" options={{ title: './Scanner' }} />
      <Stack.Screen name="results" options={{ title: './Results' }} />
      <Stack.Screen name="settings" options={{ title: './Settings' }} />
    </Stack>
  );
}