import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { WebView } from 'react-native-webview';
import  scanUrl  from './utils/virusTotal';

// Define el tipo para los resultados
interface VtResult {
  success: boolean;
  data?: any; // Cambia 'any' por el tipo específico si lo conoces
  error?: string;
}

export default function Results() {
  const { data } = useLocalSearchParams();
  const { t } = useTranslation();
  const [scanning, setScanning] = useState(true);
  const [results, setResults] = useState<VtResult | null>(null); // Cambia el tipo aquí
  const [isUrl, setIsUrl] = useState(false);

  useEffect(() => {
    const analyzeContent = async () => {
      try {
        const urlPattern = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/;
        const isUrlContent = typeof data === 'string' && urlPattern.test(data); // Asegúrate de que data sea un string
        setIsUrl(isUrlContent);

        if (isUrlContent) {
          const vtResults = await scanUrl(data);
          setResults(vtResults); // Ahora esto es válido
        }
        
        setScanning(false);
      } catch (error) {
        setScanning(false);
      }
    };

    analyzeContent();
  }, [data]);

  if (scanning) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f0f0' }}>
        <ActivityIndicator size="large" color="#4F46E5" />
        <Text style={{ marginTop: 10 }}>{t('analyzing')}</Text>
      </View>
    );
  }

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#f0f0f0' }}>
      <View style={{ padding: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>{t('qrContent')}</Text>
        <Text style={{ fontSize: 18, marginBottom: 24 }}>{data}</Text>

        {isUrl && results && (
          <>
            <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>{t('securityReport')}</Text>
            <View style={{ backgroundColor: 'white', padding: 16, borderRadius: 8, marginBottom: 24 }}>
              <Text style={{ fontSize: 18, marginBottom: 8 }}>
                {results.success && results.data.positives > 0 
                  ? t('maliciousWarning')
                  : t('safe')}
              </Text>
              <Text>
                Positives: {results.data.positives} / {results.data.total}
              </Text>
            </View>

            <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>{t('preview')}</Text>
            <View style={{ height: 300, borderRadius: 8, overflow: 'hidden' }}>
            <WebView
              source={{ uri: Array.isArray(data) ? data[0] : (typeof data === 'string' ? data : undefined) }} // Asegúrate de que data sea un string
              style={{ flex: 1 }}
              javaScriptEnabled={false}
              />
            </View>
          </>
        )}
      </View>
    </ScrollView>
  );
}