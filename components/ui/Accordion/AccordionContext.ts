import { createContext } from 'react';

export type AccordionContextProps = {
  expandedKeys: (number | string)[];
  onToggle: (eventKey: number | string) => void;
  disabled: boolean;
};

const AccordionContext = createContext<Partial<AccordionContextProps>>({});

export default AccordionContext;
