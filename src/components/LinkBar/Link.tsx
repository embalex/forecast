import * as React from 'react';

import { Icon } from '../../icons';
import { LinkWrapper, LinkTextWrapper } from './styled';

export interface ILink {
  caption: string;
  link: string;
}

export const Link: React.FC<ILink> = ({ caption, link }) => (
  <LinkWrapper>
    <a href={link}>
      <Icon.ExternalLink width={10} height={10} fill="#8c8d92" />
      <LinkTextWrapper>
        {caption}
      </LinkTextWrapper>
    </a>
  </LinkWrapper>
);
