
'use client';

import { useEffect } from 'react';
import { errorEmitter } from '@/firebase/error-emitter';
import { useToast } from '@/hooks/use-toast';

export function FirebaseErrorListener() {
  const { toast } = useToast();

  useEffect(() => {
    errorEmitter.on('permission-error', (error) => {
      toast({
        variant: 'destructive',
        title: 'Database Permission Error',
        description: error.message,
      });
    });
  }, [toast]);

  return null;
}
