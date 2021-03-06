// See: https://usehooks-typescript.com/react-hook/use-screen
import { useScreen } from '@lib/hooks';

interface WindowSize {
  width: number;
  height: number;
}

function useWindowSize(): WindowSize {
  const screen = useScreen();

  return {
    width: screen?.width || 0,
    height: screen?.height || 0,
  };
}

export default useWindowSize;
