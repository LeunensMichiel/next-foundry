import { UIContext } from '@lib/context/UIContext';
import { useContext } from 'react';

export const useUI = () => {
  const context = useContext(UIContext);
  if (context === undefined) {
    throw new Error(`useUI must be used within a UIProvider`);
  }
  return context;
};
