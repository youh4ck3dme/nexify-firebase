import React, { AnchorHTMLAttributes } from 'react';

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
}

const Link: React.FC<LinkProps> = ({ href, children, ...props }) => {
  // By using a standard <a> tag with a hash-based href, we let the browser
  // handle the navigation natively. This triggers the 'hashchange' event,
  // which our Router listens to. This approach avoids `history.pushState`
  // entirely, thus fixing the SecurityError in sandboxed environments.
  return (
    <a href={href} {...props}>
      {children}
    </a>
  );
};

export default Link;