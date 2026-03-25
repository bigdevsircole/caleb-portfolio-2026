'use client';

import React, { useMemo } from 'react';
import { initializeFirebase } from './index';
import { FirebaseProvider } from './provider';

export function FirebaseClientProvider({ children }: { children: React.ReactNode }) {
  // Always initialize, even if it returns nulls on server.
  // The result is memoized to prevent re-initialization on every render.
  const firebase = useMemo(() => {
    try {
      return initializeFirebase();
    } catch (e) {
      // Prevent initialization errors from breaking the entire render tree
      return { app: null, firestore: null, auth: null };
    }
  }, []);

  return (
    <FirebaseProvider 
      app={firebase.app} 
      firestore={firebase.firestore} 
      auth={firebase.auth}
    >
      {children}
    </FirebaseProvider>
  );
}
