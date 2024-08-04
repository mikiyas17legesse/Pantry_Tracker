// components/Login.js
'use client'
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from 'firebase/auth';
import { firestore } from '@/firebase';
import { doc, setDoc } from 'firebase/firestore';
import { Button, Box, Typography } from '@mui/material';

export default function Login() {
  const router = useRouter();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      await setDoc(doc(firestore, 'users', user.uid), {
        name: user.displayName,
        email: user.email,
      });
      router.push('/');
    } catch (error) {
      console.error('Error during sign-in:', error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push('/');
      }
    });
    return () => unsubscribe();
  }, [auth, router]);

  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      sx={{ bgcolor: '#e0f7fa' }}
    >
      <Typography variant="h4" gutterBottom>
        Welcome to Pantry Tracker
      </Typography>
      <Button variant="contained" color="primary" onClick={signInWithGoogle}>
        Sign in with Google
      </Button>
    </Box>
  );
}
