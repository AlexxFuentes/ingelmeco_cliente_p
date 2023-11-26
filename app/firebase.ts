import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDirHONTWJJieYaQGpr5zL2MuULuVxwGNg",
  authDomain: "ingelmeco-web-app.firebaseapp.com",
  projectId: "ingelmeco-web-app",
  storageBucket: "ingelmeco-web-app.appspot.com",
  messagingSenderId: "263982003944",
  appId: "1:263982003944:web:707fc70daf1520f9c6fb5d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
