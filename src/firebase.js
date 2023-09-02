import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
	apiKey: "AIzaSyDg5bqZbnlx5RxMZi44HDtNcrRnrrE9uqA",
	authDomain: "gulat-arena.firebaseapp.com",
	databaseURL: "https://gulat-arena-default-rtdb.asia-southeast1.firebasedatabase.app",
	projectId: "gulat-arena",
	storageBucket: "gulat-arena.appspot.com",
	messagingSenderId: "252558550776",
	appId: "1:252558550776:web:638936fae3411f0913bd0d",
	measurementId: "G-386HDYG2KE"
  };

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
