import React from 'react';
import { Link } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Home() {
  const { t } = useTranslation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Link href="./scanner" asChild>
          <TouchableOpacity style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>
              {t('scanQR')}
            </Text>
          </TouchableOpacity>
        </Link>
        
        <Link href="./settings" asChild>
          <TouchableOpacity style={styles.secondaryButton}>
            <Text style={styles.secondaryButtonText}>
              {t('changeLanguage')}
            </Text>
          </TouchableOpacity>
        </Link>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0', // Cambia esto al color de fondo deseado
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  primaryButton: {
    backgroundColor: '#4F46E5', // Cambia esto a tu color primario
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 999,
    elevation: 5,
  },
  primaryButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  secondaryButton: {
    marginTop: 16,
    backgroundColor: '#6B7280', // Cambia esto a tu color secundario
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  secondaryButtonText: {
    color: 'white',
    fontSize: 14,
  },
});
