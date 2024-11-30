import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useLocalSearchParams, useNavigation } from 'expo-router';

export default function ScreenTwo() {
  const { message } = useLocalSearchParams();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Screen Two</Text>
      {message ? (
        <Text>Message: {message}</Text>
      ) : (
        <Text>No message provided</Text>
      )}
      <Button title="Go Back" onPress={() => navigation.goBack()} />
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
});