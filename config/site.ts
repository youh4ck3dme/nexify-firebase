import type { NavLink } from '../types';

const PRIMARY_NAV: NavLink[] = [
    { label: "Domov", href: "#/" },
    {
      label: "Služby",
      href: "#/sluzby",
      children: [
        { label: "Nexify Apps", href: "#/sluzby/apps", children: [
          { label: "PWA aplikácie", href: "#/sluzby/apps/pwa" },
          { label: "TV aplikácie", href: "#/sluzby/apps/tv" },
          { label: "Šablóny & komponenty", href: "#/sluzby/apps/sablony" },
          { label: "Doplnky & integrácie", href: "#/sluzby/apps/doplnky" }
        ]},
        { label: "Nexify SEO", href: "#/sluzby/seo", children: [
          { label: "SEO audit", href: "#/sluzby/seo/audit" },
          { label: "On-page & technické SEO", href: "#/sluzby/seo/onpage" },
          { label: "Obsah", href: "#/sluzby/seo/obsah" },
          { label: "Linkbuilding", href: "#/sluzby/seo/linkbuilding" },
          { label: "Lokálne SEO", href: "#/sluzby/seo/lokal" }
        ]},
        { label: "Nexify Design", href: "#/sluzby/design", children: [
          { label: "Web dizajn", href: "#/sluzby/design/web" },
          { label: "UI/UX", href: "#/sluzby/design/ui-ux" },
          { label: "Brand identita", href: "#/sluzby/design/identita" },
          { label: "Komponenty", href: "#/sluzby/design/komponenty" }
        ]},
        { label: "Nexify Commerce", href: "#/sluzby/commerce", children: [
          { label: "Správa e-shopov", href: "#/sluzby/commerce/sprava" },
          { label: "Integrácie", href: "#/sluzby/commerce/integracie" },
          { label: "Automatizácia", href: "#/sluzby/commerce/automatizacia" }
        ]},
        { label: "Nexify Cards", href: "#/sluzby/cards", children: [
          { label: "NFC vizitky", href: "#/sluzby/cards/nfc" },
          { label: "Microsite & PWA", href: "#/sluzby/cards/microsite" },
          { label: "Editor & materiály", href: "#/sluzby/cards/editor" }
        ]},
        { label: "Nexify Labs", href: "#/sluzby/labs", children: [
          { label: "AI nástroje", href: "#/sluzby/labs/ai" },
          { label: "R&D", href: "#/sluzby/labs/rd" }
        ]}
      ]
    },
    { label: "Projekty", href: "#/projekty" },
    { label: "Cenník", href: "#/cennik" },
    { label: "Blog", href: "#/blog" },
    { label: "Kontakt", href: "#/kontakt" },
];

const CTA_NAV: NavLink[] = [
    { label: "Nexify One", href: "#/nexify-one", variant: "secondary" },
    { label: "Začať projekt", href: "#/brief", variant: "primary" }
];

const UTILITY_NAV: NavLink[] = [
    { label: "O nás", href: "#/o-nas" },
    { label: "Kariéra", href: "#/kariera" },
    { label: "Partneri", href: "#/partneri" },
    { label: "Podpora", href: "#/podpora" },
    { label: "Docs", href: "#/docs" },
    { label: "Status", href: "#/status" }
];


const FOOTER_LINKS_RAW = {
    produkty: ["/sluzby/apps", "/sluzby/seo", "/sluzby/design", "/sluzby/commerce", "/sluzby/cards", "/sluzby/labs"],
    spolocnost: ["/o-nas", "/o-nas#tim", "/kariera", "/kontakt", "/media"],
    podpora: ["/podpora", "/blog/navody", "/docs", "/status", "/komunita"],
    pravne: ["/gdpr", "/cookies", "/obchodne-podmienky", "/sla"]
};

// Helper to find a nav item by its href from the entire navigation tree
const findNavLinkByHref = (links: NavLink[], href: string): NavLink | undefined => {
    for (const link of links) {
        if (link.href === href) return link;
        if (link.children) {
            const found = findNavLinkByHref(link.children, href);
            if (found) return found;
        }
    }
    return undefined;
};

// Create a flat map of all available links for easy lookup
const allNavLinks = [...PRIMARY_NAV, ...CTA_NAV, ...UTILITY_NAV].flatMap(function flatten(link): NavLink[] {
  return [link, ...(link.children?.flatMap(flatten) ?? [])];
});


// Dynamically build footer links with correct labels and hash-based hrefs
const createFooterSection = (paths: string[]): NavLink[] => {
    return paths.map(path => {
        const hashHref = `#${path}`;
        const mainPath = `#${path.split('#')[0]}`; // Get the base path for lookup
        const foundLink = findNavLinkByHref(allNavLinks, mainPath) ?? allNavLinks.find(l => l.href.startsWith(mainPath + '/'));
        
        let label = foundLink ? foundLink.label : path.split('/').pop()?.replace('-', ' ') ?? 'Link';
        if (path.includes('#')) {
          label = `${label} (${path.split('#')[1]})`
        }
        
        // Simple capitalization
        label = label.charAt(0).toUpperCase() + label.slice(1);
        if (label === 'O nas') label = 'O nás';
        
        return { label, href: hashHref };
    });
};


export const SITE_CONFIG = {
  name: 'Nexify',
  author: 'Nexify',
  year: new Date().getFullYear(),
  PRIMARY_NAV,
  CTA_NAV,
  FOOTER_LINKS: {
      Produkty: createFooterSection(FOOTER_LINKS_RAW.produkty),
      Spoločnosť: createFooterSection(FOOTER_LINKS_RAW.spolocnost),
      Podpora: createFooterSection(FOOTER_LINKS_RAW.podpora),
      Právne: createFooterSection(FOOTER_LINKS_RAW.pravne),
  },
};