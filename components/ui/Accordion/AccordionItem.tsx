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
  const { expandedKey, disabled } = useAccordionContext();
  const accordionClick = useAccordionClick(itemKey, onClick, disabled);

  return (
    <div>
      <div
        onClick={accordionClick}
        onKeyDown={accordionClick}
        role="button"
        tabIndex={0}
        {...rest}
      >
        <h5>{title}</h5>
      </div>
      {itemKey === expandedKey && <div>{children}</div>}
    </div>
  );
};

export default AccordionItem;
