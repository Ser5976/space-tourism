'use client';
import { IGlobalContext } from '@/types/types';
import React, { createContext, useState } from 'react';

export const Context = createContext<IGlobalContext>({
  close: true,
  setClose: (): boolean => true,
});

export const GlobalContext = ({ children }: { children: React.ReactNode }) => {
  const [close, setClose] = useState(true);

  return (
    <Context.Provider value={{ close, setClose }}>{children}</Context.Provider>
  );
};
