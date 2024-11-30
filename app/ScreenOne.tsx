import React from 'react';
import { Text, View, Alert, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';


export default function ScreenOne() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Hello World!
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => Alert.alert('Tapped!')}
      >
        <Text style={styles.buttonText}>Tap me for an alert</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('ScreenTwo')}
      >
        <Text style={styles.buttonText}>Go to next screen</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});