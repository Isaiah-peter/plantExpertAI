// app/_layout.tsx
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
      <Stack screenOptions={{ headerShown: false }}>
        {/* The name corresponds to the file name in the app directory */}
        <Stack.Screen name="index" /> 
        <Stack.Screen name="scan" options={{ title: 'Scan' }} />
        <Stack.Screen name="result" />
      </Stack>
  );
}