import { FC, SyntheticEvent } from 'react';

import useAccordionClick from './useAccordionClick';
import useAccordionContext from './useAccordionContext';

type AccordionItemProps = {
  title: string;
  itemKey: number | string;
  onClick?: (e: SyntheticEvent) => void;
};

const AccordionItem: FC<AccordionItemProps> = ({
  title,
  children,
  itemKey,
  onClick,
  ...rest
}) => {
  const { expandedKeys, disabled } = useAccordionContext();
  const accordionClick = useAccordionClick(itemKey, onClick, disabled);
  const expanded = expandedKeys?.includes(itemKey);

  return (
    <div>
      <div
        onClick={accordionClick}
        onKeyDown={accordionClick}
        role="button"
        tabIndex={0}
        aria-expanded={expanded}
        {...rest}
      >
        <h5>{title}</h5>
      </div>
      {expanded && <div>{children}</div>}
    </div>
  );
};

export default AccordionItem;
