'use client';

import { Provider } from 'react-redux';
import React, { ReactNode, useEffect, useState } from 'react';
import { persistor, store } from '../store';
import { PersistGate } from 'redux-persist/integration/react';

type ProviderType = {
  children: ReactNode;
};

export function Providers({ children }: ProviderType) {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Provider store={store}>
      {persistor ? (
        <PersistGate loading={null} persistor={persistor}>
          {children}
        </PersistGate>
      ) : (
        children
      )}
    </Provider>
  );
}
