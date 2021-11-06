import { useContext } from 'react';

import AccordionContext, { AccordionContextProps } from './AccordionContext';

const useAccordionContext = (): Partial<AccordionContextProps> => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error(
      'Accordion components are compound component. Must be used inside Accordion.'
    );
  }
  return context;
};

export default useAccordionContext;
