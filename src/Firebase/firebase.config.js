
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyCkwVvVMN3Ypt5lNxbOCbMMtnDrOesNNw0",
  authDomain: "task-management-ed674.firebaseapp.com",
  projectId: "task-management-ed674",
  storageBucket: "task-management-ed674.appspot.com",
  messagingSenderId: "857142695124",
  appId: "1:857142695124:web:ce0a2f970092bc55ee5741"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;