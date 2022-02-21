import { useRouter } from 'next/router';
import { useEffect } from 'react';

//https://github.com/vercel/next.js/issues/5136
const useSmoothHashScroll = () => {
  const router = useRouter();

  const setSmoothScroll = (isSmooth: boolean) => {
    document.documentElement.style.scrollBehavior = isSmooth
      ? 'smooth'
      : 'auto';
  };

  useEffect(() => {
    setSmoothScroll(true);
    const handleStart = () => setSmoothScroll(false);
    const handleStop = () => setSmoothScroll(true);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleStop);
    };
  }, [router.events]);
};

export default useSmoothHashScroll;
