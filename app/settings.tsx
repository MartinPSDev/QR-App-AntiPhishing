import React from 'react';
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Settings() {
  const { i18n, t } = useTranslation();

  const languages = [
    { code: 'es', name: 'Español' },
    { code: 'en', name: 'English' },
    { code: 'fr', name: 'Français' },
    { code: 'pt', name: 'Português' },
    { code: 'it', name: 'Italiano' }
  ];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'yourBackgroundColor' }}> // Cambia 'yourBackgroundColor' por el color deseado
      <View style={{ padding: 16 }}> // Cambia 'p-4' por el estilo correspondiente
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 24 }}>{t('changeLanguage')}</Text>
        
        {languages.map((lang) => (
          <TouchableOpacity
            key={lang.code}
            style={[styles.button, i18n.language === lang.code ? styles.activeButton : styles.inactiveButton]} // Aplica estilos condicionalmente
            onPress={() => changeLanguage(lang.code)}
          >
            <Text
              style={{
                fontSize: 18, // Cambia 'text-lg' por el tamaño correspondiente
                color: i18n.language === lang.code ? 'white' : '#4A4A4A', // Cambia 'text-white' y 'text-gray-800' por los colores deseados
              }}
            >
              {lang.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 16, // Cambia 'p-4' por el estilo correspondiente
    marginBottom: 8, // Cambia 'mb-2' por el estilo correspondiente
    borderRadius: 8, // Cambia 'rounded-lg' por el estilo correspondiente
  },
  activeButton: {
    backgroundColor: 'yourPrimaryColor', // Cambia 'yourPrimaryColor' por el color deseado
  },
  inactiveButton: {
    backgroundColor: 'white',
  },
});