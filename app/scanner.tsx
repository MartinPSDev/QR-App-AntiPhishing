import React from 'react';
import { useState, useEffect } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useTranslation } from 'react-i18next';
import { router } from 'expo-router';

export default function Scanner() {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null); // Cambia el tipo aquí
  const [scanned, setScanned] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted'); // Ahora esto es válido
    };

    getBarCodeScannerPermissions();
  }, []);


  const handleBarCodeScanned = async ({ data }: { data: string }) => {
    setScanned(true);
    
    
    router.push({
      pathname: './results',
      params: { data }
    });
  };

  if (hasPermission === null) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f0f0' }}> {/* Cambia className por style */}
        <ActivityIndicator size="large" color="#4F46E5" />
      </View>
    );
  }

  if (hasPermission === false) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f0f0' }}> {/* Cambia className por style */}
        <Text style={{ color: 'red' }}>{t('permissionDenied')}</Text> {/* Cambia className por style */}
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}> {/* Cambia className por style */}
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={{ flex: 1 }} // Asegúrate de que el estilo del escáner también esté definido
      />
    </View>
  );
}