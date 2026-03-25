'use client';

import React, { useState, useEffect } from 'react';
import { initializeFirebase } from './index';
import { FirebaseProvider } from './provider';
import { FirebaseApp } from 'firebase/app';
import { Firestore } from 'firebase/firestore';
import { Auth } from 'firebase/auth';

export function FirebaseClientProvider({ children }: { children: React.ReactNode }) {
  const [instances, setInstances] = useState<{
    app: FirebaseApp | null;
    firestore: Firestore | null;
    auth: Auth | null;
  }>({
    app: null,
    firestore: null,
    auth: null,
  });

  useEffect(() => {
    try {
      const initialized = initializeFirebase();
      setInstances(initialized);
    } catch (e) {
      console.error('Firebase initialization failed:', e);
    }
  }, []);

  return (
    <FirebaseProvider 
      app={instances.app} 
      firestore={instances.firestore} 
      auth={instances.auth}
    >
      {children}
    </FirebaseProvider>
  );
}
