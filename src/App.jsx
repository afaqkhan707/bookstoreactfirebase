import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { useDispatch } from 'react-redux';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { handleSignInWithGoogle, setUser } from './redux/slices/authSlice';
import { auth } from '../src/firebase/firebaseConfig';

const App = () => {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const googleProvider = new GoogleAuthProvider();
  // const[email,setEmail]=useState()

  // const handleSignInWithGoogle = async () => {
  //   try {
  //     const result = await signInWithPopup(auth, googleProvider);
  //     const user = result.user;
  //     console.log(user, 'new User');
  //     dispatch(setUser(user));
  //   } catch (error) {
  //     console.error('Error signing in with Google:', error);
  //   }
  // };

  // dispatch(handleSignInWithGoogle) 

  return (
    <>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={handleSignInWithGoogle}>Signin</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
};

export default App;
