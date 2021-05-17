import { createContext } from 'react';

type ContextProps = {
  expandedKey: number | string | null;
  onToggle: (eventKey: number | string | null) => void;
  disabled: boolean;
};

const AccordionContext = createContext<Partial<ContextProps>>({});

export default AccordionContext;
