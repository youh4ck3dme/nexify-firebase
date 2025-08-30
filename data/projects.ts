export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: 'E-commerce Platforma "FutureShop"',
    category: 'E-shopy & Automatizácia',
    description: 'Špičková e-commerce platforma s odporúčaniami založenými na AI a 3D prehliadačom produktov. Vytvorená pre výkon a škálovateľnosť.',
    imageUrl: '/images/projects/futureshop.jpg',
    projectUrl: '#/projekty/futureshop'
  },
  {
    id: 2,
    title: 'Interaktívna PWA pre "Art-Exhibit Online"',
    category: 'PWA & TV aplikácie',
    description: 'Pôsobivá Progresívna Webová Aplikácia pre virtuálnu galériu umenia, ktorá obsahuje interaktívne 3D exponáty a offline funkcie.',
    imageUrl: '/images/projects/art-exhibit.jpg',
    projectUrl: '#/projekty/art-exhibit'
  },
  {
    id: 3,
    title: 'Korporátna identita pre "Innovate Corp"',
    category: 'Web/UI/UX & Identita',
    description: 'Kompletný rebranding a nový dizajn webových stránok so zameraním na čistú, modernú estetiku a používateľsky centrovaný zážitok.',
    imageUrl: '/images/projects/innovate-corp.jpg',
    projectUrl: '#/projekty/innovate-corp'
  },
  {
    id: 4,
    title: 'AI-Powered SEO Audit Nástroj "SEOptima"',
    category: 'Profi SEO & Audity',
    description: 'Na mieru vytvorený nástroj pre hĺbkovú SEO analýzu, ktorý využíva AI na identifikáciu príležitostí a poskytuje konkrétne odporúčania.',
    imageUrl: '/images/projects/seoptima.jpg',
    projectUrl: '#/projekty/seoptima'
  },
];
