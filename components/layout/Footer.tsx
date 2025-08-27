import React from 'react';
import { SITE_CONFIG } from '../../config/site';
import Link from '../../routing/Link';
import type { NavLink as NavLinkType } from '../../types';

const FooterColumn: React.FC<{ title: string; links: NavLinkType[] }> = ({ title, links }) => (
  <div>
    <h4 className="font-bold text-brand-text mb-4 tracking-wider">{title}</h4>
    <ul className="space-y-3">
      {links.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className="text-brand-text-muted hover:text-brand-primary transition-colors duration-300"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);


const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 py-16 px-4 sm:px-8 border-t border-brand-surface bg-brand-bg">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
          <div className="col-span-2 md:col-span-4 lg:col-span-1 pr-8">
             <Link
              href="#/"
              className="text-3xl font-bold tracking-tighter bg-gradient-to-r from-brand-primary to-brand-secondary text-transparent bg-clip-text"
            >
              NEXIFY
            </Link>
            <p className="text-sm mt-4 text-brand-text-muted">
                Digitálne štúdio pre moderný web.
            </p>
          </div>
          {Object.entries(SITE_CONFIG.FOOTER_LINKS).map(([title, links]) => (
            <FooterColumn key={title} title={title} links={links} />
          ))}
        </div>
        <div className="mt-16 pt-8 border-t border-brand-surface text-center text-brand-text-muted text-sm">
             <p>&copy; {SITE_CONFIG.year} {SITE_CONFIG.author}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;