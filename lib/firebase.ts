import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBcsj_rNtHJkg0VWqr-ffqtnQrD-kRmde8",
  authDomain: "real-estate-fa2fb.firebaseapp.com",
  projectId: "real-estate-fa2fb",
  storageBucket: "real-estate-fa2fb.firebasestorage.app",
  messagingSenderId: "395906059943",
  appId: "1:395906059943:web:21947f3270e5204c64d582",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);