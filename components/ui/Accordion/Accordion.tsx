import { FC, forwardRef, useCallback, useMemo, useState } from 'react';

import AccordionContext from './AccordionContext';

type AccordionProps = {
  children: NonNullable<React.ReactNode>;
  className?: string;
  disabled?: boolean;
  defaultExpanded?: number | string;
  onToggle?: (expandedKey: number | string | null) => void;
};

const Accordion: FC<AccordionProps> = forwardRef<
  HTMLDivElement,
  AccordionProps
>(
  (
    {
      className,
      defaultExpanded = null,
      disabled = false,
      onToggle,
      children,
      ...rest
    },
    ref
  ) => {
    const [expandedKey, setExpandedKey] = useState(defaultExpanded);

    const handleToggle = useCallback(
      (eventKey: number | string | null) => {
        onToggle?.(eventKey);
        setExpandedKey(eventKey);
      },
      [onToggle]
    );

    const contextValue = useMemo(
      () => ({ expandedKey, disabled, onToggle: handleToggle }),
      [expandedKey, disabled, handleToggle]
    );

    return (
      <AccordionContext.Provider value={contextValue}>
        <div role="region" ref={ref} {...rest}>
          {children}
        </div>
      </AccordionContext.Provider>
    );
  }
);

export default Accordion;
