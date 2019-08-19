import * as React from 'react';

import { Link, ILink } from './Link';

import { LinkBarWrapper } from './styled';

interface IProps {
  links: ILink[];
}

export const LinkBar: React.FC<IProps> = ({ links }) => {
  const renderedLinks = links.map(linkInfo => <Link key={linkInfo.caption} {...linkInfo} />);

  return (
    <LinkBarWrapper>
      {renderedLinks}
    </LinkBarWrapper>
  )
};
