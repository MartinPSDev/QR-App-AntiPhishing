import React, { useState, useEffect, useRef } from 'react';
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native';
import { Camera } from 'expo-camera'; 
import { useTranslation } from 'react-i18next';
import { router } from 'expo-router';

export default function Scanner() {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scanned, setScanned] = useState(false);
  const barCodeScannerRef = useRef<typeof Camera | null>(null);
  const { t } = useTranslation();

  const requestCameraPermission = async () => {
    try {
      const { status } = await Camera.requestCameraPermissionsAsync(); // Cambiado a expo-camera
      setHasPermission(status === 'granted');
    } catch (err) {
      console.error(err);
      setHasPermission(false);
    }
  };

  useEffect(() => {
    requestCameraPermission();
  }, []);

  const handleBarCodeScanned = ({ data }: { data: string }) => {
    setScanned(true);
    router.push({
      pathname: './results',
      params: { data }
    });
  };

  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#4F46E5" />
      </View>
    );
  }

  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>{t('permissionDenied')}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Camera
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
        ref={barCodeScannerRef}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0'
  },
  errorText: {
    color: 'red',
    fontSize: 16
  },
  scannerContainer: {
    flex: 1,
    position: 'relative'
  }
});