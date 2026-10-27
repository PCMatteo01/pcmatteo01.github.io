// ---------- Localization (English is the source text in the HTML; Italian comes from this dictionary) ----------
// Language: ?lang=it|en  >  saved choice (localStorage)  >  browser language (Italian browsers get Italian).
// Elements are matched by their English innerHTML (whitespace collapsed); anything without an entry stays English.
(function () {
  'use strict';

  var IT = {
 "LAYER 00 - IDENTITY": "LIVELLO 00 - IDENTITÀ",
 "About<span>02</span>": "Chi sono<span>02</span>",
 "Projects<span>03</span>": "Progetti<span>03</span>",
 "3D Models<span>04</span>": "Modelli 3D<span>04</span>",
 "Unity Developer<br>PC · VR · 3D<br><a href=\"privacy.html\">Privacy</a>": "Sviluppatore Unity<br>PC · VR · 3D<br><a href=\"privacy.html\">Privacy</a>",
 "LAYER 01 - OVERVIEW": "LIVELLO 01 - PANORAMICA",
 "Building interactive systems<br>for <span>PC</span> and <span>VR</span>.": "Sviluppo sistemi interattivi<br>per <span>PC</span> e <span>VR</span>.",
 "Unity developer focused on gameplay programming and interaction design. This is a showcase of selected projects, playable footage and breakdowns.": "Sviluppatore Unity specializzato in programmazione del gameplay e design dell'interazione. Questa è una vetrina di progetti selezionati, filmati giocabili e approfondimenti tecnici.",
 "View Projects →": "Vedi i progetti →",
 "LAYER 02 - ABOUT": "LIVELLO 02 - CHI SONO",
 "Technical profile.": "Profilo tecnico.",
 "Developer with a path that bridges programming (C#, Unity) and 3D asset production optimized for real-time engines. Solid foundations in information systems, databases (SQL), and networking, now applied to building Extended Reality (XR) experiences.": "Sviluppatore con un percorso che unisce programmazione (C#, Unity) e produzione di asset 3D ottimizzati per i motori real-time. Solide basi in sistemi informativi, database (SQL) e reti, oggi applicate alla realizzazione di esperienze di realtà estesa (XR).",
 "Currently interning at Radica Design, developing AR/VR applications in Unity that combine programming logic with 3D modeling.": "Attualmente tirocinante presso Radica Design, dove sviluppo applicazioni AR/VR in Unity che combinano logica di programmazione e modellazione 3D.",
 "Outside of work: 3D printing, hardware building, climbing.": "Nel tempo libero: stampa 3D, costruzione di hardware, arrampicata.",
 "<span>Engines</span><span>Unity, Unreal Engine, Godot</span>": "<span>Motori</span><span>Unity, Unreal Engine, Godot</span>",
 "<span>Languages</span><span>C#, C++, Python, SQL</span>": "<span>Linguaggi</span><span>C#, C++, Python, SQL</span>",
 "<span>Focus</span><span>XR/VR development, gameplay, 3D asset</span>": "<span>Ambito</span><span>Sviluppo XR/VR, gameplay, asset 3D</span>",
 "<span>Tools</span><span>Blender, Git/GitHub (LFS), Figma</span>": "<span>Strumenti</span><span>Blender, Git/GitHub (LFS), Figma</span>",
 "<span>Based in</span><span>Padova, Italy</span>": "<span>Sede</span><span>Padova, Italia</span>",
 "LAYER 03 - PROJECTS": "LIVELLO 03 - PROGETTI",
 "Selected projects.": "Progetti selezionati.",
 "Games and interactive applications. Filter by platform.": "Giochi e applicazioni interattive. Filtra per piattaforma.",
 "@aria-label|Filter projects": "Filtra i progetti",
 "All": "Tutti",
 "Immersive VR recreation of D-Day for Meta Quest 3, covering architecture, weapon systems, and gameplay programming.": "Ricostruzione VR immersiva del D-Day per Meta Quest 3, tra architettura, sistemi d'arma e programmazione del gameplay.",
 "View project →": "Vedi il progetto →",
 "Wave-based survival shooter for PC and VR, built with a five-person team around VR interaction, game design, and audio.": "Sparatutto survival a ondate per PC e VR, sviluppato da un team di cinque persone con focus su interazione VR, game design e audio.",
 "Solo exploration/puzzle game, code and assets built from scratch in less than 7 hours for a school exam, with 3 different endings.": "Gioco di esplorazione e puzzle in solitaria: codice e asset realizzati da zero in meno di 7 ore per un esame scolastico, con 3 finali diversi.",
 "LAYER 04 - 3D MODELS": "LIVELLO 04 - MODELLI 3D",
 "3D models.": "Modelli 3D.",
 "Real-time assets, mostly low-poly. Open a model to inspect it in 3D, or browse the full set on <a href=\"https://sketchfab.com/battistonmatteo\" target=\"_blank\" rel=\"noopener\">Sketchfab</a>. The viewer is provided by Sketchfab and only loads when you open a model (see <a href=\"privacy.html\">Privacy</a>).": "Asset real-time, per lo più low-poly. Apri un modello per ispezionarlo in 3D, oppure sfoglia tutta la raccolta su <a href=\"https://sketchfab.com/battistonmatteo\" target=\"_blank\" rel=\"noopener\">Sketchfab</a>. Il visualizzatore è fornito da Sketchfab e si carica solo quando apri un modello (vedi <a href=\"privacy.html\">Privacy</a>).",
 "@aria-label|View PSX Pine Tree in 3D": "Visualizza PSX Pine Tree in 3D",
 "View in 3D": "Vedi in 3D",
 "Hand-painted": "Dipinto a mano",
 "Low-poly pine tree in a PS1 style with hand-painted textures. Available to download on Sketchfab.": "Pino low-poly in stile PS1 con texture dipinte a mano. Disponibile al download su Sketchfab.",
 "View in 3D →": "Vedi in 3D →",
 "@aria-label|View PSX Tiger 1 in 3D": "Visualizza PSX Tiger 1 in 3D",
 "PS1-style Tiger I tank with hand-painted textures.": "Carro armato Tiger I in stile PS1 con texture dipinte a mano.",
 "@aria-label|View Zombie in 3D": "Visualizza Zombie in 3D",
 "Animated": "Animato",
 "Low-poly zombie with hand-painted textures and three animations (idle, walk, attack), made for The Last Gunner.": "Zombie low-poly con texture dipinte a mano e tre animazioni (idle, camminata, attacco), realizzato per The Last Gunner.",
 "@aria-label|View Marble Revolver in 3D": "Visualizza Marble Revolver in 3D",
 "Animated revolver with a marble finish.": "Revolver animato con finitura in marmo.",
 "@aria-label|View Kiwi (bird) in 3D": "Visualizza Kiwi (uccello) in 3D",
 "Kiwi (bird)": "Kiwi (uccello)",
 "Animated kiwi bird.": "Uccello kiwi animato.",
 "@aria-label|View Soda Can in 3D": "Visualizza Soda Can in 3D",
 "Prop": "Oggetto di scena",
 "Soda can prop with hand-painted textures. Available to download on Sketchfab.": "Lattina di bibita con texture dipinte a mano. Disponibile al download su Sketchfab.",
 "Standalone Blender render exploring gravitational lensing with shaders and geometry nodes.": "Render Blender indipendente che esplora la lente gravitazionale con shader e geometry nodes.",
 "@title|Matteo Battiston - Unity Developer Portfolio": "Matteo Battiston - Portfolio Sviluppatore Unity",
 "@desc|Unity developer building interactive systems for PC and VR. Selected projects: Project Normandia, The Last Gunner, Freezing Cold.": "Sviluppatore Unity che realizza sistemi interattivi per PC e VR. Progetti selezionati: Project Normandia, The Last Gunner, Freezing Cold.",
 "About": "Chi sono",
 "Projects": "Progetti",
 "3D Models": "Modelli 3D",
 "← Back to projects": "← Torna ai progetti",
 "Matteo Battiston · Contact": "Matteo Battiston · Contatti",
 "LAYER 05 - PROJECT DETAIL": "LIVELLO 05 - DETTAGLIO PROGETTO",
 "Operation Overlord · 06.06.1944": "Operazione Overlord · 06.06.1944",
 "Role": "Ruolo",
 "Gameplay programming, 3D assets, VR optimization": "Programmazione gameplay, asset 3D, ottimizzazione VR",
 "Context": "Contesto",
 "Internship at Radica Design": "Tirocinio presso Radica Design",
 "Platform": "Piattaforma",
 "Engine": "Motore",
 "@aria-label|On this page": "In questa pagina",
 "On this page": "In questa pagina",
 "Role in the project": "Ruolo nel progetto",
 "Multi-platform architecture": "Architettura multipiattaforma",
 "Weapon systems &amp; VR interaction": "Sistemi d'arma &amp; interazione VR",
 "Historical interaction &amp; edutech": "Interazione storica &amp; edutech",
 "Gameplay &amp; performance": "Gameplay &amp; prestazioni",
 "Gallery": "Galleria",
 "An immersive VR simulation of the Allied landings in Normandy on June 6, 1944, built for Meta Quest 3 during my internship at Radica Design.": "Simulazione VR immersiva dello sbarco alleato in Normandia del 6 giugno 1944, realizzata per Meta Quest 3 durante il mio tirocinio presso Radica Design.",
 "The goal is historical divulgation through experiential learning: the player explores a historically accurate coastal battlefield and interacts with historical equipment. There are two modes: a slower-paced <strong>Tour mode</strong> for exploration and education, and an <strong>Action FPS mode</strong> with physically accurate weapon handling and combat.": "L'obiettivo è la divulgazione storica attraverso l'apprendimento esperienziale: il giocatore esplora un campo di battaglia costiero storicamente accurato e interagisce con l'equipaggiamento dell'epoca. Ci sono due modalità: una <strong>modalità Tour</strong> più lenta, per esplorare e imparare, e una <strong>modalità Action FPS</strong> con gestione delle armi fisicamente accurata e combattimento.",
 "The application runs cross-platform (VR standalone and PC with mouse/keyboard) from the same scene, and targets a stable 90 FPS on mobile VR hardware. The project is still under active development.": "L'applicazione funziona su più piattaforme (VR standalone e PC con mouse e tastiera) a partire dalla stessa scena e punta a 90 FPS stabili su hardware VR mobile. Il progetto è ancora in sviluppo attivo.",
 "After an initial period pairing with another intern, I took over most of the project's technical development, splitting my time between gameplay programming, 3D asset work, and getting the whole thing to run smoothly on standalone VR hardware. Day to day, that meant:": "Dopo un periodo iniziale in affiancamento a un altro tirocinante, mi sono occupato della maggior parte dello sviluppo tecnico del progetto, dividendomi tra programmazione del gameplay, lavoro sugli asset 3D e ottimizzazione perché tutto girasse fluido su hardware VR standalone. Nel concreto:",
 "Multi-platform architecture (VR + PC, shared scene)": "Architettura multipiattaforma (VR + PC, scena condivisa)",
 "Diegetic historical interaction panels (edutech)": "Pannelli diegetici di interazione storica (edutech)",
 "VR locomotion and tactical ammo inventory": "Locomozione VR e inventario tattico delle munizioni",
 "Weapon systems with physically-based reload": "Sistemi d'arma con ricarica basata sulla fisica",
 "3D asset modeling and optimization (Blender)": "Modellazione e ottimizzazione di asset 3D (Blender)",
 "Performance profiling for Meta Quest 3": "Profiling delle prestazioni per Meta Quest 3",
 "Audio system": "Sistema audio",
 "Core gameplay systems (health, scoring, timer)": "Sistemi di gioco principali (salute, punteggio, timer)",
 "@aria-label|Previous image": "Immagine precedente",
 "@aria-label|Next image": "Immagine successiva",
 "@aria-label|Go to image 1": "Vai all'immagine 1",
 "@aria-label|Go to image 2": "Vai all'immagine 2",
 "One scene, four player variants, no manual setup.": "Una scena, quattro varianti di giocatore, nessuna configurazione manuale.",
 "I designed the <code>GameModeManager</code>, a singleton that detects the running platform (VR/PC) and selects between four player variants (VR FPS, VR Tour, PC FPS, PC Tour). The same scene runs unmodified across platforms and modes, with no manual setup during testing or deploys.": "Ho progettato il <code>GameModeManager</code>, un singleton che rileva la piattaforma in uso (VR/PC) e sceglie tra quattro varianti di giocatore (VR FPS, VR Tour, PC FPS, PC Tour). La stessa scena funziona senza modifiche su tutte le piattaforme e modalità, senza configurazioni manuali durante test o rilasci.",
 "@aria-label|Go to image 3": "Vai all'immagine 3",
 "Physically accurate reloads, shared across VR and PC.": "Ricariche fisicamente accurate, condivise tra VR e PC.",
 "A component-based architecture (<code>WeaponCore</code>, <code>VRWeaponController</code>, <code>PCWeaponController</code>) drives the reload mechanics for the M1 Garand (en bloc clip, auto-eject) and the Thompson M1A1 (manual bolt), without duplicating logic between platforms.": "Un'architettura a componenti (<code>WeaponCore</code>, <code>VRWeaponController</code>, <code>PCWeaponController</code>) gestisce le meccaniche di ricarica dell'M1 Garand (caricatore a lamella en bloc con espulsione automatica) e del Thompson M1A1 (otturatore manuale), senza duplicare la logica tra le piattaforme.",
 "In VR, ammo is managed through a wearable tactical belt (<code>SimpleVRBelt</code>, <code>AmmoReturnSocket</code>).": "In VR le munizioni si gestiscono con una cintura tattica indossabile (<code>SimpleVRBelt</code>, <code>AmmoReturnSocket</code>).",
 "It gives magnetic reload feedback for grabbing and stowing magazines mid-action, keeping the player's hands on the weapon instead of a menu.": "Offre un feedback magnetico per afferrare e riporre i caricatori durante l'azione, tenendo le mani del giocatore sull'arma invece che su un menu.",
 "Objects in the scene teach history without breaking immersion.": "Gli oggetti della scena insegnano la storia senza rompere l'immersione.",
 "Beyond combat, the project is built around <strong>experiential learning</strong>: looking at or interacting with objects in the scene (vehicles, equipment, fortifications) triggers a diegetic information panel with historical context drawn from verified sources, with no menus breaking immersion.": "Oltre al combattimento, il progetto si basa sull'<strong>apprendimento esperienziale</strong>: guardare o interagire con gli oggetti della scena (veicoli, equipaggiamento, fortificazioni) attiva un pannello informativo diegetico con il contesto storico tratto da fonti verificate, senza menu che interrompano l'immersione.",
 "It's aimed at history enthusiasts, students, and museums or cultural institutions looking for an experiential complement to traditional teaching material.": "È pensato per appassionati di storia, studenti, musei e istituzioni culturali che cercano un complemento esperienziale al materiale didattico tradizionale.",
 "Comfortable VR movement, a complete gameplay loop and a stable 90 FPS on Meta Quest 3.": "Movimento VR confortevole, un ciclo di gioco completo e 90 FPS stabili su Meta Quest 3.",
 "Dual VR locomotion (vignette-assisted continuous movement + parabolic teleport) to reduce motion sickness": "Doppia locomozione VR (movimento continuo con vignettatura + teletrasporto parabolico) per ridurre la nausea da movimento",
 "Core gameplay loop: player health, scoring, match timer, end-of-match flow, diegetic wrist-mounted VR UI": "Ciclo di gioco principale: salute del giocatore, punteggio, timer della partita, flusso di fine partita, UI VR diegetica sul polso",
 "Pooled <code>AudioManager</code> handling dozens of simultaneous spatial sound sources with minimal CPU overhead": "<code>AudioManager</code> con pooling che gestisce decine di sorgenti sonore spaziali simultanee con un carico minimo sulla CPU",
 "Custom physics for dynamically altering gravity vectors and force constants": "Fisica personalizzata per modificare dinamicamente i vettori di gravità e le costanti di forza",
 "Retopology/LOD pipeline, baked lighting, draw call reduction and an event-driven refactor to hit a stable 90 FPS on Meta Quest 3": "Pipeline di retopology/LOD, illuminazione baked, riduzione delle draw call e refactoring a eventi per raggiungere 90 FPS stabili su Meta Quest 3",
 "@aria-label|Other projects": "Altri progetti",
 "<span>← Previous project</span>Freezing Cold": "<span>← Progetto precedente</span>Freezing Cold",
 "<span>Next project →</span>The Last Gunner: No Way Out": "<span>Progetto successivo →</span>The Last Gunner: No Way Out",
 "Pause videos": "Metti in pausa i video",
 "@aria-label|Back to top": "Torna su",
 "@desc|Immersive VR recreation of D-Day for Meta Quest 3: multi-platform architecture, weapon systems and historical interaction.": "Ricostruzione VR immersiva del D-Day per Meta Quest 3: architettura multipiattaforma, sistemi d'arma e interazione storica.",
 "Warning: horde inbound": "Attenzione: orda in arrivo",
 "VR lead, audio lead, art director": "Responsabile VR, responsabile audio, art director",
 "5 people": "5 persone",
 "Core loop &amp; turret combat": "Loop principale &amp; combattimento con la torretta",
 "NPC companion &amp; AI": "Compagno NPC &amp; IA",
 "Crafting &amp; survival economy": "Crafting &amp; economia di sopravvivenza",
 "Menus, settings &amp; localization": "Menu, impostazioni &amp; localizzazione",
 "Enemies &amp; infinite waves": "Nemici &amp; ondate infinite",
 "VR interaction &amp; audio": "Interazione VR &amp; audio",
 "Art direction: before &amp; after": "Direzione artistica: prima &amp; dopo",
 "3D models from this project": "Modelli 3D di questo progetto",
 "A wave-based survival shooter for PC and Meta Quest, built in Unity 6 by a five-person team.": "Uno sparatutto survival a ondate per PC e Meta Quest, sviluppato in Unity 6 da un team di cinque persone.",
 "Set in an alternate WWII overrun by a gas-mutated infection, the player is welded to the turret of a tank disabled by an anti-tank mine and defends it alongside Anatolij, a young mechanic sent out on supply runs between waves.": "Ambientato in una Seconda guerra mondiale alternativa travolta da un'infezione causata da gas, il giocatore è bloccato alla torretta di un carro armato immobilizzato da una mina anticarro e lo difende insieme ad Anatolij, un giovane meccanico mandato a recuperare rifornimenti tra un'ondata e l'altra.",
 "Each run is simple: survive as many waves as possible and climb the local leaderboard on score, kills and round reached.": "Ogni partita è semplice: sopravvivere al maggior numero di ondate possibile e scalare la classifica locale per punteggio, uccisioni e round raggiunto.",
 "<strong>Core features:</strong>": "<strong>Caratteristiche principali:</strong>",
 "Wave-based survival loop that scales indefinitely, with no hard difficulty cap": "Ciclo di sopravvivenza a ondate che cresce all'infinito, senza un limite di difficoltà",
 "An AI companion (Anatolij, the mechanic) who scavenges, can be grabbed by the horde and rescued, and mans a defensive gun": "Un compagno controllato dall'IA (Anatolij, il meccanico) che recupera risorse, può essere afferrato dall'orda e salvato, e presidia una mitragliatrice difensiva",
 "A crafting system that turns scavenged materials into buffs and turret upgrades": "Un sistema di crafting che trasforma i materiali recuperati in potenziamenti e migliorie per la torretta",
 "Four enemy archetypes, each built around a distinct combat read": "Quattro tipi di nemico, ciascuno costruito attorno a un diverso modo di combatterlo",
 "Full PC and VR support from a shared turret-combat core": "Pieno supporto PC e VR a partire da un nucleo di combattimento della torretta condiviso",
 "A stationary, rotation-only player: a deliberate constraint that also keeps camera movement comfortable in VR": "Un giocatore fermo che può solo ruotare: un vincolo voluto, che mantiene anche i movimenti di camera confortevoli in VR",
 "Across the five-person team I acted as the project's VR lead, audio lead and art director, modeling and texturing the main assets and handling most of their in-engine integration myself alongside the rest of the team. Day to day, that meant:": "Nel team di cinque persone ho svolto il ruolo di responsabile VR, responsabile audio e art director, modellando e texturizzando gli asset principali e occupandomi personalmente della maggior parte della loro integrazione nel motore, insieme al resto del team. Nel concreto:",
 "Art direction": "Direzione artistica",
 "VR implementation": "Implementazione VR",
 "3D modeling &amp; texturing of principal assets": "Modellazione 3D &amp; texturing degli asset principali",
 "Sound design and Audio system architecture (FMOD)": "Sound design e architettura del sistema audio (FMOD)",
 "Narrative writing": "Scrittura narrativa",
 "Click for sound": "Clicca per l'audio",
 "One shared turret controller drives combat on both PC and VR.": "Un unico controller della torretta gestisce il combattimento sia su PC sia in VR.",
 "The core loop runs through a single <code>ITurretController</code> interface, so both platforms use the same combat logic without diverging balance. I implemented the VR side.": "Il ciclo principale passa da una sola interfaccia <code>ITurretController</code>, così le due piattaforme usano la stessa logica di combattimento senza bilanciamenti diversi. Ho implementato il lato VR.",
 "Modeled and textured the turret's machine gun: an MG34 with a double-drum magazine, chosen to justify the historical 75-round capacity without a belt-fed reload in VR.": "Ho modellato e texturizzato la mitragliatrice della torretta: una MG34 con caricatore a doppio tamburo, scelta per giustificare la capacità storica di 75 colpi senza dover gestire in VR una ricarica a nastro.",
 "Built the scoring rules, reading hit location off each enemy's hitbox to reward headshots and distance over point-blank body shots.": "Ho realizzato le regole del punteggio, leggendo il punto d'impatto dall'hitbox di ogni nemico per premiare i colpi alla testa e la distanza rispetto ai colpi al corpo a bruciapelo.",
 "Anatolij, the mechanic, scavenges on his own and can be rescued when the horde grabs him.": "Anatolij, il meccanico, recupera risorse da solo e può essere salvato quando l'orda lo afferra.",
 "He returns automatically or on command and hands what he picked up to the player's inventory.": "Rientra in automatico o su comando e consegna all'inventario del giocatore ciò che ha raccolto.",
 "While outside he can be grabbed by the horde, triggering a timed rescue event: the player has to shoot the attacker without hitting him.": "Mentre è fuori può essere afferrato dall'orda, innescando un evento di salvataggio a tempo: il giocatore deve colpire l'aggressore senza colpire lui.",
 "I built his defensive role back inside the tank (the automated machine gun he mans at the front of the vehicle) and wrote the five scripted dialogue beats the two characters trade over a run, carrying the narrative without cutscenes.": "Ho realizzato il suo ruolo difensivo dentro il carro (la mitragliatrice automatica che presidia sul davanti del veicolo) e ho scritto i cinque scambi di dialogo che i due personaggi si scambiano durante una partita, per portare avanti la narrazione senza filmati.",
 "Scavenged materials are combined into buffs through scriptable-object recipes.": "I materiali recuperati si combinano in potenziamenti tramite ricette basate su scriptable object.",
 "Two dropped items make a buff for the mechanic (bandages, plated armor, stimulants) or the turret (ammo, damage rounds, faster reloads), and only while the mechanic is inside the tank.": "Due oggetti raccolti producono un potenziamento per il meccanico (bende, armatura a piastre, stimolanti) o per la torretta (munizioni, proiettili più potenti, ricariche più rapide), e solo quando il meccanico è dentro il carro.",
 "A run's score also converts into currency for a progression shop between matches.": "Il punteggio di una partita si converte anche in valuta per un negozio di progressione tra una partita e l'altra.",
 "My contribution: the FMOD feedback for crafting actions, mixed into the same bus setup as the rest of the game.": "Il mio contributo: il feedback FMOD per le azioni di crafting, mixato nello stesso sistema di bus del resto del gioco.",
 "A complete menu flow around the game: main menu, shop, per-level leaderboards and settings.": "Un flusso di menu completo attorno al gioco: menu principale, negozio, classifiche per livello e impostazioni.",
 "Settings cover display, controls and audio, with separate sliders for master, sound effects, music, environment, zombies and gunshots.": "Le impostazioni coprono display, comandi e audio, con slider separati per volume generale, effetti sonori, musica, ambiente, zombie e spari.",
 "The interface can be switched live between Italian and English.": "L'interfaccia si può cambiare dal vivo tra italiano e inglese.",
 "Each level has its own leaderboard, ranked by score.": "Ogni livello ha la propria classifica, ordinata per punteggio.",
 "Four enemy archetypes, each built around a distinct combat read.": "Quattro tipi di nemico, ciascuno costruito attorno a un diverso modo di combatterlo.",
 "<strong>Farmer:</strong> slow, and its pitchfork punishes the mechanic.": "<strong>Contadino:</strong> lento, e il suo forcone punisce il meccanico.",
 "<strong>Crawler:</strong> climbs onto the tank to steal loot before fleeing.": "<strong>Strisciante:</strong> sale sul carro per rubare bottino prima di fuggire.",
 "<strong>Bloated:</strong> its pustules detonate into an area attack.": "<strong>Gonfio:</strong> le sue pustole esplodono in un attacco ad area.",
 "<strong>Spore:</strong> heals nearby enemies.": "<strong>Spora:</strong> cura i nemici vicini.",
 "I modeled and textured all four, including the Farmer's pitchfork and hat props, and handled most of their in-engine setup myself, while the team built the NavMesh-driven AI and horde-scaling logic on top.": "Li ho modellati e texturizzati tutti e quattro, compresi gli oggetti di scena del Contadino (forcone e cappello), e mi sono occupato di buona parte della loro configurazione nel motore, mentre il team ha costruito sopra l'IA basata su NavMesh e la logica di crescita dell'orda.",
 "VR reload &amp; recoil<br>footage pending": "Ricarica &amp; rinculo VR<br>filmato in arrivo",
 "The VR implementation and the audio system were mine end to end.": "L'implementazione VR e il sistema audio sono stati interamente opera mia.",
 "Built the dual-grab drum magazine with a physically driven reload handle and matching recoil feedback, extending the XR Interaction Toolkit myself to support offset grabs and drop-height adjustment, neither of which it handles out of the box.": "Ho realizzato il caricatore a tamburo con doppia presa, con una maniglia di ricarica guidata dalla fisica e un feedback di rinculo coerente, estendendo io stesso l'XR Interaction Toolkit per supportare prese con offset e regolazione dell'altezza di rilascio, due cose che non gestisce di serie.",
 "Architected the whole FMOD setup: independent buses/VCAs for master, ambience and zombie SFX, mixed to keep dozens of simultaneous spatialized enemy and environment sounds legible through the same bus graph.": "Ho progettato l'intero sistema FMOD: bus/VCA indipendenti per volume generale, ambiente ed effetti degli zombie, mixati in modo che decine di suoni spazializzati di nemici e ambiente restino leggibili all'interno dello stesso grafo di bus.",
 "Four assets that show how I took the game's look from first versions to its final state. Drag the slider on each one to compare.": "Quattro asset che mostrano come ho portato l'aspetto del gioco dalle prime versioni allo stato finale. Trascina lo slider su ciascuno per confrontare.",
 "Tank: rebuilt from scratch": "Carro armato: rifatto da zero",
 "Original (teammate)": "Originale (collega)",
 "Rebuilt": "Rifatto",
 "The original tank was modeled by a teammate. When I took over art direction and modeling, I rebuilt it from zero.": "Il carro armato originale era stato modellato da un collega. Quando ho preso in mano la direzione artistica e la modellazione, l'ho rifatto da zero.",
 "Vertex count cut from about 15.5k to about 6.3k (roughly 59% fewer)": "Numero di vertici ridotto da circa 15,5k a circa 6,3k (circa il 59% in meno)",
 "Added detail: cables, pipes, hatches and more": "Dettagli aggiunti: cavi, tubi, botole e altro",
 "Textured to match the rest of the scene": "Texturizzato in linea con il resto della scena",
 "Farmyard: map and art": "Fattoria: mappa e grafica",
 "Final": "Finale",
 "The farmyard was my own design, including the layout of the map. I took it from a greybox to the final dressed scene.": "La fattoria è un mio progetto, compreso il layout della mappa. L'ho portata da un greybox alla scena finale completa.",
 "Layout and level design by me": "Layout e level design miei",
 "All materials share a single texture atlas to keep rendering cost low": "Tutti i materiali condividono un unico atlante di texture per contenere il costo di rendering",
 "Lighting and sky chosen to set the game's mood": "Illuminazione e cielo scelti per dare il tono del gioco",
 "Anatolij: character": "Anatolij: personaggio",
 "Base model (teammate)": "Modello base (collega)",
 "The base model of Anatolij, the mechanic, was made by a teammate. I rebuilt it with all the details and textured it.": "Il modello base di Anatolij, il meccanico, era stato realizzato da un collega. L'ho rifatto aggiungendo tutti i dettagli e l'ho texturizzato.",
 "Added all the details on top of the base mesh": "Ho aggiunto tutti i dettagli sopra la mesh di base",
 "Full texturing": "Texturing completo",
 "Zombie: from base to horde": "Zombie: dal modello base all'orda",
 "Base model": "Modello base",
 "The zombie started from the same white base model and became the green zombie that fills the whole project, from gameplay to the promotional art.": "Lo zombie è partito dallo stesso modello base bianco ed è diventato lo zombie verde che riempie tutto il progetto, dal gameplay alla grafica promozionale.",
 "Modeled and textured by me": "Modellato e texturizzato da me",
 "One reusable asset for the entire horde": "Un unico asset riutilizzabile per l'intera orda",
 "Some of the game's assets are on Sketchfab. Open one to inspect it in 3D.": "Alcuni asset del gioco sono su Sketchfab. Aprine uno per ispezionarlo in 3D.",
 "<a href=\"index.html#models\" class=\"project-card__link\">See all 3D models →</a>": "<a href=\"index.html#models\" class=\"project-card__link\">Vedi tutti i modelli 3D →</a>",
 "<span>← Previous project</span>Project Normandia": "<span>← Progetto precedente</span>Project Normandia",
 "<span>Next project →</span>Black Hole Render": "<span>Progetto successivo →</span>Black Hole Render",
 "@desc|Wave-based survival shooter for PC and VR, built with a five-person team.": "Sparatutto survival a ondate per PC e VR, realizzato da un team di cinque persone.",
 "Solo: code, art and design": "Da solo: codice, grafica e design",
 "Time": "Tempo",
 "Under 7 hours": "Meno di 7 ore",
 "School exam": "Esame scolastico",
 "A solo exploration/puzzle game built entirely from scratch in less than 7 hours, for a timed school exam. Code, art and 3D models are all made by hand.": "Un gioco di esplorazione e puzzle in solitaria, costruito interamente da zero in meno di 7 ore per un esame scolastico a tempo. Codice, grafica e modelli 3D sono tutti fatti a mano.",
 "The player wakes up lost in a snowy forest at night and has to gather sticks and keys, unlock gates and follow environmental hints to survive until morning, with footprints fading in the snow as they walk.": "Il giocatore si sveglia perso in una foresta innevata di notte e deve raccogliere bastoni e chiavi, aprire cancelli e seguire gli indizi dell'ambiente per sopravvivere fino al mattino, mentre le impronte nella neve svaniscono a ogni passo.",
 "The game has 3 different endings depending on how the player handles the night, plus a fully working main menu, pause menu and end screens.": "Il gioco ha 3 finali diversi a seconda di come il giocatore affronta la notte, oltre a menu principale, menu di pausa e schermate finali completamente funzionanti.",
 "Given the time constraint it is a small-scope prototype, but one I'd like to keep expanding with more systems and content.": "Dati i tempi stretti è un prototipo di portata limitata, ma vorrei continuare ad ampliarlo con altri sistemi e contenuti.",
 "Solo project, built from an empty template under a strict ~7 hour time limit for a school exam. Every asset (models, materials, UI, sound) was made from scratch, alongside the full gameplay loop.": "Progetto in solitaria, costruito da un template vuoto con un limite di tempo rigido di circa 7 ore per un esame scolastico. Ogni asset (modelli, materiali, UI, suoni) è stato realizzato da zero, insieme al ciclo di gioco completo.",
 "Player controller and footstep/footprint system": "Controller del giocatore e sistema di passi/impronte",
 "Key, stick and gate interaction mechanics": "Meccaniche di interazione con chiavi, bastoni e cancelli",
 "Environmental hint triggers and 3 branching endings": "Trigger di indizi ambientali e 3 finali ramificati",
 "Functional main menu, pause menu and end screens": "Menu principale, menu di pausa e schermate finali funzionanti",
 "Terrain, snow environment and all assets built from scratch": "Terreno, ambiente innevato e tutti gli asset realizzati da zero",
 "<span>← Previous project</span>Black Hole Render": "<span>← Progetto precedente</span>Black Hole Render",
 "<span>Next project →</span>Project Normandia": "<span>Progetto successivo →</span>Project Normandia",
 "@desc|Solo exploration/puzzle game built from scratch in under 7 hours, with 3 endings.": "Gioco di esplorazione e puzzle in solitaria, realizzato da zero in meno di 7 ore, con 3 finali.",
 "← Back to 3D models": "← Torna ai modelli 3D",
 "Type": "Tipo",
 "Personal study": "Studio personale",
 "Tool": "Strumento",
 "Techniques": "Tecniche",
 "Shaders, geometry nodes": "Shader, geometry nodes",
 "A standalone render exploring gravitational lensing, in the style of Interstellar's Gargantua. Built entirely in Blender using shaders and geometry nodes, following <a href=\"https://www.youtube.com/watch?v=XWv1Ajc3tfU\" target=\"_blank\" rel=\"noopener\">this tutorial</a>. It isn't tied to any project or game, just a personal study of the effect.": "Un render indipendente che esplora la lente gravitazionale, nello stile di Gargantua di Interstellar. Realizzato interamente in Blender con shader e geometry nodes, seguendo <a href=\"https://www.youtube.com/watch?v=XWv1Ajc3tfU\" target=\"_blank\" rel=\"noopener\">questo tutorial</a>. Non è legato a nessun progetto o gioco, è solo uno studio personale dell'effetto.",
 "<span>← Previous project</span>The Last Gunner: No Way Out": "<span>← Progetto precedente</span>The Last Gunner: No Way Out",
 "<span>Next project →</span>Freezing Cold": "<span>Progetto successivo →</span>Freezing Cold",
 "@desc|Standalone Blender render exploring gravitational lensing with shaders and geometry nodes.": "Render Blender indipendente che esplora la lente gravitazionale con shader e geometry nodes.",
 "LAYER 05 - PRIVACY": "LIVELLO 05 - PRIVACY",
 "Last updated: 20 October 2026.": "Ultimo aggiornamento: 20 ottobre 2026.",
 "In short": "In breve",
 "This site is a personal portfolio. It does not use cookies, analytics, advertising or tracking of any kind, and it does not ask you for any personal data.": "Questo sito è un portfolio personale. Non usa cookie, analytics, pubblicità né alcun tipo di tracciamento, e non ti chiede alcun dato personale.",
 "What loads when you open a page": "Cosa si carica quando apri una pagina",
 "Pages, images, videos and fonts are served from this site's own files. Fonts are self-hosted, so no request goes to Google Fonts or similar services.": "Pagine, immagini, video e font sono serviti dai file di questo sito. I font sono ospitati in locale, quindi non parte nessuna richiesta verso Google Fonts o servizi simili.",
 "The site is hosted on GitHub Pages. Like any web host, GitHub may process technical data such as your IP address in its server logs. See the <a href=\"https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement\" target=\"_blank\" rel=\"noopener\">GitHub Privacy Statement</a>.": "Il sito è ospitato su GitHub Pages. Come ogni servizio di hosting, GitHub può trattare dati tecnici come il tuo indirizzo IP nei log dei suoi server. Vedi l'<a href=\"https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement\" target=\"_blank\" rel=\"noopener\">informativa sulla privacy di GitHub</a>.",
 "3D model viewer (Sketchfab)": "Visualizzatore 3D (Sketchfab)",
 "The 3D Models section shows preview images that are stored on this site. If you click \"View in 3D\", the viewer is loaded from Sketchfab, a third-party service, and Sketchfab may receive your IP address and set its own cookies. Nothing is loaded from Sketchfab unless you open a model. See the <a href=\"https://sketchfab.com/privacy\" target=\"_blank\" rel=\"noopener\">Sketchfab Privacy Policy</a>.": "La sezione Modelli 3D mostra immagini di anteprima salvate su questo sito. Se clicchi su \"Vedi in 3D\", il visualizzatore viene caricato da Sketchfab, un servizio di terze parti, che può ricevere il tuo indirizzo IP e impostare propri cookie. Da Sketchfab non si carica nulla finché non apri un modello. Vedi l'<a href=\"https://sketchfab.com/privacy\" target=\"_blank\" rel=\"noopener\">informativa sulla privacy di Sketchfab</a>.",
 "External links": "Link esterni",
 "Links to LinkedIn, GitHub, Sketchfab and YouTube lead to services with their own privacy policies. Nothing is loaded from them until you follow a link.": "I link a LinkedIn, GitHub, Sketchfab e YouTube portano a servizi con le proprie informative sulla privacy. Da questi servizi non si carica nulla finché non segui un link.",
 "Contact": "Contatti",
 "If you write to <a href=\"mailto:battistonmatteo.work@gmail.com\">battistonmatteo.work@gmail.com</a>, your email address and message are used only to reply to you. For any question about this page, or to ask to have your messages deleted, use the same address.": "Se scrivi a <a href=\"mailto:battistonmatteo.work@gmail.com\">battistonmatteo.work@gmail.com</a>, il tuo indirizzo email e il tuo messaggio saranno usati solo per risponderti. Per qualsiasi domanda su questa pagina, o per chiedere la cancellazione dei tuoi messaggi, usa lo stesso indirizzo.",
 "<a href=\"index.html\">← Back to the portfolio</a>": "<a href=\"index.html\">← Torna al portfolio</a>",
 "@desc|Privacy information for the Matteo Battiston portfolio: no cookies, no analytics, no tracking.": "Informazioni sulla privacy del portfolio di Matteo Battiston: nessun cookie, nessun analytics, nessun tracciamento.",
 "@alt|Soldier kneeling and firing a Thompson near the landing craft on the beach": "Soldato inginocchiato che spara con un Thompson vicino al mezzo da sbarco sulla spiaggia",
 "@alt|The tank and an abandoned truck outside a farmhouse at dusk": "Il carro armato e un camion abbandonato davanti a una fattoria al tramonto",
 "@alt|Bonfire glowing next to a cabin in a snowy forest at night, Freezing Cold cover art": "Falò acceso accanto a una baita in una foresta innevata di notte, copertina di Freezing Cold",
 "@alt|PSX Pine Tree 3D model preview": "Anteprima del modello 3D PSX Pine Tree",
 "@alt|PSX Tiger 1 3D model preview": "Anteprima del modello 3D PSX Tiger 1",
 "@alt|Zombie 3D model preview": "Anteprima del modello 3D Zombie",
 "@alt|Marble Revolver 3D model preview": "Anteprima del modello 3D Marble Revolver",
 "@alt|Kiwi (bird) 3D model preview": "Anteprima del modello 3D Kiwi (uccello)",
 "@alt|Soda Can 3D model preview": "Anteprima del modello 3D Soda Can",
 "@alt|Black hole render with a lensed accretion disk, in the style of Interstellar's Gargantua": "Render di un buco nero con disco di accrescimento deformato dalla lente gravitazionale, nello stile di Gargantua di Interstellar",
 "@alt|GameModeManager architecture diagram: platform and mode detection, four player prefab variants, environment and input activation": "Schema dell'architettura di GameModeManager: rilevamento di piattaforma e modalità, quattro varianti di prefab del giocatore, attivazione di ambiente e input",
 "@alt|Close-up of the M1 Garand, Thompson M1A1, Lee-Enfield and StG 44 weapon models": "Primo piano dei modelli delle armi M1 Garand, Thompson M1A1, Lee-Enfield e StG 44",
 "@alt|Tactical belt with four ammo pouches for the VR magazine reload system": "Cintura tattica con quattro tasche per munizioni per il sistema di ricarica dei caricatori in VR",
 "@alt|Sherman tank on the beach highlighted as an interactable object, ready to show historical context": "Carro Sherman sulla spiaggia evidenziato come oggetto interattivo, pronto a mostrare il contesto storico",
 "@alt|Sherman tank and landing craft on the beach at sunset, part of the optimized battle scene": "Carro Sherman e mezzo da sbarco sulla spiaggia al tramonto, parte della scena di battaglia ottimizzata",
 "@alt|Soldier advancing with rifle raised across the beach under fire": "Soldato che avanza con il fucile alzato sulla spiaggia sotto il fuoco",
 "@alt|Soldiers advancing under fire past a landing craft and crashed plane at sunset": "Soldati che avanzano sotto il fuoco oltre un mezzo da sbarco e un aereo precipitato al tramonto",
 "@alt|Diegetic mode-select menu: Tour and FPS dog tags hanging in front of the landing craft": "Menu diegetico di selezione della modalità: le piastrine Tour e FPS appese davanti al mezzo da sbarco",
 "@alt|Crashed plane burning on the beach with the invasion fleet offshore": "Aereo precipitato in fiamme sulla spiaggia con la flotta d'invasione al largo",
 "@alt|Two soldiers advancing through fog past beach obstacles under fire": "Due soldati che avanzano nella nebbia oltre gli ostacoli della spiaggia sotto il fuoco",
 "@alt|The rebuilt tank with textures, cables, pipes and hatches": "Il carro armato rifatto con texture, cavi, tubi e botole",
 "@alt|Flat-shaded yellow tank model, the original version": "Modello giallo del carro armato con ombreggiatura piatta, la versione originale",
 "@aria-label|Drag to compare: Original (teammate) on the left, Rebuilt on the right": "Trascina per confrontare: Originale (collega) a sinistra, Rifatto a destra",
 "@alt|The finished farmyard map with textured buildings, trees, fog and a blood-red dusk sky": "La mappa finita della fattoria con edifici texturizzati, alberi, nebbia e un cielo rosso sangue al tramonto",
 "@alt|Greybox of the farmyard with flat-colored buildings and a tank": "Greybox della fattoria con edifici a colori piatti e un carro armato",
 "@aria-label|Drag to compare: Greybox on the left, Final on the right": "Trascina per confrontare: Greybox a sinistra, Finale a destra",
 "@alt|The final mechanic character with gas mask, overalls and boots": "Il personaggio finale del meccanico con maschera antigas, tuta e stivali",
 "@alt|Plain grey low-poly base model of the mechanic": "Modello base grigio low-poly del meccanico",
 "@aria-label|Drag to compare: Base model (teammate) on the left, Final on the right": "Trascina per confrontare: Modello base (collega) a sinistra, Finale a destra",
 "@alt|The final green zombie with torn, bloodied skin, red eyes and a wide grin, arms reaching forward": "Lo zombie verde finale con la pelle lacerata e insanguinata, occhi rossi e un largo ghigno, con le braccia protese in avanti",
 "@alt|Plain grey low-poly base model, the starting point for the zombie": "Modello base grigio low-poly, il punto di partenza dello zombie",
 "@aria-label|Drag to compare: Base model on the left, Final on the right": "Trascina per confrontare: Modello base a sinistra, Finale a destra",
 "@alt|Turret POV firing on a horde approaching through the canyon level": "Visuale dalla torretta mentre spara contro un'orda che avanza nel livello del canyon",
 "@alt|Clean front-facing render of the mechanic character model": "Render pulito frontale del modello del personaggio del meccanico",
 "@alt|Lightning striking a cathedral tower over a rain-soaked graveyard": "Un fulmine colpisce il campanile di una cattedrale sopra un cimitero inzuppato di pioggia",
 "@alt|Clean three-quarter render of the tank model": "Render pulito a tre quarti del modello del carro armato",
 "@alt|The tank parked in front of a farmhouse at dusk": "Il carro armato parcheggiato davanti a una fattoria al tramonto",
 "@alt|Rows of low-poly zombies reaching toward the camera on a blood-red background": "File di zombie low-poly che si protendono verso la camera su uno sfondo rosso sangue",
 "@alt|Bonfire burning next to a cabin in a snowy pine forest at night": "Falò acceso accanto a una baita in una pineta innevata di notte",
 "@alt|Snowy forest path with the on-screen line 'I have to be careful not to wander too far away'": "Sentiero in una foresta innevata con la scritta a schermo 'Devo stare attento a non allontanarmi troppo'",
 "@alt|Locked gate hint pointing the player toward a cabin across the map": "Indizio del cancello chiuso che indirizza il giocatore verso una baita dall'altra parte della mappa",
 "@alt|Extreme close-up of the event horizon against a blue-tinted backdrop": "Primo piano estremo dell'orizzonte degli eventi su uno sfondo tendente al blu",
 "@alt|Wide angle of the black hole set against a pink nebula backdrop": "Grandangolo del buco nero su uno sfondo di nebulosa rosa",
 "@alt|Geometry nodes setup driving the lensing sphere mesh in Blender": "Configurazione dei geometry nodes che governa la mesh sferica della lente in Blender",
 "@alt|Shader node graph driving the accretion disk material in Blender": "Grafo dei nodi dello shader che governa il materiale del disco di accrescimento in Blender",
 "The site remembers your language choice (English or Italian) in your browser's local storage. It stays on your device and is never sent anywhere.": "Il sito ricorda la lingua che scegli (inglese o italiano) nella memoria locale del tuo browser. Resta sul tuo dispositivo e non viene mai inviata altrove.",
 "Last updated: 27 October 2026.": "Ultimo aggiornamento: 27 ottobre 2026.",
 "Go to image {n}": "Vai all'immagine {n}",
 "Play videos": "Riproduci i video",
 "Back to top": "Torna su",
 "Close": "Chiudi",
 "Close viewer": "Chiudi il visualizzatore",
 "Open on Sketchfab ↗": "Apri su Sketchfab ↗",
 "Viewer by Sketchfab": "Visualizzatore di Sketchfab",
 "{title} - 3D model": "{title} - modello 3D",
 "Language": "Lingua"
};

  function detect() {
    var param = null;
    try { param = new URLSearchParams(location.search).get('lang'); } catch (e) {}
    if (param === 'it' || param === 'en') {
      try { localStorage.setItem('lang', param); } catch (e) {}
      return param;
    }
    try {
      var saved = localStorage.getItem('lang');
      if (saved === 'it' || saved === 'en') return saved;
    } catch (e) {}
    return (navigator.language || '').toLowerCase().indexOf('it') === 0 ? 'it' : 'en';
  }

  var lang = detect();

  // t('Go to image {n}', { n: 2 }) -> localized string (falls back to the English text)
  function t(text, vars) {
    var out = (lang === 'it' && IT[text]) || text;
    if (vars) {
      Object.keys(vars).forEach(function (k) { out = out.split('{' + k + '}').join(vars[k]); });
    }
    return out;
  }
  window.I18N = { lang: lang, t: t, dict: IT };

  var norm = function (s) { return s.replace(/\s+/g, ' ').trim(); };

  function translateDom() {
    var INLINE = { A: 1, STRONG: 1, EM: 1, B: 1, I: 1, SPAN: 1, CODE: 1, BR: 1, SMALL: 1, ABBR: 1, SUP: 1, SUB: 1 };
    var SKIP = { SCRIPT: 1, STYLE: 1, SVG: 1, VIDEO: 1, NOSCRIPT: 1, TEXTAREA: 1, PRE: 1, CODE: 1, IFRAME: 1, IMG: 1, INPUT: 1, SOURCE: 1 };
    var TEXT = { P: 1, LI: 1, H1: 1, H2: 1, H3: 1, H4: 1, H5: 1, DT: 1, DD: 1, FIGCAPTION: 1, LABEL: 1, BUTTON: 1, A: 1, SPAN: 1, STRONG: 1, TD: 1, TH: 1, SUMMARY: 1 };
    var LETTERS = /[A-Za-zÀ-ÿ]/;

    function isLeaf(el) {
      var all = el.querySelectorAll('*');
      for (var i = 0; i < all.length; i++) { if (!INLINE[all[i].tagName]) return false; }
      return true;
    }
    function hasOwnText(el) {
      for (var i = 0; i < el.childNodes.length; i++) {
        var n = el.childNodes[i];
        if (n.nodeType === 3 && LETTERS.test(n.textContent)) return true;
      }
      return false;
    }
    function walk(el) {
      for (var i = 0; i < el.children.length; i++) {
        var c = el.children[i];
        if (SKIP[c.tagName.toUpperCase()]) continue;
        if (c.closest('.sidebar__contact, .lightbox-overlay, .model-viewer')) continue;
        if ((TEXT[c.tagName] || hasOwnText(c)) && isLeaf(c) && /[A-Za-zÀ-ÿ]{2,}/.test(c.textContent)) {
          var hit = IT[norm(c.innerHTML)];
          if (hit) c.innerHTML = hit;
        } else {
          walk(c);
        }
      }
    }
    walk(document.body);

    // alt / aria-label / title attributes
    ['alt', 'aria-label', 'title'].forEach(function (attr) {
      document.querySelectorAll('[' + attr + ']').forEach(function (el) {
        if (el.closest('.lightbox-overlay, .model-viewer')) return;
        var hit = IT['@' + attr + '|' + norm(el.getAttribute(attr))];
        if (hit) el.setAttribute(attr, hit);
      });
    });

    var ti = IT['@title|' + document.title];
    if (ti) document.title = ti;
    var meta = document.querySelector('meta[name="description"]');
    if (meta) {
      var d = IT['@desc|' + meta.content];
      if (d) meta.content = d;
    }
  }

  function chooseLang(l) {
    try { localStorage.setItem('lang', l); } catch (e) {}
    var url = new URL(location.href);
    url.searchParams.delete('lang');
    location.replace(url.toString());
  }

  function buildSwitch(extraClass) {
    var wrap = document.createElement('div');
    wrap.className = 'lang-switch' + (extraClass ? ' ' + extraClass : '');
    wrap.setAttribute('role', 'group');
    wrap.setAttribute('aria-label', t('Language'));
    ['en', 'it'].forEach(function (l) {
      var b = document.createElement('button');
      b.type = 'button';
      b.textContent = l.toUpperCase();
      b.setAttribute('lang', l);
      b.setAttribute('aria-pressed', String(l === lang));
      b.addEventListener('click', function () { if (l !== lang) chooseLang(l); });
      wrap.appendChild(b);
    });
    return wrap;
  }

  function init() {
    document.documentElement.lang = lang;
    if (lang === 'it') translateDom();
    var sidebar = document.querySelector('.sidebar');
    if (sidebar) sidebar.appendChild(buildSwitch());
    var topbar = document.querySelector('.project-topbar');
    if (topbar) topbar.appendChild(buildSwitch('lang-switch--top'));
    document.documentElement.classList.remove('i18n-pending');
  }

  try { init(); } catch (e) { document.documentElement.classList.remove('i18n-pending'); }
})();
