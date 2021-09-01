import cn from 'classnames';
import { FC, forwardRef, useCallback, useMemo, useState } from 'react';

import styles from './Accordion.module.scss';
import AccordionContext from './AccordionContext';

type AccordionProps = {
  children: NonNullable<React.ReactNode>;
  className?: string;
  disabled?: boolean;
  grouped?: boolean;
  defaultExpanded?: (string | number)[];
  onToggle?: (expandedKeys: (string | number)[]) => void;
};

const Accordion: FC<AccordionProps> = forwardRef<
  HTMLDivElement,
  AccordionProps
>(
  (
    {
      className,
      defaultExpanded = [],
      grouped = false,
      disabled = false,
      onToggle,
      children,
      ...rest
    },
    ref
  ) => {
    const [expandedKeys, setExpandedKeys] = useState(defaultExpanded);

    const handleToggle = useCallback(
      (itemKey: number | string) => {
        let itemKeys: (string | number)[];
        if (grouped) {
          itemKeys = expandedKeys.includes(itemKey) ? [] : [itemKey];
        } else if (expandedKeys.includes(itemKey)) {
          itemKeys = expandedKeys.filter((key) => key !== itemKey);
        } else {
          itemKeys = expandedKeys;
          itemKeys.push(itemKey);
        }
        onToggle?.(itemKeys);
        setExpandedKeys([...itemKeys]);
      },
      [expandedKeys, grouped, onToggle]
    );

    const contextValue = useMemo(
      () => ({ expandedKeys, disabled, onToggle: handleToggle }),
      [expandedKeys, disabled, handleToggle]
    );

    return (
      <AccordionContext.Provider value={contextValue}>
        <div
          className={cn(styles.accordion, className)}
          role="region"
          ref={ref}
          {...rest}
        >
          {children}
        </div>
      </AccordionContext.Provider>
    );
  }
);

Accordion.displayName = 'Accordion';

export default Accordion;
