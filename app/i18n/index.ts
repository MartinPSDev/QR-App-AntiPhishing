import i18n from 'i18next';
import 'intl-pluralrules';
import { initReactI18next } from 'react-i18next';
import * as Localization from 'expo-localization';

const resources = {
  es: {
    translation: {
      scanQR: 'Escanear QR',
      analyzing: 'Analizando...',
      checkingVT: 'Verificando en VirusTotal...',
      takingScreenshot: 'Capturando vista previa...',
      securityReport: 'Informe de Seguridad',
      qrContent: 'Contenido del QR',
      maliciousWarning: '⚠️ ¡Contenido potencialmente malicioso!',
      safe: '✅ Contenido seguro',
      preview: 'Vista Previa',
      changeLanguage: 'Cambiar Idioma',
      permissionDenied: 'Permiso de cámara denegado'
    }
  },
  en: {
    translation: {
      scanQR: 'Scan QR',
      analyzing: 'Analyzing...',
      checkingVT: 'Checking with VirusTotal...',
      takingScreenshot: 'Taking preview...',
      securityReport: 'Security Report',
      qrContent: 'QR Content',
      maliciousWarning: '⚠️ Potentially malicious content!',
      safe: '✅ Safe content',
      preview: 'Preview',
      changeLanguage: 'Change Language',
      permissionDenied: 'Camera permission denied'
    }
  },
  fr: {
    translation: {
      scanQR: 'Scanner QR',
      analyzing: 'Analyse en cours...',
      checkingVT: 'Vérification avec VirusTotal...',
      takingScreenshot: 'Capture d\'aperçu...',
      securityReport: 'Rapport de Sécurité',
      qrContent: 'Contenu QR',
      maliciousWarning: '⚠️ Contenu potentiellement malveillant !',
      safe: '✅ Contenu sûr',
      preview: 'Aperçu',
      changeLanguage: 'Changer de Langue',
      permissionDenied: 'Permission de caméra refusée'
    }
  },
  pt: {
    translation: {
      scanQR: 'Escanear QR',
      analyzing: 'Analisando...',
      checkingVT: 'Verificando com VirusTotal...',
      takingScreenshot: 'Capturando prévia...',
      securityReport: 'Relatório de Segurança',
      qrContent: 'Conteúdo QR',
      maliciousWarning: '⚠️ Conteúdo potencialmente malicioso!',
      safe: '✅ Conteúdo seguro',
      preview: 'Prévia',
      changeLanguage: 'Mudar Idioma',
      permissionDenied: 'Permissão de câmera negada'
    }
  },
  it: {
    translation: {
      scanQR: 'Scansiona QR',
      analyzing: 'Analisi in corso...',
      checkingVT: 'Verifica con VirusTotal...',
      takingScreenshot: 'Acquisizione anteprima...',
      securityReport: 'Rapporto di Sicurezza',
      qrContent: 'Contenuto QR',
      maliciousWarning: '⚠️ Contenuto potenzialmente dannoso!',
      safe: '✅ Contenuto sicuro',
      preview: 'Anteprima',
      changeLanguage: 'Cambia Lingua',
      permissionDenied: 'Permesso fotocamera negato'
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: Localization.locale.split('-')[0] || 'es',
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;