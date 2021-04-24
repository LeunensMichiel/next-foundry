import { Cross } from '@components/icons';
import { Button } from '@components/ui';
import Portal from '@reach/portal';
import {
  clearAllBodyScrollLocks,
  disableBodyScroll,
  enableBodyScroll,
} from 'body-scroll-lock';
import cn from 'classnames';
import {
  FC,
  MutableRefObject,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
} from 'react';

import styles from './Modal.module.scss';

type Props = {
  className?: string;
  children?: ReactNode;
  open?: boolean;
  title?: string;
  maxWidth?:
    | 'fluid'
    | 'container'
    | 'page'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | 'xxl';
  onClose(): void;
};

const Modal: FC<Props> = ({
  children,
  className,
  maxWidth = 'page',
  onClose,
  open,
  title,
}) => {
  const ref = useRef() as MutableRefObject<HTMLDivElement>;

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (ref.current) {
      if (open) {
        disableBodyScroll(ref.current);
        window.addEventListener('keydown', handleKey);
      } else {
        enableBodyScroll(ref.current);
      }
    }
    return () => {
      window.removeEventListener('keydown', handleKey);
      clearAllBodyScrollLocks();
    };
  }, [open, handleKey]);

  return (
    <Portal>
      {open && (
        <div className={cn(styles.overlay)}>
          <div
            aria-modal
            aria-labelledby={title}
            tabIndex={-1}
            ref={ref}
            role="dialog"
            className={cn(
              styles.modal,
              {
                container: maxWidth === 'container',
                [`container-${maxWidth}`]: maxWidth !== 'container',
              },
              className
            )}
          >
            <header className={cn(styles.modalHeader)}>
              {title && <h4>{title}</h4>}
              <Button
                onClick={() => onClose()}
                iconLeft={<Cross />}
                minimal
                type="button"
                data-dismiss="modal"
                aria-label="Close"
                className={cn(styles.modalCloseButton, {
                  [styles.noTitle]: !title,
                })}
              />
            </header>
            <div className={cn(styles.modalBody)}>{children}</div>
          </div>
        </div>
      )}
    </Portal>
  );
};

export default Modal;
