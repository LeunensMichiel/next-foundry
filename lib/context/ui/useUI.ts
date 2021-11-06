import { UIContext } from '@lib/context/ui/UIContext';
import { useContext } from 'react';

const useUI = () => {
  const context = useContext(UIContext);
  if (context === undefined) {
    throw new Error(`useUI must be used within a UIProvider`);
  }
  return context;
};

export default useUI;
