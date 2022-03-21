import { CloseButton } from '@components/common';
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
            'container-page': floating,
          },
          className
        )}
        aria-labelledby="Cookies"
        aria-hidden={!open}
        role="alert"
      >
        <CloseButton
          onClick={onClickDismissiveAction}
          variant="minimal-bright"
          className={cn(styles.closeButton)}
        />
        <div className={cn(styles.bannerContainer)}>
          {icon && <span className={cn(styles.bannerIcon)}>{icon}</span>}
          <div className={cn(styles.bannerBody, bodyClassName)}>
            {customBody || (
              <div>
                {title && <span className={cn(styles.title)}>{title}</span>}
                {description && <p>{description}</p>}
              </div>
            )}
            {(customAction || onClickConfirmingAction) && (
              <div className={cn(styles.actionRow, actionRowClassName)}>
                {onClickConfirmingAction && (
                  <Button
                    type="button"
                    size="sm"
                    variant="transparent"
                    outlined
                    onClick={onClickConfirmingAction}
                  >
                    {confirmTitle}
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    )}
  </>
);

export default Banner;
