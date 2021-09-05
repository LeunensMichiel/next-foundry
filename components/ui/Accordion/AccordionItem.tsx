import { Chevron } from '@components/icons';
import cx from 'classnames';
import { FC, SyntheticEvent } from 'react';

import styles from './AccordionItem.module.scss';
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
    <div
      className={cx(styles.root, {
        [styles.expanded]: expanded,
        [styles.disabled]: disabled,
      })}
      aria-expanded={expanded}
    >
      <div
        onClick={accordionClick}
        onKeyDown={accordionClick}
        role="button"
        tabIndex={0}
        className={cx(styles.header)}
        aria-pressed={expanded}
        {...rest}
      >
        <span className={cx(styles.title)}>{title}</span>
        <Chevron />
      </div>
      {expanded && <div className={cx(styles.body)}>{children}</div>}
    </div>
  );
};

export default AccordionItem;
