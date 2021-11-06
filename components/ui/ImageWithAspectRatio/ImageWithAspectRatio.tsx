import cn from 'classnames';
import Image, { ImageProps } from 'next/image';
import { CSSProperties, VFC } from 'react';

import styles from './ImageWithAspectRatio.module.scss';

type Props = Omit<ImageProps, 'width' | 'height'> & {
  aspectRatio: string;
  wrapperClassName?: string;
  alt: string;
};

const ImageWithAspectRatio: VFC<Props> = ({
  aspectRatio,
  src,
  objectFit = 'cover',
  objectPosition = '50% 50%',
  wrapperClassName,
  alt,
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
        alt={alt}
        {...rest}
      />
    </div>
  );
};

export default ImageWithAspectRatio;
