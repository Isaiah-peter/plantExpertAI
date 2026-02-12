import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import ScannerOverlay from "../components/ScannerOverlay";
import { useRouter, type Href } from 'expo-router';

const WelcomeScreen = ({ navigation }: any) => {
    const router = useRouter();

  return (
    <LinearGradient colors={['#34D399', '#34D399', '#064E3B']} style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logoText}>PlantExpextAI</Text>
        <Text style={styles.welcomeText}>Welcome</Text>
        <Text style={styles.subText}>We're glad to see you</Text>
      </View>

      <ScannerOverlay />

      <TouchableOpacity 
      style={styles.startButton} 
      onPress={() => router.push('/scan' as Href)}
    >
      <Text style={styles.buttonText}>Get Start {'>'}</Text>
    </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'space-around', paddingVertical: 60 },
  header: { alignItems: 'center' },
  logoText: { fontSize: 42, fontWeight: 'bold', color: '#FDE68A', fontStyle: 'italic', marginBottom: 20 },
  welcomeText: { fontSize: 28, fontWeight: 'bold', color: '#fff' },
  subText: { fontSize: 18, color: '#ECFDF5', opacity: 0.8 },
  startButton: { marginTop: 40 },
  buttonText: { fontSize: 32, color: '#fff', fontWeight: '500' },
});

export default WelcomeScreen;
