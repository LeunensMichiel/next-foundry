import { useEffect, useState } from 'react';

// https://usehooks-typescript.com/react-hook/use-is-client
function useIsClient(): boolean {
  const [isClient, setClient] = useState(false);

  useEffect(() => {
    setClient(true);
  }, []);

  return isClient;
}

export default useIsClient;
