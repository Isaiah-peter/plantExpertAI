import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import * as ImagePicker from 'expo-image-picker'; // Import Expo Image Picker
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import ScannerOverlay from '../components/ScannerOverlay';
import { identifyPlantDisease } from '../services/api'; // Import your API function

const ScanScreen = () => {
  const router = useRouter();
  const [isProcessing, setIsProcessing] = useState(false);
  const [image, setImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Function to handle Image Selection
  const pickImage = async (useCamera: boolean) => {
    // 1. Request Permissions
    const permissionResult = useCamera 
      ? await ImagePicker.requestCameraPermissionsAsync() 
      : await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      Alert.alert("Permission Denied", `You need to allow access to your ${useCamera ? 'camera' : 'photos'} to scan leaves.`);
      return;
    }

    // 2. Launch Camera or Library
    const result = useCamera 
      ? await ImagePicker.launchCameraAsync({ allowsEditing: true, quality: 0.7 })
      : await ImagePicker.launchImageLibraryAsync({ allowsEditing: true, quality: 0.7 });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      uploadImage(result.assets[0].uri); // Upload the image to the AI server        
    }
  };

  // In ScanScreen.tsx
const uploadImage = async (uri: string) => {
  setIsLoading(true); // Start spinner
  try {
    const result = await identifyPlantDisease(uri);
    // Pass the result to the Result screen via Expo Router
    router.push({
      pathname: '/result',
      params: { 
        disease_name: result.disease_name,
        description: result.description,
        steps: result["Possible Steps"]
      }
    });
  } catch (err) {
    Alert.alert("Error", "AI Server is not responding.");
  } finally {
    setIsLoading(false); // Stop spinner
  }
};

  const showOptions = () => {
    Alert.alert(
      "Select Photo",
      "How would you like to scan your leaf?",
      [
        { text: "Take Photo", onPress: () => pickImage(true) },
        { text: "Choose from Gallery", onPress: () => pickImage(false) },
        { text: "Cancel", style: "cancel" }
      ]
    );
  };

  return (
    <LinearGradient colors={['#D1FAE5', '#064E3B']} style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Scan the LEAF and find the Disease..</Text>
        

        <ScannerOverlay />


        {/* The Pulsing Scan Button from image_b70c58.jpg */}
        <TouchableOpacity 
          style={styles.scanButton}
          onPress={showOptions}
          disabled={isLoading}
        >
          {isLoading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <View style={styles.buttonIconFrame}>
               {/* This mimics the icon in your green FAB */}
               <Text style={{ color: '#fff', fontWeight: 'bold' }}>scan</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'space-evenly', 
    paddingHorizontal: 30,
    paddingVertical: 50 
  },
  title: { fontSize: 28, fontWeight: 'bold', color: '#FDE68A', textAlign: 'center' },
  subTitle: { fontSize: 18, color: '#fff', textAlign: 'center', marginVertical: 10 },
  instructions: { fontSize: 16, color: '#FDE68A', textAlign: 'center', opacity: 0.9 },
  scanButton: {
    backgroundColor: '#4ADE80',
    width: 80,
    height: 80,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  buttonIconFrame: {
    width: 40,
    height: 40,
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  innerSquare: {
    width: 20,
    height: 4,
    backgroundColor: '#fff',
    borderRadius: 2
  }
});

export default ScanScreen;