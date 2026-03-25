'use client';

import React, { useMemo } from 'react';
import { initializeFirebase } from './index';
import { FirebaseProvider } from './provider';

export function FirebaseClientProvider({ children }: { children: React.ReactNode }) {
  // Always initialize, even if it returns nulls on server.
  // The result is memoized to prevent re-initialization on every render.
  const firebase = useMemo(() => initializeFirebase(), []);

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
