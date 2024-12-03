import React from 'react';
import { Link } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { View, Text, Pressable, StyleSheet } from 'react-native'; // Cambiado TouchableOpacity a Pressable
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Home() {
  const { t } = useTranslation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Link href="/scanner" asChild>
          <Pressable style={styles.primaryButton}>  // Cambiado de TouchableOpacity a Pressable
            <Text style={styles.primaryButtonText}>
              {t('scanQR')}
            </Text>
          </Pressable>
        </Link>
        
        <Link href="/settings" asChild>
          <Pressable style={styles.secondaryButton}>  // Cambiado de TouchableOpacity a Pressable
            <Text style={styles.secondaryButtonText}>
              {t('changeLanguage')}
            </Text>
          </Pressable>
        </Link>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  primaryButton: {
    backgroundColor: '#4F46E5',
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
    backgroundColor: '#6B7280',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  secondaryButtonText: {
    color: 'white',
    fontSize: 14,
  },
});