
'use client';

import React, { useMemo } from 'react';
import { initializeFirebase } from './index';
import { FirebaseProvider } from './provider';

export function FirebaseClientProvider({ children }: { children: React.ReactNode }) {
  const { app, firestore, auth } = useMemo(() => initializeFirebase(), []);

  if (!app || !firestore || !auth) return null;

  return (
    <FirebaseProvider app={app} firestore={firestore} auth={auth}>
      {children}
    </FirebaseProvider>
  );
}
