import { createPopper, Options } from '@popperjs/core';
import cn from 'classnames';
import {
  Children,
  cloneElement,
  FC,
  isValidElement,
  ReactNode,
  useMemo,
  useRef,
  useState,
} from 'react';
import { Modifier, usePopper } from 'react-popper';

import s from './Tooltip.module.scss';

type Props = {
  text: string;
  children: ReactNode;
};

const Tooltip: FC<Props> = ({ text, children }) => {
  const popperRef = useRef(null);
  const tooltipRef = useRef(null);
  const [arrowRef, setArrowRef] = useState<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const popperOptions: Omit<Partial<Options>, 'modifiers'> & {
    createPopper?: typeof createPopper;
    modifiers?: ReadonlyArray<Modifier<any>>;
  } = useMemo(
    () => ({
      placement: 'auto',
      strategy: 'absolute',
      modifiers: [
        {
          name: 'arrow',
          options: {
            element: arrowRef,
            padding: 8,
          },
        },
        {
          name: 'offset',
          options: {
            offset: [0, 8],
          },
        },
      ],
    }),
    [arrowRef]
  );

  const { styles, attributes } = usePopper(
    tooltipRef.current,
    popperRef.current,
    popperOptions
  );

  return (
    <>
      {Children.map(
        children,
        (child) =>
          isValidElement(child) &&
          cloneElement(child, {
            onMouseEnter: () => setIsVisible(true),
            onMouseLeave: () => setIsVisible(false),
            ref: tooltipRef,
          })
      )}
      {isVisible && (
        <div
          ref={popperRef}
          style={styles.popper}
          className={cn(s.tooltip)}
          {...attributes.popper}
        >
          <div ref={setArrowRef} style={styles.arrow} className={cn(s.arrow)} />
          <p>{text}</p>
        </div>
      )}
    </>
  );
};
export default Tooltip;
