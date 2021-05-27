import cn from 'classnames';
import Image, { ImageProps } from 'next/image';
import { CSSProperties, FC } from 'react';

import styles from './ImageWithAspectRatio.module.scss';

type Props = Omit<
  ImageProps,
  'width' | 'height' | 'blurDataURL' | 'placeholder'
> & {
  aspectRatio: string;
  wrapperClassName?: string;
};

const ImageWithAspectRatio: FC<Props> = ({
  aspectRatio,
  src,
  objectFit = 'cover',
  objectPosition = '50% 50%',
  wrapperClassName,
  ...rest
}) => {
  const [width, height] = aspectRatio.split('/');

  const containerStyle: CSSProperties = {
    paddingTop: `${100 / (Number(width) / Number(height))}%` || 0,
  };

  return (
    <div
      className={cn(styles.imgContainer, wrapperClassName)}
      style={containerStyle}
    >
      <Image
        layout="fill"
        src={src}
        objectFit={objectFit}
        objectPosition={objectPosition}
        {...rest}
      />
    </div>
  );
};

export default ImageWithAspectRatio;
