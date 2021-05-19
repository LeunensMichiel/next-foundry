import NavItem from '@components/common/Navbar/NavItem';
import { LinkProps } from 'next/link';
import { AnchorHTMLAttributes, ReactNode } from 'react';

type DropdownMenuItemProps = {
  label: string | ReactNode;
  internalLink?: LinkProps;
  externalLink?: AnchorHTMLAttributes<HTMLAnchorElement>;
};

const DropdownMenuItem = ({
  label,
  internalLink,
  externalLink,
}: DropdownMenuItemProps) => {
  if (externalLink) {
    return (
      <li>
        <a {...externalLink}>{label}</a>
      </li>
    );
  }
  if (internalLink) {
    return <NavItem label={label} link={internalLink} role="tab" />;
  }

  return <div>{label}</div>;
};

export default DropdownMenuItem;
