import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebaseKey';

import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const myApp = initializeApp(firebaseConfig);
const auth = getAuth(myApp);
const firestore = getFirestore(myApp);

export { auth, firestore };
