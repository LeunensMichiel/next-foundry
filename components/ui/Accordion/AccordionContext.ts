import { createContext } from 'react';

type ContextProps = {
  expandedKeys: (number | string)[];
  onToggle: (eventKey: number | string) => void;
  disabled: boolean;
};

const AccordionContext = createContext<Partial<ContextProps>>({});

export default AccordionContext;
