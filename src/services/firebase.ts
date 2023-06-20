import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAkZKi2rwoPV2CDCIKiCqWDlgZfX5iq6QA',
  authDomain: 'react--auth-11da8.firebaseapp.com',
  projectId: 'react--auth-11da8',
  storageBucket: 'react--auth-11da8.appspot.com',
  messagingSenderId: '144912403491',
  appId: '1:144912403491:web:79afe96abe9fed0198b596'
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
