import * as React from 'react';
import { Stack } from 'expo-router';

export const MainStack = () => {
  return (
    <Stack 
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e', 
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    />
  );
};