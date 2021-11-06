import { useEffect, useState } from 'react';

// https://usehooks-typescript.com/react-hook/use-screen
function useScreen(): Screen | undefined {
  const getScreen = () => {
    if (typeof window !== 'undefined') {
      return window.screen;
    }
    return undefined;
  };

  const [screen, setScreen] = useState<Screen | undefined>(getScreen());

  useEffect(() => {
    function handleResize() {
      setScreen(getScreen());
    }

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return screen;
}

export default useScreen;
