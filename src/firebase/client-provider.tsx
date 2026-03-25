'use client';

import React, { useMemo } from 'react';
import { initializeFirebase } from './index';
import { FirebaseProvider } from './provider';

export function FirebaseClientProvider({ children }: { children: React.ReactNode }) {
  // initializeFirebase handles checking for window internally
  const { app, firestore, auth } = useMemo(() => initializeFirebase(), []);

  // We MUST render the same structure on server and client to avoid hydration mismatch.
  // The hooks (useFirestore, etc.) are designed to handle null values.
  return (
    <FirebaseProvider app={app} firestore={firestore} auth={auth}>
      {children}
    </FirebaseProvider>
  );
}
