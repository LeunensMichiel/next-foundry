import Image, { ImageProps } from 'next/image';
import cn from 'classnames';

import { CSSProperties, useMemo } from 'react';
import styles from './ImageWithAspectRatio.module.scss';

type Props = Omit<ImageProps, 'width' | 'height'> & {
  aspectRatio: string;
};

const ImageWithAspectRatio = ({ aspectRatio, ...rest }: Props) => {
  const [width, height] = aspectRatio.split('/');

  const containerStyle: CSSProperties = {
    paddingTop: `${100 / (Number(width) / Number(height))}%` || 0,
  };

  return (
    <div className={cn(styles.imgContainer)} style={containerStyle}>
      <Image layout="fill" {...rest} />
    </div>
  );
};

export default ImageWithAspectRatio;
