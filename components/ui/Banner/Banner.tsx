import { Cross } from '@components/icons';
import { Button } from '@components/ui';
import cn from 'classnames';
import { ComponentPropsWithoutRef, FC, ReactNode } from 'react';

import styles from './Banner.module.scss';

type BannerProps = {
  className?: string;
  bodyClassName?: string;
  actionRowClassName?: string;
  title: string;
  description?: string;
  open?: boolean;
  confirmTitle?: string;
  position?: 'top' | 'bottom';
  relativeTo?: 'viewport' | 'parent';
  floating?: boolean;
  icon?: ComponentPropsWithoutRef<'svg'> | string;
  customBody?: ReactNode;
  customAction?: ReactNode;
  onClickDismissiveAction?(): void;
  onClickConfirmingAction?(): void;
};

const Banner: FC<BannerProps> = ({
  actionRowClassName,
  className,
  bodyClassName,
  customAction,
  customBody,
  confirmTitle,
  description,
  onClickConfirmingAction,
  onClickDismissiveAction,
  title,
  icon,
  floating = true,
  position = 'bottom',
  open = false,
  relativeTo = 'viewport',
}) => (
  <>
    {open && (
      <div
        className={cn(
          styles.banner,
          {
            [styles[`banner-${position}`]]: position,
            [styles[`banner-${relativeTo}`]]: relativeTo,
            [styles.floating]: floating,
          },
          className
        )}
        aria-labelledby="Cookies"
        aria-hidden={!open}
        role="alert"
      >
        <div className={cn(styles.bannerContainer, 'container', 'mx-auto')}>
          {onClickDismissiveAction && (
            <Button
              onClick={onClickDismissiveAction}
              iconLeft={<Cross />}
              minimal
              contrasted
              size="sm"
              type="button"
              data-dismiss="modal"
              aria-label="Close"
              className={cn(styles.closeButton)}
            />
          )}
          {icon && <span className={cn(styles.bannerIcon)}>{icon}</span>}
          {customBody || (
            <div className={cn(styles.bannerBody, bodyClassName)}>
              {title && <span className={cn(styles.title)}>{title}</span>}
              {description && <p>{description}</p>}
            </div>
          )}
          <div className={cn(styles.actionRow, actionRowClassName)}>
            {customAction ||
              (onClickConfirmingAction && (
                <Button
                  type="button"
                  size="sm"
                  variant="primary"
                  onClick={onClickConfirmingAction}
                >
                  {confirmTitle}
                </Button>
              ))}
          </div>
        </div>
      </div>
    )}
  </>
);

export default Banner;
