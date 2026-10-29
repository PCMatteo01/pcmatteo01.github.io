import type { Lang } from '../i18n/ui';

type L10n = Record<Lang, string>;

export interface Project {
  slug: string;
  title: string;
  platforms: ('pc' | 'xr' | '3d')[];
  image: string;
  imageAlt: L10n;
  position?: string;
  video?: string;
  poster?: string;
  /** label / value rows shown under the description */
  facts?: Record<Lang, [string, string][]>;
  desc: L10n;
}

export const projects: Project[] = [
  {
    slug: 'normandia',
    facts: {
      en: [['Role', 'Gameplay programming, 3D assets, VR optimization'], ['Context', 'Internship at Radica Design'], ['Platform', 'Meta Quest 3, PC'], ['Engine', 'Unity']],
      it: [['Ruolo', 'Programmazione gameplay, asset 3D, ottimizzazione VR'], ['Contesto', 'Tirocinio da Radica Design'], ['Piattaforma', 'Meta Quest 3, PC'], ['Motore', 'Unity']],
    },
    title: 'Project Normandia',
    platforms: ['pc', 'xr'],
    image: '/assets/normandia/tank-landingcraft-sunset.webp',
    position: '65% 55%',
    imageAlt: {
      en: 'Sherman tank and landing craft on the beach at sunset',
      it: 'Carro armato Sherman e mezzo da sbarco sulla spiaggia al tramonto',
    },
    desc: {
      en: 'Immersive VR recreation of D-Day for Meta Quest 3, covering architecture, weapon systems, and gameplay programming.',
      it: "Ricostruzione VR immersiva del D-Day per Meta Quest 3, tra architettura, sistemi d'arma e programmazione del gameplay.",
    },
  },
  {
    slug: 'lastgunner',
    facts: {
      en: [['Role', 'VR lead, audio lead, art director'], ['Team', '5 people'], ['Platform', 'PC, Meta Quest'], ['Engine', 'Unity 6, FMOD']],
      it: [['Ruolo', 'Responsabile VR, audio e art direction'], ['Team', '5 persone'], ['Piattaforma', 'PC, Meta Quest'], ['Motore', 'Unity 6, FMOD']],
    },
    title: 'The Last Gunner: No Way Out',
    platforms: ['pc', 'xr'],
    image: '/assets/projects/lastgunner.jpg',
    imageAlt: {
      en: 'The tank and an abandoned truck outside a farmhouse at dusk',
      it: 'Il carro armato e un camion abbandonato davanti a una cascina al tramonto',
    },
    desc: {
      en: 'Wave-based survival shooter for PC and VR, built with a five-person team around VR interaction, game design, and audio.',
      it: 'Sparatutto survival a ondate per PC e VR, sviluppato da un team di cinque persone con focus su interazione VR, game design e audio.',
    },
  },
  {
    slug: 'freezingcold',
    facts: {
      en: [['Role', 'Solo: code, art and design'], ['Time', 'Under 7 hours'], ['Context', 'School exam'], ['Platform', 'PC']],
      it: [['Ruolo', 'In solitaria: codice, arte e design'], ['Tempo', 'Meno di 7 ore'], ['Contesto', 'Esame scolastico'], ['Piattaforma', 'PC']],
    },
    title: 'Freezing Cold',
    platforms: ['pc'],
    image: '/assets/projects/freezingcold.png',
    imageAlt: {
      en: 'Bonfire glowing next to a cabin in a snowy forest at night, Freezing Cold cover art',
      it: 'Falò acceso accanto a una baita in una foresta innevata di notte, copertina di Freezing Cold',
    },
    desc: {
      en: 'Solo exploration/puzzle game, code and assets built from scratch in less than 7 hours for a school exam, with 3 different endings.',
      it: 'Gioco di esplorazione e puzzle in solitaria: codice e asset realizzati da zero in meno di 7 ore per un esame scolastico, con 3 finali diversi.',
    },
  },
  {
    slug: 'blackhole',
    title: 'Black Hole Render',
    platforms: ['3d'],
    image: '/assets/projects/blackhole.jpg',
    imageAlt: {
      en: "Black hole render with a lensed accretion disk, in the style of Interstellar's Gargantua",
      it: "Render di un buco nero con disco di accrescimento deformato dalla lente gravitazionale, nello stile del Gargantua di Interstellar",
    },
    desc: {
      en: 'Standalone Blender render exploring gravitational lensing with shaders and geometry nodes.',
      it: 'Render Blender indipendente che esplora la lente gravitazionale con shader e geometry nodes.',
    },
  },
];

export interface Model {
  id: string;
  sketchfab: string;
  title: string;
  image: string;
  tags: string[];
  desc: L10n;
}

export const models: Model[] = [
  {
    id: 'psxps1-style-pine-tree',
    sketchfab: '95d9e90d6fa34e979f17756d9154b5d1',
    title: 'PSX Pine Tree',
    image: '/assets/models/psxps1-style-pine-tree.jpg',
    tags: ['Low-poly', 'PSX'],
    desc: {
      en: 'Low-poly pine tree in a PS1 style with hand-painted textures.',
      it: 'Pino low-poly in stile PS1 con texture dipinte a mano.',
    },
  },
  {
    id: 'psx-tiger-1',
    sketchfab: 'f7814db5f7f54c948571c912be5ee073',
    title: 'PSX Tiger 1',
    image: '/assets/models/psx-tiger-1.jpg',
    tags: ['Low-poly', 'PSX'],
    desc: {
      en: 'PS1-style Tiger I tank with hand-painted textures.',
      it: 'Carro armato Tiger I in stile PS1 con texture dipinte a mano.',
    },
  },
  {
    id: 'zombie',
    sketchfab: 'b3740e9cb183422ea5727bfeb1438a60',
    title: 'Zombie',
    image: '/assets/models/zombie.jpg',
    tags: ['Animated'],
    desc: {
      en: 'Low-poly zombie with three animations (idle, walk, attack), made for The Last Gunner.',
      it: 'Zombie low-poly con tre animazioni (idle, camminata, attacco), realizzato per The Last Gunner.',
    },
  },
  {
    id: 'marble-revolver',
    sketchfab: 'de62f63833f34f199a2eb8b0692d025e',
    title: 'Marble Revolver',
    image: '/assets/models/marble-revolver.jpg',
    tags: ['Animated'],
    desc: { en: 'Animated revolver with a marble finish.', it: 'Revolver animato con finitura in marmo.' },
  },
  {
    id: 'kiwi-bird',
    sketchfab: 'bdf1a1868dab44f68aa8a464490be3b4',
    title: 'Kiwi (bird)',
    image: '/assets/models/kiwi-bird.jpg',
    tags: ['Animated'],
    desc: { en: 'Animated kiwi bird.', it: 'Uccello kiwi animato.' },
  },
  {
    id: 'soda-can',
    sketchfab: 'ab4ea7cf2f74448d99e1db59b30cf6b1',
    title: 'Soda Can',
    image: '/assets/models/soda-can.jpg',
    tags: ['Prop'],
    desc: { en: 'Soda can prop with hand-painted textures.', it: 'Lattina di bibita con texture dipinte a mano.' },
  },
];

export const links = {
  email: 'battistonmatteo.work@gmail.com',
  linkedin: 'https://www.linkedin.com/in/battiston-matteo/',
  github: 'https://github.com/PCMatteo01',
  sketchfab: 'https://sketchfab.com/battistonmatteo',
};
