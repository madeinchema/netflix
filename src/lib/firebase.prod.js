import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from '../seed';

// we need to somehow seed the database

// we need a config here
const config = {
  apiKey: 'AIzaSyAKbPa0p3FOqx6jX6Wv-wHUREzDrSDP5AM',
  authDomain: 'netflix-f280b.firebaseapp.com',
  databaseURL: 'https://netflix-f280b.firebaseio.com',
  projectId: 'netflix-f280b',
  storageBucket: 'netflix-f280b.appspot.com',
  messagingSenderId: '212232230806',
  appId: '1:212232230806:web:f5c32d9a472bfbd6e6efb7',
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };
