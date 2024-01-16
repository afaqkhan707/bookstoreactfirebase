// firebaseSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from 'firebase/auth';
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  query,
  where,
} from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
// import { createSlice, createAsyncThunk } from 'redux/toolkit';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

const googleProvider = new GoogleAuthProvider();

// Async Thunk for signing in with Google
export const signInWithGoogle = createAsyncThunk(
  'firebase/signInWithGoogle',
  async (_, { dispatch }) => {
    try {
      const result = await signInWithPopup(firebaseAuth, googleProvider);
      const { user } = result;
      dispatch(setUser(user));
      return user;
    } catch (error) {
      console.error('Error signing in with Google:', error);
      throw error;
    }
  }
);

// Async Thunk for creating a new user with email and password
export const signUpWithEmailAndPass = createAsyncThunk(
  'firebase/signUpWithEmailAndPass',
  async ({ email, password }, { dispatch }) => {
    try {
      const result = await createUserWithEmailAndPassword(
        firebaseAuth,
        email,
        password
      );
      const { user } = result;
      dispatch(setUser(user));
      return user;
    } catch (error) {
      console.error('Error signing up:', error);
      throw error;
    }
  }
);

// Async Thunk for signing in with email and password
export const signInWithEmailAndPass = createAsyncThunk(
  'firebase/signInWithEmailAndPass',
  async ({ email, password }, { dispatch }) => {
    try {
      const result = await signInWithEmailAndPassword(
        firebaseAuth,
        email,
        password
      );
      const { user } = result;
      dispatch(setUser(user));
      return user;
    } catch (error) {
      console.error('Error signing in:', error);
      throw error;
    }
  }
);

const firebaseSlice = createSlice({
  name: 'firebase',
  initialState: {},
  reducers: {
    // You can add more synchronous actions here if needed
  },
  extraReducers: (builder) => {
    // Handle the success case for signInWithGoogle, signUpWithEmailAndPass, signInWithEmailAndPass
    builder.addCase(signInWithGoogle.fulfilled, (state, action) => {
      // Handle additional state changes or side effects after successful login
    });
    builder.addCase(signUpWithEmailAndPass.fulfilled, (state, action) => {
      // Handle additional state changes or side effects after successful sign up
    });
    builder.addCase(signInWithEmailAndPass.fulfilled, (state, action) => {
      // Handle additional state changes or side effects after successful login
    });

    // Handle the error case for all async thunks
    builder.addCase(
      [
        signInWithGoogle.rejected,
        signUpWithEmailAndPass.rejected,
        signInWithEmailAndPass.rejected,
      ],
      (state, action) => {
        // Handle errors, e.g., show an error message to the user
      }
    );
  },
});

export const {
  /* Synchronous actions go here */
} = firebaseSlice.actions;
export default firebaseSlice.reducer;
