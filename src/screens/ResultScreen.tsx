import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

const ResultScreen: React.FC = () => {
  const router = useRouter();
  
  // Grab the data passed from the ScanScreen
  const { name, desc, steps, imageUri } = useLocalSearchParams<{
    name: string;
    desc: string;
    steps: string;
    imageUri: string;
  }>();

  return (
    <View style={styles.container}>
      {/* 1. Dynamic Image - Shows the actual leaf scanned */}
      <Image 
        source={{ uri: imageUri }} 
        style={styles.headerImage} 
      />

      <View style={styles.card}>
        <View style={styles.checkRow}>
          <Text style={styles.successText}>✓ AI Identification Complete</Text>
        </View>

        {/* 2. Dynamic Title from Python/CSV */}
        <Text style={styles.title}>{name || "Processing..."}</Text>

        <View style={styles.badgeContainer}>
          <View style={styles.badge}><Text style={styles.badgeText}>Plant Disease</Text></View>
          <View style={styles.badge}><Text style={styles.badgeText}>AI Verified</Text></View>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.sectionTitle}>Description</Text>
          <Text style={styles.bodyText}>{desc}</Text>

          <Text style={[styles.sectionTitle, { marginTop: 20 }]}>Treatment & Possible Steps</Text>
          <Text style={styles.bodyText}>{steps}</Text>

          <TouchableOpacity 
            style={styles.scanAgainButton} 
            onPress={() => router.replace('/scan')}
          >
            <Text style={styles.scanText}>Scan Another Leaf</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#064E3B' },
  headerImage: { width: '100%', height: '45%', position: 'absolute', top: 0 },
  card: {
    marginTop: '80%', 
    flex: 1,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -10 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 20,
  },
  checkRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  successText: { color: '#10B981', fontWeight: 'bold', fontSize: 14 },
  title: { fontSize: 26, fontWeight: 'bold', color: '#111827', marginBottom: 10 },
  badgeContainer: { flexDirection: 'row', marginBottom: 20 },
  badge: { backgroundColor: '#ECFDF5', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 20, marginRight: 8 },
  badgeText: { color: '#059669', fontSize: 12, fontWeight: '600' },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#374151' },
  bodyText: { fontSize: 16, color: '#4B5563', lineHeight: 24, marginTop: 8 },
  scanAgainButton: {
    backgroundColor: '#10B981',
    padding: 18,
    borderRadius: 15,
    alignItems: 'center',
    marginVertical: 30
  },
  scanText: { color: '#FFF', fontWeight: 'bold', fontSize: 16 }
});

export default ResultScreen;