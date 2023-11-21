import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyBmvo0G1R5Nfva2-IIxU8FPBMC5UoE5l_Y",
    authDomain: "crafthaven-7a324.firebaseapp.com",
    projectId: "crafthaven-7a324",
    storageBucket: "crafthaven-7a324.appspot.com",
    messagingSenderId: "433361592243",
    appId: "1:433361592243:web:d1e694c5125591367775c6",
    measurementId: "G-TYEXTN0S27",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
