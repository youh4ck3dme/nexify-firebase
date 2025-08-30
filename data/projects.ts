export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  technologies: string[];
  imageUrl: string;
  projectUrl: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: 'E-commerce Platforma "FutureShop"',
    category: 'E-shopy & Automatizácia',
    description: 'Špičková e-commerce platforma s odporúčaniami založenými na AI a 3D prehliadačom produktov. Vytvorená pre výkon a škálovateľnosť.',
    longDescription: 'FutureShop nie je len ďalší e-shop. Je to plne vybavená e-commerce platforma navrhnutá pre budúcnosť online predaja. Implementovali sme pokročilý odporúčací systém založený na umelej inteligencii, ktorý analyzuje správanie používateľov a ponúka personalizované návrhy produktov v reálnom čase. Unikátny 3D prehliadač produktov umožňuje zákazníkom preskúmať tovar z každého uhla, čím sa výrazne zvyšuje miera konverzie. Platforma je postavená na robustnej a škálovateľnej architektúre, ktorá zaručuje plynulý chod aj pri vysokej návštevnosti.',
    technologies: ['React', 'TypeScript', 'Node.js', 'GraphQL', 'Three.js', 'Firebase', 'PWA'],
    imageUrl: '/images/projects/futureshop.jpg',
    projectUrl: '#/projekty/futureshop'
  },
  {
    id: 2,
    title: 'Interaktívna PWA pre "Art-Exhibit Online"',
    category: 'PWA & TV aplikácie',
    description: 'Pôsobivá Progresívna Webová Aplikácia pre virtuálnu galériu umenia, ktorá obsahuje interaktívne 3D exponáty a offline funkcie.',
    longDescription: 'Pretvorili sme tradičnú umeleckú galériu na pohlcujúci digitálny zážitok. Art-Exhibit Online je Progresívna Webová Aplikácia (PWA), ktorá návštevníkom umožňuje prechádzať sa virtuálnymi sálami a obdivovať umelecké diela v interaktívnom 3D prostredí. Aplikácia funguje plynulo online aj offline vďaka pokročilým PWA technikám. Každý exponát je doplnený o audio komentár a podrobné informácie, čím sa prehlbuje vzdelávací a umelecký zážitok.',
    technologies: ['Vue.js', 'Three.js', 'WebGL', 'Workbox', 'IndexedDB', 'PWA'],
    imageUrl: '/images/projects/art-exhibit.jpg',
    projectUrl: '#/projekty/art-exhibit'
  },
  {
    id: 3,
    title: 'Korporátna identita pre "Innovate Corp"',
    category: 'Web/UI/UX & Identita',
    description: 'Kompletný rebranding a nový dizajn webových stránok so zameraním na čistú, modernú estetiku a používateľsky centrovaný zážitok.',
    longDescription: 'Pre spoločnosť Innovate Corp sme realizovali komplexný rebranding, ktorý zahŕňal vytvorenie novej vizuálnej identity a redizajn ich webovej prezentácie. Naším cieľom bolo vytvoriť moderný, čistý a profesionálny vzhľad, ktorý by odrážal inovatívny charakter firmy. Nový web je postavený s dôrazom na používateľsky centrovaný dizajn (UX), intuitívnu navigáciu a responzivitu na všetkých zariadeniach. Výsledkom je silná a konzistentná značka, ktorá lepšie komunikuje svoje hodnoty.',
    technologies: ['Figma', 'React', 'Gatsby', 'Styled Components', 'Contentful'],
    imageUrl: '/images/projects/innovate-corp.jpg',
    projectUrl: '#/projekty/innovate-corp'
  },
  {
    id: 4,
    title: 'AI-Powered SEO Audit Nástroj "SEOptima"',
    category: 'Profi SEO & Audity',
    description: 'Na mieru vytvorený nástroj pre hĺbkovú SEO analýzu, ktorý využíva AI na identifikáciu príležitostí a poskytuje konkrétne odporúčania.',
    longDescription: 'SEOptima je na mieru vyvinutý softvér pre SEO špecialistov, ktorý automatizuje a prehlbuje proces auditu webových stránok. Nástroj využíva algoritmy umelej inteligencie na analýzu stoviek on-page a off-page faktorov, identifikuje technické problémy, analyzuje kľúčové slová a konkurenciu. Výstupom sú prehľadné reporty s konkrétnymi, prioritizovanými odporúčaniami na zlepšenie pozícií vo vyhľadávačoch. SEOptima šetrí čas a odhaľuje príležitosti, ktoré by mohli byť prehliadnuté.',
    technologies: ['Python', 'Django', 'React', 'Chart.js', 'Natural Language Processing (NLP)', 'Scrapy'],
    imageUrl: '/images/projects/seoptima.jpg',
    projectUrl: '#/projekty/seoptima'
  },
];
