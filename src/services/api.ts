import axios from 'axios';

// Update interface to match your Python/CSV keys exactly
export interface PlantDiseaseResponse {
  disease_name: string;      // From your CSV
  description: string;       // From your CSV
  "Possible Steps": string;  // From your CSV
}

// Replace with your local IP address for physical devices
// or 10.0.2.2 for Android Emulator
const BASE_URL = 'https://935d-102-89-69-218.ngrok-free.app'; 

export const identifyPlantDisease = async (
  uri: string, 
  type: string = 'image/jpeg', 
  fileName: string = 'leaf_scan.jpg'
): Promise<PlantDiseaseResponse> => {
  
  const formData = new FormData();
  
  // TypeScript hack for React Native FormData
  formData.append('file', {
    uri: uri,
    type: type,
    name: fileName,
  } as any);

  try {
    const response = await axios.post<PlantDiseaseResponse>(
      `${BASE_URL}/predict`, 
      formData, 
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        timeout: 10000, // 10 second timeout for AI processing
      }
    );
    
    return response.data;
  } catch (error) {
      if (axios.isAxiosError(error)) {
        // Check if the server responded at all
        if (error.response) {
          console.log("Server Error Data:", error.response.data);
        } else if (error.request) {
          // The request was made but no response was received
          console.log("No response received. Check IP and Firewall.");
        } else {
          console.log("Setup Error:", error.message);
        }

      }

      throw new Error("AI Server is not responding. Please check your connection and try again.");
    }
};