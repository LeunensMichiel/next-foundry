import { RefObject } from 'react';
import scrollIntoView from 'scroll-into-view-if-needed';

const useSmoothScrollIntoView = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>
): { smoothScrollIntoView: () => void } => {
  const smoothScrollIntoView = () => {
    if (ref?.current) {
      scrollIntoView(ref.current, {
        scrollMode: 'always',
        behavior: 'smooth',
        block: 'start',
        inline: 'start',
      });
    }
  };

  return { smoothScrollIntoView };
};

export default useSmoothScrollIntoView;
