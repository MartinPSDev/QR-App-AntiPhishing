import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native'; 
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
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}> 
      <View style={{ padding: 16 }}> 
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 24 }}>{t('changeLanguage')}</Text>
        
        {languages.map((lang) => (
          <Pressable 
            key={lang.code}
            style={[styles.button, i18n.language === lang.code ? styles.activeButton : styles.inactiveButton]} 
            onPress={() => changeLanguage(lang.code)}
          >
            <Text
              style={{
                fontSize: 18, 
                color: i18n.language === lang.code ? 'white' : '#4A4A4A', 
              }}
            >
              {lang.name}
            </Text>
          </Pressable> 
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 16, 
    marginBottom: 8, 
    borderRadius: 8, 
  },
  activeButton: {
    backgroundColor: 'yourPrimaryColor', 
  },
  inactiveButton: {
    backgroundColor: 'white',
  },
});