import { SyntheticEvent } from 'react';

import useAccordionContext from './useAccordionContext';

const useAccordionClick = (
  itemKey: number | string,
  onClick?: (e: SyntheticEvent) => void,
  disabled?: boolean
): ((event: unknown) => void) | undefined => {
  const { onToggle } = useAccordionContext();
  if (disabled) return;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (event: any) => {
    if (
      event.type === 'keydown' &&
      event.key !== 'Enter' &&
      event.key !== 'Spacebar' &&
      event.key !== ' '
    ) {
      return;
    }
    onToggle?.(itemKey);
    onClick?.(event);
  };
};

export default useAccordionClick;
