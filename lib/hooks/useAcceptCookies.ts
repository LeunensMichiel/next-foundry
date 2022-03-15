import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';

const COOKIE_NAME = 'accept_cookies';

function useAcceptCookies(): {
  acceptedCookies: boolean;
  deniedCookies: boolean;
  onAcceptCookies: (isAccepted: boolean) => void;
  shouldAskForCookies: boolean;
} {
  const [cookies, setCookie] = useCookies([COOKIE_NAME]);
  const [acceptedCookies, setAcceptedCookies] = useState<boolean>(false);
  const [deniedCookies, setDeniedCookies] = useState<boolean>(false);

  useEffect(() => {
    const cookie = cookies[COOKIE_NAME];
    if (cookie === 'accepted') {
      setAcceptedCookies(true);
    } else if (cookie === 'denied') {
      setDeniedCookies(true);
    }
  }, [cookies]);

  const handleAcceptCookies = (isAccepted: boolean) => {
    if (isAccepted) {
      // Expire after 6 months
      setCookie(COOKIE_NAME, 'accepted', { maxAge: 15778463 });
    } else {
      setCookie(COOKIE_NAME, 'denied', { maxAge: 15778463 });
    }
  };

  return {
    acceptedCookies,
    deniedCookies,
    onAcceptCookies: handleAcceptCookies,
    shouldAskForCookies: !acceptedCookies && !deniedCookies,
  };
}

export default useAcceptCookies;
