import { VFC } from 'react';
import ContentLoader from 'react-content-loader';

import { CommonSkeletonInlineProps, CommonSkeletonProps } from './commonProps';

const ResponsiveArticle: VFC<CommonSkeletonProps> = (props) => (
  <ContentLoader
    viewBox="0 0 500 280"
    height={280}
    width={500}
    {...CommonSkeletonInlineProps}
    {...props}
  >
    <rect x="3" y="3" rx="10" ry="10" width="100%" height="180" />
    <rect x="6" y="190" rx="0" ry="0" width="95%" height="20" />
    <rect x="4" y="215" rx="0" ry="0" width="80%" height="20" />
    <rect x="4" y="242" rx="0" ry="0" width="90%" height="20" />
  </ContentLoader>
);

export default ResponsiveArticle;
