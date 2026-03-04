# 🌿 PlantExpertAI

PlantExpertAI is a mobile application built with **Expo (React Native)** that allows users to scan plant leaves and automatically identify possible diseases using an AI-powered backend. The app provides disease names, descriptions, and recommended steps for treatment or prevention.

---

## 🚀 Features

* 📸 **Leaf Scanning** – Capture a photo using the camera or select one from the gallery
* 🤖 **AI Disease Detection** – Sends images to an AI backend for analysis
* 📊 **Instant Results** – Displays disease name, description, and possible steps
* 🧠 **State Management** – Uses Zustand for global scan result storage
* 🎨 **Modern UI** – Gradient backgrounds and custom scanner overlay
* 🔀 **File-based Navigation** – Powered by Expo Router

---

## 🧱 Tech Stack

* **Frontend:** React Native, Expo, Expo Router
* **State Management:** Zustand
* **Networking:** Axios
* **Image Handling:** Expo Image Picker
* **Styling:** React Native StyleSheet, Expo Linear Gradient
* **Backend:** AI model exposed via REST API (e.g. FastAPI + ngrok)

---

## 📁 Project Structure

```
.
├── app/
│   ├── _layout.tsx        # App navigation layout (Expo Router)
│   ├── index.tsx          # Entry point (Welcome screen)
│   ├── scan.tsx           # Scan page
│   └── result.tsx         # Result page
│
├── src/
│   ├── screens/
│   │   ├── WelcomeScreen.tsx
│   │   ├── ScanScreen.tsx
│   │   └── ResultScreen.tsx
│   │
│   ├── components/
│   │   └── ScannerOverlay.tsx
│   │
│   └── services/
│       └── api.ts         # AI API integration
│
├── store/
│   └── usePlantStore.ts   # Zustand store
│
├── assets/
│   └── images/
│       └── scan.png
│
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/plantexpertai.git
cd plantexpertai
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Start the Expo server

```bash
npm start
```

You can also run:

```bash
npm run android
npm run ios
npm run web
```

---

## 🔌 Backend Configuration

The app communicates with an AI server via REST API.

Update the `BASE_URL` in:

```
src/services/api.ts
```

```ts
const BASE_URL = 'https://your-ngrok-url.ngrok-free.app';
```

### API Endpoint

* **POST** `/predict`
* **Payload:** multipart/form-data with image file
* **Response:**

```json
{
  "disease_name": "Leaf Blight",
  "description": "A fungal disease affecting leaves.",
  "Possible Steps": "Apply fungicide and remove infected leaves."
}
```

---

## 🧠 State Management (Zustand)

Scan results are stored globally using Zustand:

```ts
usePlantStore.getState().scanData
```

This allows seamless navigation from scan → result screen without prop drilling.

---

## 🖼️ Permissions

The app requests:

* 📷 Camera access
* 🖼️ Media library access

Permissions are handled using `expo-image-picker`.

---

## 🧪 Error Handling

* Network timeouts (10 seconds)
* Server unavailability
* Permission denial alerts
* Loading spinner during AI processing

---

## 📌 Future Improvements

* 🌱 Plant type classification
* 📴 Offline mode
* 🧾 Scan history
* 🌍 Multi-language support
* 📊 Confidence scores for predictions

---

## 👨‍💻 Author

Built with ❤️ using Expo & AI.

---

## 📄 License

This project is private and intended for academic / research use.
Add a license if you plan to distribute publicly.

---

**Happy Scanning 🌿🤖**
