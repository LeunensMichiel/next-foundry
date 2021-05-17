import { SyntheticEvent } from 'react';

import useAccordionContext from './useAccordionContext';

const useAccordionClick = (
  itemKey: number | string,
  onClick?: (e: SyntheticEvent) => void,
  disabled?: boolean
) => {
  const { expandedKey, onToggle } = useAccordionContext();
  if (disabled) return () => {};
  return (event: SyntheticEvent) => {
    onToggle?.(itemKey === expandedKey ? null : itemKey);
    onClick?.(event);
  };
};

export default useAccordionClick;
