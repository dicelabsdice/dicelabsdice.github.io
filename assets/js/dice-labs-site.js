(function() {
	var supportedLanguages = ['es', 'en', 'fr', 'de', 'ru'];
	var supportedThemes = ['dark', 'light', 'gray'];
	var storageKeys = {
		language: 'dice-labs-language',
		theme: 'dice-labs-theme'
	};
	var themeColors = {
		dark: '#090c10',
		light: '#eef2f6',
		gray: '#14171b'
	};
	var languageNames = {
		es: 'Espa\u00f1ol',
		en: 'English',
		fr: 'Fran\u00e7ais',
		de: 'Deutsch',
		ru: '\u0420\u0443\u0441\u0441\u043a\u0438\u0439'
	};
	var translations = {
		es: {
			'meta.title': 'DICE LABS',
			'nav.home': 'Inicio',
			'nav.whatsNext': 'Visi\u00f3n',
			'nav.keyRoutes': 'Contenido',
			'nav.contact': 'Contacto',
			'nav.language': 'Idioma',
			'nav.theme': 'Tema',
			'theme.dark': 'Oscuro',
			'theme.light': 'Claro',
			'theme.gray': 'Gris',
			'intro.title': 'Bienvenido',
			'intro.lead': 'Laboratorio digital independiente para apps, sitios y herramientas creativas.',
			'intro.headline': 'DICE LABS construye<br class="mobile-hide" />apps, landings y experimentos digitales',
			'intro.body': 'Este dominio ser\u00e1 el punto de encuentro para piezas digitales que pueden crecer y evolucionar de forma independiente: aplicaciones para <strong>Android</strong>, aplicaciones para <strong>Windows</strong>, aplicaciones <strong>web</strong>, landing pages, publicaciones, experimentos y documentaciones. Sus canales de distribuci\u00f3n y acceso vivir\u00e1n dentro de <strong>dice-labs.com</strong>. La demo de la primera pieza ya est\u00e1 en l\u00ednea y el resto tambi\u00e9n ir\u00e1 creciendo desde aqu\u00ed.',
			'intro.primary': 'Ver demo 1&deg; juego',
			'intro.secondary': 'Explorar visi\u00f3n',
			'main.title': 'Visi\u00f3n',
			'features.heading': 'Un dominio, m\u00faltiples frentes de trabajo',
			'features.subheading': 'La idea es publicar piezas distintas sin mezclar sus bases.',
			'features.apps.title': 'Apps y cat\u00e1logo central',
			'features.apps.body': 'Este sitio enlazar\u00e1 a un escaparate de apps con descargas, avisos de privacidad y p\u00e1ginas por producto.',
			'features.landings.title': 'Landings por producto',
			'features.landings.body': 'Cada app o iniciativa tendr\u00e1 su propia p\u00e1gina con personalidad, funcionamiento, distribuci\u00f3n y contexto propios.',
			'features.publish.title': 'Publicaci\u00f3n simple',
			'features.publish.body': 'La meta es publicar demos, p\u00e1ginas y recursos de forma directa y f\u00e1cil de entender.',
			'features.lab.title': 'Laboratorio experimental',
			'features.lab.body': 'DICE LABS tambi\u00e9n puede alojar pruebas de UI, automatizaci\u00f3n, ideas visuales y herramientas que todav\u00eda est\u00e1n madurando.',
			'features.cta.apps': 'Ir a apps',
			'features.cta.contact': 'Ir a contacto',
			'routes.title': 'Contenido',
			'routes.kd.body': 'Uno de nuestros desarrollos m\u00e1s recientes para el sector automotriz, planteado como una soluci\u00f3n t\u00e9cnica de car\u00e1cter confidencial.',
			'routes.kd.button': 'Ver referencia',
			'routes.apps.body': 'Cat\u00e1logo de aplicaciones publicadas por DICE LABS, con p\u00e1ginas y documentaci\u00f3n por cada producto.',
			'routes.apps.button': 'Ver plan',
			'routes.sliding.body': 'Una de las primeras apps que servir\u00e1 como referencia para la futura estructura de p\u00e1ginas individuales dentro del dominio.',
			'routes.sliding.button': 'Seguir pista',
			'footer.title': 'Contacto',
			'footer.heading': 'Punto de enlace actual de DICE LABS',
			'footer.body': 'Por ahora este bloque queda reservado para los correos principales del proyecto.<br />M\u00e1s adelante aqu\u00ed pueden aparecer redes nuevas, soporte por producto o informaci\u00f3n comercial m\u00e1s formal.',
			'footer.primaryEmail': 'Correo principal',
			'footer.technicalEmail': 'Correo t\u00e9cnico',
			'pdf.close': 'Cerrar',
			'footer.copyright': '&copy; DICE LABS.'
		},
		en: {
			'meta.title': 'DICE LABS',
			'nav.home': 'Home',
			'nav.whatsNext': 'Vision',
			'nav.keyRoutes': 'Content',
			'nav.contact': 'Contact',
			'nav.language': 'Language',
			'nav.theme': 'Theme',
			'theme.dark': 'Dark',
			'theme.light': 'Light',
			'theme.gray': 'Gray',
			'intro.title': 'Welcome',
			'intro.lead': 'Independent digital lab for apps, sites and creative tools.',
			'intro.headline': 'DICE LABS builds<br class="mobile-hide" />apps, landing pages and digital experiments',
			'intro.body': 'This domain will be the meeting point for digital pieces that can grow and evolve independently: <strong>Android</strong> apps, <strong>Windows</strong> apps, <strong>web</strong> apps, landing pages, publications, experiments and documentation. Their distribution channels and access points will live inside <strong>dice-labs.com</strong>. The first piece demo is already online and the rest will keep growing from here.',
			'intro.primary': 'See 1st game demo',
			'intro.secondary': 'Explore the vision',
			'main.title': 'Vision',
			'features.heading': 'One domain, multiple work fronts',
			'features.subheading': 'The idea is to publish distinct pieces without mixing their foundations.',
			'features.apps.title': 'Apps and central catalog',
			'features.apps.body': 'This site links to an app catalog with downloads, privacy notices and product-specific pages.',
			'features.landings.title': 'Product landing pages',
			'features.landings.body': 'Each app or initiative will have its own page with its own personality, functionality, distribution and context.',
			'features.publish.title': 'Simple publishing',
			'features.publish.body': 'The goal is to publish demos, pages and resources directly in a way that is easy to understand.',
			'features.lab.title': 'Experimental lab',
			'features.lab.body': 'DICE LABS can also host UI tests, automation, visual ideas and tools that are still maturing.',
			'features.cta.apps': 'Go to apps',
			'features.cta.contact': 'Go to contact',
			'routes.title': 'Content',
			'routes.kd.body': 'One of our most recent developments for the automotive sector, conceived as a confidential technical solution.',
			'routes.kd.button': 'View reference',
			'routes.apps.body': 'Catalog of apps published by DICE LABS, with dedicated pages and documentation for each product.',
			'routes.apps.button': 'View roadmap',
			'routes.sliding.body': 'One of the first apps that will serve as a reference for the future structure of individual product pages across the domain.',
			'routes.sliding.button': 'Follow progress',
			'footer.title': 'Contact',
			'footer.heading': 'Current contact point for DICE LABS',
			'footer.body': 'For now, this block is reserved for the project\'s main email channels.<br />Later, new social links, product support or more formal business information can appear here.',
			'footer.primaryEmail': 'Main email',
			'footer.technicalEmail': 'Technical email',
			'pdf.close': 'Close',
			'footer.copyright': '&copy; DICE LABS.'
		},
		fr: {
			'meta.title': 'DICE LABS',
			'nav.home': 'Accueil',
			'nav.whatsNext': 'Vision',
			'nav.keyRoutes': 'Contenu',
			'nav.contact': 'Contact',
			'nav.language': 'Langue',
			'nav.theme': 'Th\u00e8me',
			'theme.dark': 'Sombre',
			'theme.light': 'Clair',
			'theme.gray': 'Gris',
			'intro.title': 'Bienvenue',
			'intro.lead': 'Laboratoire num\u00e9rique ind\u00e9pendant pour apps, sites et outils cr\u00e9atifs.',
			'intro.headline': 'DICE LABS construit<br class="mobile-hide" />des apps, des landing pages et des exp\u00e9riences num\u00e9riques',
			'intro.body': 'Ce domaine sera le point de rencontre de pi\u00e8ces num\u00e9riques capables de grandir et d\'\u00e9voluer de mani\u00e8re ind\u00e9pendante : applications <strong>Android</strong>, applications <strong>Windows</strong>, applications <strong>web</strong>, landing pages, publications, exp\u00e9riences et documentations. Leurs canaux de diffusion et d\'acc\u00e8s vivront dans <strong>dice-labs.com</strong>. La d\u00e9mo de la premi\u00e8re pi\u00e8ce est d\u00e9j\u00e0 en ligne et le reste continuera \u00e0 grandir depuis ici.',
			'intro.primary': 'Voir la d\u00e9mo du 1er jeu',
			'intro.secondary': 'Explorer la vision',
			'main.title': 'Vision',
			'features.heading': 'Un domaine, plusieurs fronts de travail',
			'features.subheading': 'L\'id\u00e9e est de publier des projets distincts sans m\u00e9langer leurs bases.',
			'features.apps.title': 'Apps et catalogue central',
			'features.apps.body': 'Ce site renvoie vers un catalogue d\'apps avec t\u00e9l\u00e9chargements, avis de confidentialit\u00e9 et pages par produit.',
			'features.landings.title': 'Landings par produit',
			'features.landings.body': 'Chaque app ou initiative aura sa propre page avec une personnalit\u00e9, un fonctionnement, une distribution et un contexte propres.',
			'features.publish.title': 'Publication simple',
			'features.publish.body': 'L\'objectif est de publier des d\u00e9mos, des pages et des ressources de fa\u00e7on directe et facile \u00e0 comprendre.',
			'features.lab.title': 'Laboratoire exp\u00e9rimental',
			'features.lab.body': 'DICE LABS peut aussi accueillir des tests UI, de l\'automatisation, des id\u00e9es visuelles et des outils encore en maturation.',
			'features.cta.apps': 'Aller aux apps',
			'features.cta.contact': 'Aller au contact',
			'routes.title': 'Contenu',
			'routes.kd.body': 'L\'un de nos d\u00e9veloppements les plus r\u00e9cents pour le secteur automobile, con\u00e7u comme une solution technique de nature confidentielle.',
			'routes.kd.button': 'Voir la r\u00e9f\u00e9rence',
			'routes.apps.body': 'Catalogue d\'applications publi\u00e9es par DICE LABS, avec pages et documentation pour chaque produit.',
			'routes.apps.button': 'Voir le plan',
			'routes.sliding.body': 'L\'une des premi\u00e8res apps qui servira de r\u00e9f\u00e9rence pour la future structure de pages individuelles au sein du domaine.',
			'routes.sliding.button': 'Suivre l\'avancement',
			'footer.title': 'Contact',
			'footer.heading': 'Point de contact actuel de DICE LABS',
			'footer.body': 'Pour l\'instant, ce bloc est r\u00e9serv\u00e9 aux adresses e-mail principales du projet.<br />Plus tard, de nouveaux r\u00e9seaux, un support par produit ou des informations commerciales plus formelles pourront appara\u00eetre ici.',
			'footer.primaryEmail': 'E-mail principal',
			'footer.technicalEmail': 'E-mail technique',
			'pdf.close': 'Fermer',
			'footer.copyright': '&copy; DICE LABS.'
		},
		de: {
			'meta.title': 'DICE LABS',
			'nav.home': 'Start',
			'nav.whatsNext': 'Vision',
			'nav.keyRoutes': 'Inhalte',
			'nav.contact': 'Kontakt',
			'nav.language': 'Sprache',
			'nav.theme': 'Thema',
			'theme.dark': 'Dunkel',
			'theme.light': 'Hell',
			'theme.gray': 'Grau',
			'intro.title': 'Willkommen',
			'intro.lead': 'Unabh\u00e4ngiges digitales Labor f\u00fcr Apps, Websites und kreative Werkzeuge.',
			'intro.headline': 'DICE LABS entwickelt<br class="mobile-hide" />Apps, Landingpages und digitale Experimente',
			'intro.body': 'Diese Domain wird der Treffpunkt f\u00fcr digitale Projekte sein, die unabh\u00e4ngig wachsen und sich weiterentwickeln k\u00f6nnen: <strong>Android</strong>-Apps, <strong>Windows</strong>-Apps, <strong>Web</strong>-Apps, Landingpages, Ver\u00f6ffentlichungen, Experimente und Dokumentationen. Ihre Vertriebswege und Zugriffspunkte werden innerhalb von <strong>dice-labs.com</strong> leben. Die Demo des ersten Bausteins ist bereits online und der Rest wird von hier aus weiter wachsen.',
			'intro.primary': 'Demo des 1. Spiels ansehen',
			'intro.secondary': 'Vision erkunden',
			'main.title': 'Vision',
			'features.heading': 'Eine Domain, mehrere Arbeitsfelder',
			'features.subheading': 'Die Idee ist, unterschiedliche Projekte zu ver\u00f6ffentlichen, ohne ihre Grundlagen zu vermischen.',
			'features.apps.title': 'Apps und zentrales Verzeichnis',
			'features.apps.body': 'Diese Seite f\u00fchrt zu einem App-Katalog mit Downloads, Datenschutzhinweisen und produktbezogenen Seiten.',
			'features.landings.title': 'Produkt-Landingpages',
			'features.landings.body': 'Jede App oder Initiative wird eine eigene Seite mit eigener Pers\u00f6nlichkeit, Funktion, Verteilung und eigenem Kontext haben.',
			'features.publish.title': 'Einfache Ver\u00f6ffentlichung',
			'features.publish.body': 'Das Ziel ist, Demos, Seiten und Ressourcen direkt und leicht verst\u00e4ndlich zu ver\u00f6ffentlichen.',
			'features.lab.title': 'Experimentelles Labor',
			'features.lab.body': 'DICE LABS kann auch UI-Tests, Automatisierung, visuelle Ideen und Werkzeuge beherbergen, die noch reifen.',
			'features.cta.apps': 'Zu den Apps',
			'features.cta.contact': 'Zum Kontakt',
			'routes.title': 'Inhalte',
			'routes.kd.body': 'Eines unserer j\u00fcngsten Projekte f\u00fcr den Automobilsektor, angelegt als vertrauliche technische L\u00f6sung.',
			'routes.kd.button': 'Referenz ansehen',
			'routes.apps.body': 'Katalog von DICE-LABS-Apps mit eigenen Seiten und Dokumentation f\u00fcr jedes Produkt.',
			'routes.apps.button': 'Plan ansehen',
			'routes.sliding.body': 'Eine der ersten Apps, die als Referenz f\u00fcr die k\u00fcnftige Struktur einzelner Produktseiten innerhalb der Domain dienen wird.',
			'routes.sliding.button': 'Fortschritt verfolgen',
			'footer.title': 'Kontakt',
			'footer.heading': 'Aktueller Kontaktpunkt von DICE LABS',
			'footer.body': 'Im Moment ist dieser Bereich f\u00fcr die wichtigsten E-Mail-Kan\u00e4le des Projekts reserviert.<br />Sp\u00e4ter k\u00f6nnen hier neue Netzwerke, Produktsupport oder formellere Gesch\u00e4ftsinformationen erscheinen.',
			'footer.primaryEmail': 'Haupt-E-Mail',
			'footer.technicalEmail': 'Technische E-Mail',
			'pdf.close': 'Schlie\u00dfen',
			'footer.copyright': '&copy; DICE LABS.'
		},
		ru: {
			'meta.title': 'DICE LABS',
			'nav.home': '\u0413\u043b\u0430\u0432\u043d\u0430\u044f',
			'nav.whatsNext': '\u0412\u0438\u0434\u0435\u043d\u0438\u0435',
			'nav.keyRoutes': '\u041a\u043e\u043d\u0442\u0435\u043d\u0442',
			'nav.contact': '\u041a\u043e\u043d\u0442\u0430\u043a\u0442',
			'nav.language': '\u042f\u0437\u044b\u043a',
			'nav.theme': '\u0422\u0435\u043c\u0430',
			'theme.dark': '\u0422\u0435\u043c\u043d\u0430\u044f',
			'theme.light': '\u0421\u0432\u0435\u0442\u043b\u0430\u044f',
			'theme.gray': '\u0421\u0435\u0440\u0430\u044f',
			'intro.title': '\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c',
			'intro.lead': '\u041d\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u0430\u044f \u0446\u0438\u0444\u0440\u043e\u0432\u0430\u044f \u043b\u0430\u0431\u043e\u0440\u0430\u0442\u043e\u0440\u0438\u044f \u0434\u043b\u044f apps, \u0441\u0430\u0439\u0442\u043e\u0432 \u0438 \u043a\u0440\u0435\u0430\u0442\u0438\u0432\u043d\u044b\u0445 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u043e\u0432.',
			'intro.headline': 'DICE LABS \u0441\u043e\u0437\u0434\u0430\u0435\u0442<br class="mobile-hide" />apps, landing pages \u0438 \u0446\u0438\u0444\u0440\u043e\u0432\u044b\u0435 \u044d\u043a\u0441\u043f\u0435\u0440\u0438\u043c\u0435\u043d\u0442\u044b',
			'intro.body': '\u042d\u0442\u043e\u0442 \u0434\u043e\u043c\u0435\u043d \u0441\u0442\u0430\u043d\u0435\u0442 \u0442\u043e\u0447\u043a\u043e\u0439 \u0432\u0441\u0442\u0440\u0435\u0447\u0438 \u0434\u043b\u044f \u0446\u0438\u0444\u0440\u043e\u0432\u044b\u0445 \u043f\u0440\u043e\u0435\u043a\u0442\u043e\u0432, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043c\u043e\u0433\u0443\u0442 \u0440\u0430\u0441\u0442\u0438 \u0438 \u0440\u0430\u0437\u0432\u0438\u0432\u0430\u0442\u044c\u0441\u044f \u043d\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e: \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0434\u043b\u044f <strong>Android</strong>, \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0434\u043b\u044f <strong>Windows</strong>, <strong>web</strong>-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f, landing pages, \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0438, \u044d\u043a\u0441\u043f\u0435\u0440\u0438\u043c\u0435\u043d\u0442\u044b \u0438 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044f. \u0418\u0445 \u043a\u0430\u043d\u0430\u043b\u044b \u0440\u0430\u0441\u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u0438 \u0442\u043e\u0447\u043a\u0438 \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u0431\u0443\u0434\u0443\u0442 \u0436\u0438\u0442\u044c \u0432\u043d\u0443\u0442\u0440\u0438 <strong>dice-labs.com</strong>. \u0414\u0435\u043c\u043e \u043f\u0435\u0440\u0432\u043e\u0439 \u0447\u0430\u0441\u0442\u0438 \u0443\u0436\u0435 \u0432 \u0441\u0435\u0442\u0438, \u0430 \u0432\u0441\u0435 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u043e\u0435 \u0431\u0443\u0434\u0435\u0442 \u0440\u0430\u0441\u0442\u0438 \u043e\u0442\u0441\u044e\u0434\u0430.',
			'intro.primary': '\u0414\u0435\u043c\u043e \u043f\u0435\u0440\u0432\u043e\u0439 \u0438\u0433\u0440\u044b',
			'intro.secondary': '\u0418\u0437\u0443\u0447\u0438\u0442\u044c \u043a\u043e\u043d\u0446\u0435\u043f\u0446\u0438\u044e',
			'main.title': '\u0412\u0438\u0434\u0435\u043d\u0438\u0435',
			'features.heading': '\u041e\u0434\u0438\u043d \u0434\u043e\u043c\u0435\u043d, \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0439 \u0440\u0430\u0431\u043e\u0442\u044b',
			'features.subheading': '\u0418\u0434\u0435\u044f \u0432 \u0442\u043e\u043c, \u0447\u0442\u043e\u0431\u044b \u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u0442\u044c \u0440\u0430\u0437\u043d\u044b\u0435 \u043f\u0440\u043e\u0435\u043a\u0442\u044b, \u043d\u0435 \u0441\u043c\u0435\u0448\u0438\u0432\u0430\u044f \u0438\u0445 \u043e\u0441\u043d\u043e\u0432\u044b.',
			'features.apps.title': 'Apps \u0438 \u0435\u0434\u0438\u043d\u044b\u0439 \u043a\u0430\u0442\u0430\u043b\u043e\u0433',
			'features.apps.body': '\u042d\u0442\u043e\u0442 \u0441\u0430\u0439\u0442 \u0432\u0435\u0434\u0435\u0442 \u043a \u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0443 apps \u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430\u043c\u0438, \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u043e\u0439 \u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u0438 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u043c\u0438 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430\u043c\u0438 \u043f\u043e \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0430\u043c.',
			'features.landings.title': 'Landing pages \u043f\u043e \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0430\u043c',
			'features.landings.body': '\u041a\u0430\u0436\u0434\u043e\u0435 app \u0438\u043b\u0438 \u0438\u043d\u0438\u0446\u0438\u0430\u0442\u0438\u0432\u0430 \u0431\u0443\u0434\u0435\u0442 \u0438\u043c\u0435\u0442\u044c \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 \u0441\u043e \u0441\u0432\u043e\u0438\u043c \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u043e\u043c, \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c\u044e, \u0440\u0430\u0441\u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0435\u043d\u0438\u0435\u043c \u0438 \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u043e\u043c.',
			'features.publish.title': '\u041f\u0440\u043e\u0441\u0442\u0430\u044f \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u044f',
			'features.publish.body': '\u0426\u0435\u043b\u044c \u2014 \u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u0442\u044c \u0434\u0435\u043c\u043e, \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b \u0438 \u0440\u0435\u0441\u0443\u0440\u0441\u044b \u043d\u0430\u043f\u0440\u044f\u043c\u0443\u044e \u0438 \u0432 \u043f\u043e\u043d\u044f\u0442\u043d\u043e\u0439 \u0444\u043e\u0440\u043c\u0435.',
			'features.lab.title': '\u042d\u043a\u0441\u043f\u0435\u0440\u0438\u043c\u0435\u043d\u0442\u0430\u043b\u044c\u043d\u0430\u044f \u043b\u0430\u0431\u043e\u0440\u0430\u0442\u043e\u0440\u0438\u044f',
			'features.lab.body': 'DICE LABS \u0442\u0430\u043a\u0436\u0435 \u043c\u043e\u0436\u0435\u0442 \u0440\u0430\u0437\u043c\u0435\u0449\u0430\u0442\u044c UI-\u0442\u0435\u0441\u0442\u044b, \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u044e, \u0432\u0438\u0437\u0443\u0430\u043b\u044c\u043d\u044b\u0435 \u0438\u0434\u0435\u0438 \u0438 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u044b, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0435\u0449\u0435 \u0441\u043e\u0437\u0440\u0435\u0432\u0430\u044e\u0442.',
			'features.cta.apps': '\u041a apps',
			'features.cta.contact': '\u041a \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0430\u043c',
			'routes.title': '\u041a\u043e\u043d\u0442\u0435\u043d\u0442',
			'routes.kd.body': '\u041e\u0434\u0438\u043d \u0438\u0437 \u043d\u0430\u0448\u0438\u0445 \u043d\u0435\u0434\u0430\u0432\u043d\u0438\u0445 \u043f\u0440\u043e\u0435\u043a\u0442\u043e\u0432 \u0434\u043b\u044f \u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u044c\u043d\u043e\u0439 \u0441\u0444\u0435\u0440\u044b, \u0437\u0430\u0434\u0443\u043c\u0430\u043d\u043d\u044b\u0439 \u043a\u0430\u043a \u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0435 \u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0440\u0435\u0448\u0435\u043d\u0438\u0435.',
			'routes.kd.button': '\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u0441\u043f\u0440\u0430\u0432\u043a\u0443',
			'routes.apps.body': '\u041a\u0430\u0442\u0430\u043b\u043e\u0433 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439 DICE LABS \u0441 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u043c\u0438 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430\u043c\u0438 \u0438 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0435\u0439 \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0430.',
			'routes.apps.button': '\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u043f\u043b\u0430\u043d',
			'routes.sliding.body': '\u041e\u0434\u043d\u043e \u0438\u0437 \u043f\u0435\u0440\u0432\u044b\u0445 apps, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0441\u0442\u0430\u043d\u0435\u0442 \u043e\u0440\u0438\u0435\u043d\u0442\u0438\u0440\u043e\u043c \u0434\u043b\u044f \u0431\u0443\u0434\u0443\u0449\u0435\u0439 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0445 \u0441\u0442\u0440\u0430\u043d\u0438\u0446 \u0432\u043d\u0443\u0442\u0440\u0438 \u0434\u043e\u043c\u0435\u043d\u0430.',
			'routes.sliding.button': '\u0421\u043b\u0435\u0434\u0438\u0442\u044c \u0437\u0430 \u043f\u0440\u043e\u0433\u0440\u0435\u0441\u0441\u043e\u043c',
			'footer.title': '\u041a\u043e\u043d\u0442\u0430\u043a\u0442',
			'footer.heading': '\u0422\u0435\u043a\u0443\u0449\u0430\u044f \u0442\u043e\u0447\u043a\u0430 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0430 DICE LABS',
			'footer.body': '\u041f\u043e\u043a\u0430 \u044d\u0442\u043e\u0442 \u0431\u043b\u043e\u043a \u043e\u0442\u0432\u0435\u0434\u0435\u043d \u043f\u043e\u0434 \u043e\u0441\u043d\u043e\u0432\u043d\u044b\u0435 email-\u043a\u0430\u043d\u0430\u043b\u044b \u043f\u0440\u043e\u0435\u043a\u0442\u0430.<br />\u041f\u043e\u0437\u0436\u0435 \u0437\u0434\u0435\u0441\u044c \u043c\u043e\u0433\u0443\u0442 \u043f\u043e\u044f\u0432\u0438\u0442\u044c\u0441\u044f \u043d\u043e\u0432\u044b\u0435 \u0441\u043e\u0446\u0441\u0435\u0442\u0438, \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430 \u043f\u043e \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0430\u043c \u0438\u043b\u0438 \u0431\u043e\u043b\u0435\u0435 \u0444\u043e\u0440\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0431\u0438\u0437\u043d\u0435\u0441-\u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f.',
			'footer.primaryEmail': '\u041e\u0441\u043d\u043e\u0432\u043d\u0430\u044f \u043f\u043e\u0447\u0442\u0430',
			'footer.technicalEmail': '\u0422\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u043f\u043e\u0447\u0442\u0430',
			'pdf.close': '\u0417\u0430\u043a\u0440\u044b\u0442\u044c',
			'footer.copyright': '&copy; DICE LABS.'
		}
	};
	var state = {
		language: 'es',
		theme: 'dark'
	};

	function isSupported(value, list) {
		return list.indexOf(value) !== -1;
	}

	function readStorage(key) {
		try {
			return window.localStorage.getItem(key);
		}
		catch (error) {
			return null;
		}
	}

	function writeStorage(key, value) {
		try {
			window.localStorage.setItem(key, value);
		}
		catch (error) {
			return;
		}
	}

	function getInitialState() {
		var url = new URL(window.location.href);
		var languageFromUrl = url.searchParams.get('lang');
		var themeFromUrl = url.searchParams.get('theme');
		var storedLanguage = readStorage(storageKeys.language);
		var storedTheme = readStorage(storageKeys.theme);

		state.language = isSupported(languageFromUrl, supportedLanguages) ? languageFromUrl : (isSupported(storedLanguage, supportedLanguages) ? storedLanguage : 'es');
		state.theme = isSupported(themeFromUrl, supportedThemes) ? themeFromUrl : (isSupported(storedTheme, supportedThemes) ? storedTheme : 'dark');
	}

	function updateMetaThemeColor() {
		var metaTheme = document.querySelector('meta[name="theme-color"]');

		if (metaTheme && themeColors[state.theme])
			metaTheme.setAttribute('content', themeColors[state.theme]);
	}

	function applyTheme() {
		document.documentElement.setAttribute('data-theme', state.theme);
		updateMetaThemeColor();
	}

	function applyTranslations() {
		var catalog = translations[state.language] || translations.es;
		var nodes = document.querySelectorAll('[data-i18n]');

		document.documentElement.setAttribute('lang', state.language);
		document.title = catalog['meta.title'] || 'DICE LABS';

		nodes.forEach(function(node) {
			var key = node.getAttribute('data-i18n');

			if (catalog[key])
				node.innerHTML = catalog[key];
		});

		updateLanguageMenuLabels();
	}

	function updateLanguageMenuLabels() {
		document.querySelectorAll('[data-language]').forEach(function(node) {
			var code = node.getAttribute('data-language');
			var upperCode = code.toUpperCase();
			var label = languageNames[code] || code;

			node.innerHTML = '<img src="images/flags/' + upperCode + '.webp" class="nav-flag" alt="" />' + label;
		});
	}

	function syncSelectionState() {
		document.querySelectorAll('[data-language]').forEach(function(node) {
			node.classList.toggle('is-selected', node.getAttribute('data-language') === state.language);
		});

		document.querySelectorAll('[data-set-theme]').forEach(function(node) {
			node.classList.toggle('is-selected', node.getAttribute('data-set-theme') === state.theme);
		});

		document.querySelectorAll('#navPanel .link').forEach(function(node) {
			var href = node.getAttribute('href') || '';
			var url;
			var isMatch = false;

			node.classList.remove('is-selected');

			try {
				url = new URL(href, window.location.href);
			}
			catch (error) {
				return;
			}

			if (url.searchParams.get('lang') === state.language)
				isMatch = true;

			if (url.searchParams.get('theme') === state.theme)
				isMatch = true;

			if (isMatch)
				node.classList.add('is-selected');
		});
	}

	function syncUrl() {
		var url = new URL(window.location.href);

		url.searchParams.set('lang', state.language);
		url.searchParams.set('theme', state.theme);

		window.history.replaceState({}, '', url.pathname + url.search + url.hash);
	}

	function rebuildNavPanel() {
		var navPanelNav;

		if (!(window.jQuery && window.jQuery.fn && window.jQuery.fn.navList))
			return;

		navPanelNav = document.querySelector('#navPanel nav');

		if (!navPanelNav)
			return;

		navPanelNav.innerHTML = window.jQuery('#nav').navList();
		syncSelectionState();
	}

	function persistState() {
		writeStorage(storageKeys.language, state.language);
		writeStorage(storageKeys.theme, state.theme);
	}

	function closeNavPanel() {
		document.body.classList.remove('navPanel-visible');
	}

	function applyState(options) {
		state.language = options.language;
		state.theme = options.theme;

		applyTheme();
		applyTranslations();
		persistState();
		syncUrl();
		syncSelectionState();
		rebuildNavPanel();
		closeNavPanel();
	}

	function interceptStateLink(event) {
		var anchor = event.target.closest('a');
		var href;
		var url;
		var nextLanguage;
		var nextTheme;

		if (!anchor)
			return;

		href = anchor.getAttribute('href');

		if (!href || href.indexOf('?') === -1)
			return;

		try {
			url = new URL(href, window.location.href);
		}
		catch (error) {
			return;
		}

		nextLanguage = url.searchParams.get('lang');
		nextTheme = url.searchParams.get('theme');

		if (!isSupported(nextLanguage, supportedLanguages) && !isSupported(nextTheme, supportedThemes))
			return;

		event.preventDefault();
		event.stopPropagation();

		if (typeof event.stopImmediatePropagation === 'function')
			event.stopImmediatePropagation();

		applyState({
			language: isSupported(nextLanguage, supportedLanguages) ? nextLanguage : state.language,
			theme: isSupported(nextTheme, supportedThemes) ? nextTheme : state.theme
		});
	}

	function setupPdfViewer() {
		var viewer = document.querySelector('#karosserdata-viewer');

		if (!viewer || typeof viewer.showModal !== 'function')
			return;

		document.querySelectorAll('[data-pdf-viewer-open]').forEach(function(opener) {
			opener.addEventListener('click', function(event) {
				event.preventDefault();
				viewer.showModal();
			});
		});

		viewer.querySelectorAll('[data-pdf-viewer-close]').forEach(function(closer) {
			closer.addEventListener('click', function() {
				viewer.close();
			});
		});

		viewer.addEventListener('click', function(event) {
			if (event.target === viewer)
				viewer.close();
		});
	}

	getInitialState();
	applyTheme();
	applyTranslations();
	persistState();
	syncSelectionState();
	setupPdfViewer();

	document.addEventListener('click', interceptStateLink, true);

	window.setTimeout(function() {
		rebuildNavPanel();
	}, 0);
})();
