import { initializeApp } from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyCEuksLpaykaHmM9a_4aaGG99WqYvYjNiM',
    authDomain: 'dev-journey-b73f3.firebaseapp.com',
    projectId: 'dev-journey-b73f3',
    storageBucket: 'dev-journey-b73f3.appspot.com',
    messagingSenderId: '439920452849',
    appId: '1:439920452849:web:29472422a4a9982f423550',
    measurementId: 'G-XTJHX5E9WB',
};

const app = initializeApp(firebaseConfig);

export default app;
