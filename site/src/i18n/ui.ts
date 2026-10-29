export const languages = ['en', 'it'] as const;
export type Lang = (typeof languages)[number];
export const defaultLang: Lang = 'en';

export const ui = {
  en: {
    siteTitle: 'Matteo Battiston - Unity Developer and 3D Artist',
    siteDescription:
      'Unity developer and 3D artist building interactive experiences for PC and XR. Projects: Project Normandia, The Last Gunner, Freezing Cold.',
    role: 'Unity developer and 3D artist',
    skip: 'Skip to content',
    nav: { projects: 'Projects', models: '3D models', about: 'About', contact: 'Contact' },
    heroLine1: 'Interactive experiences',
    heroLine2: 'for PC and XR.',
    heroKicker: 'Unity dev / 3D artist',
    heroDesc: 'Code in Unity, 3D in Blender.',
    menuHint: 'Use ↑ ↓ and Enter',
    contactLabel: 'Get in touch',
    projectsTitle: 'Projects',
    modelsTitle: '3D models',
    filterLabel: 'Filter projects',
    filterAll: 'All',
    viewProject: 'View project',
    viewModel: 'View in 3D',
    closeViewer: 'Close',
    backProjects: 'Back to projects',
    backModels: 'Back to 3D models',
    readMore: 'More details',
    prevProject: 'Previous project',
    nextProject: 'Next project',
    galleryPrev: 'Previous',
    galleryNext: 'Next',
    compareHint: 'Drag to compare',
    modelsFromProject: 'See them in 3D models',
    gridNote: 'The 3D viewer comes from Sketchfab and loads only when you open a model.',
    aboutTitle: 'About',
    card: {
      title: 'Profile',
      rows: [
        ['Name', 'Matteo Battiston'],
        ['Based in', 'Padova, Italy'],
        ['Does', 'Interactive experiences and 3D assets'],
        ['Now', 'Recently completed internship at Radica Design; open to new opportunities'],
        ['Engines', 'Unity, Unreal Engine, Godot'],
        ['Languages', 'C#, C++, Python, SQL'],
        ['3D', 'Blender'],
        ['Tools', 'Git, Figma'],
        ['Outside work', '3D printing, hardware building, climbing'],
      ] as [string, string][],
    },
    heroSkillsTitle: 'Skill tree',
    heroSkillEngine: 'Engine',
    heroSkillCode: 'Code',
    heroSkillXr: 'XR / Audio',
    switchTo: 'Italiano',
    themeDark: 'Switch to dark theme',
    themeLight: 'Switch to light theme',
  },
  it: {
    siteTitle: 'Matteo Battiston - Sviluppatore Unity e 3D Artist',
    siteDescription:
      'Sviluppatore Unity e 3D artist: esperienze interattive per PC e XR. Progetti: Project Normandia, The Last Gunner, Freezing Cold.',
    role: 'Sviluppatore Unity e 3D artist',
    skip: 'Vai al contenuto',
    nav: { projects: 'Progetti', models: 'Modelli 3D', about: 'Chi sono', contact: 'Contatti' },
    heroLine1: 'Esperienze interattive',
    heroLine2: 'per PC e XR.',
    heroKicker: 'Dev Unity / 3D artist',
    heroDesc: 'Codice in Unity, 3D in Blender.',
    menuHint: 'Usa ↑ ↓ e Invio',
    contactLabel: 'Scrivimi',
    projectsTitle: 'Progetti',
    modelsTitle: 'Modelli 3D',
    filterLabel: 'Filtra i progetti',
    filterAll: 'Tutti',
    viewProject: 'Vedi il progetto',
    viewModel: 'Vedi in 3D',
    closeViewer: 'Chiudi',
    backProjects: 'Torna ai progetti',
    backModels: 'Torna ai modelli 3D',
    readMore: 'Più dettagli',
    prevProject: 'Progetto precedente',
    nextProject: 'Progetto successivo',
    galleryPrev: 'Precedente',
    galleryNext: 'Successiva',
    compareHint: 'Trascina per confrontare',
    modelsFromProject: 'Vedili tra i modelli 3D',
    gridNote: 'Il visualizzatore 3D è di Sketchfab e si carica solo quando apri un modello.',
    aboutTitle: 'Chi sono',
    card: {
      title: 'Scheda',
      rows: [
        ['Nome', 'Matteo Battiston'],
        ['Sede', 'Padova, Italia'],
        ['Faccio', 'Esperienze interattive e asset 3D'],
        ['Adesso', 'Tirocinio da Radica Design concluso; aperto a nuove opportunità'],
        ['Motori', 'Unity, Unreal Engine, Godot'],
        ['Linguaggi', 'C#, C++, Python, SQL'],
        ['3D', 'Blender'],
        ['Strumenti', 'Git, Figma'],
        ['Tempo libero', 'Stampa 3D, costruzione di hardware, arrampicata'],
      ] as [string, string][],
    },
    heroSkillsTitle: 'Skill tree',
    heroSkillEngine: 'Motore',
    heroSkillCode: 'Codice',
    heroSkillXr: 'XR / Audio',
    switchTo: 'English',
    themeDark: 'Passa al tema scuro',
    themeLight: 'Passa al tema chiaro',
  },
} satisfies Record<Lang, unknown>;

export function useT(lang: Lang) {
  return ui[lang];
}

/** Path of a page in a given language: English at the root, Italian under /it. */
export function localePath(lang: Lang, path = '/') {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return lang === defaultLang ? clean : `/${lang}${clean === '/' ? '/' : clean}`;
}
