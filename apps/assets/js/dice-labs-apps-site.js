(function() {
	var supportedLanguages = ['es', 'en', 'fr', 'de', 'ru'];
	var supportedThemes = ['dark', 'light'];
	var storageKeys = {
		language: 'dice-labs-language',
		theme: 'dice-labs-theme'
	};
	var themeColors = {
		dark: '#090c10',
		light: '#eef2f6'
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
			'meta.title': 'DICE LABS | Apps',
			'menu.title': 'Menu',
			'menu.home': 'Ir a dice-labs.com',
			'menu.career': 'Ir a career',
			'menu.catalog': 'Ver catalogo',
			'menu.contact': 'Contacto',
			'menu.language': 'Idioma',
			'menu.theme': 'Tema',
			'theme.dark': 'Oscuro',
			'theme.light': 'Claro',
			'hero.title': 'Catalogo central de apps y experimentos jugables.',
			'hero.body': 'Aqui viviran las demos, prototipos y paginas de producto de DICE LABS. Cada tarjeta funciona como puerta de entrada a una app individual y a sus futuras rutas de descarga, soporte y documentacion.',
			'hero.primary': 'Sitio principal',
			'hero.secondary': 'Canal de contacto',
			'tile.sliding.body': 'La version moderna del clasico 15-puzzle: desliza piezas para reconstruir imagenes y resuelve tableros con reglas, rutas y desafios distintos.',
			'tile.gore.body': 'Proximamente...',
			'tile.placeholder1.title': 'Proximamente',
			'tile.placeholder2.title': 'Proximamente',
			'tile.placeholder3.title': 'Proximamente',
			'tile.placeholder4.title': 'Proximamente',
			'tile.placeholder1.body': '???',
			'tile.placeholder2.body': '???',
			'tile.placeholder3.body': '???',
			'tile.placeholder4.body': '???',
			'footer.heading': 'Catalogo en construccion',
			'footer.body': 'Este espacio concentrara las futuras apps de DICE LABS y servira como puente hacia sus paginas individuales, sus canales de descarga y su documentacion tecnica.',
			'footer.mainSite': 'Volver al sitio principal',
			'footer.career': 'Ver career',
			'footer.contact': 'Contacto',
			'footer.primaryEmail': 'Correo principal',
			'footer.technicalEmail': 'Correo tecnico',
			'footer.copyright': '&copy; DICE LABS.'
		},
		en: {
			'meta.title': 'DICE LABS | Apps',
			'menu.title': 'Menu',
			'menu.home': 'Go to dice-labs.com',
			'menu.career': 'Open career',
			'menu.catalog': 'View catalog',
			'menu.contact': 'Contact',
			'menu.language': 'Language',
			'menu.theme': 'Theme',
			'theme.dark': 'Dark',
			'theme.light': 'Light',
			'hero.title': 'Central catalog of apps and playable experiments.',
			'hero.body': 'This is where DICE LABS demos, prototypes and product pages will live. Each card acts as an entry point to an individual app and to its future download, support and documentation routes.',
			'hero.primary': 'Main site',
			'hero.secondary': 'Contact channel',
			'tile.sliding.body': 'A modern take on the classic 15-puzzle: slide tiles to rebuild images and solve boards with different rules, paths, and challenges.',
			'tile.gore.body': 'Coming soon...',
			'tile.placeholder1.title': 'Coming soon',
			'tile.placeholder2.title': 'Coming soon',
			'tile.placeholder3.title': 'Coming soon',
			'tile.placeholder4.title': 'Coming soon',
			'tile.placeholder1.body': '???',
			'tile.placeholder2.body': '???',
			'tile.placeholder3.body': '???',
			'tile.placeholder4.body': '???',
			'footer.heading': 'Catalog in progress',
			'footer.body': 'This space will gather future DICE LABS apps and work as a bridge to their individual pages, download channels and technical documentation.',
			'footer.mainSite': 'Back to main site',
			'footer.career': 'View career',
			'footer.contact': 'Contact',
			'footer.primaryEmail': 'Main email',
			'footer.technicalEmail': 'Technical email',
			'footer.copyright': '&copy; DICE LABS.'
		},
		fr: {
			'meta.title': 'DICE LABS | Apps',
			'menu.title': 'Menu',
			'menu.home': 'Aller \u00e0 dice-labs.com',
			'menu.career': 'Ouvrir career',
			'menu.catalog': 'Voir le catalogue',
			'menu.contact': 'Contact',
			'menu.language': 'Langue',
			'menu.theme': 'Th\u00e8me',
			'theme.dark': 'Sombre',
			'theme.light': 'Clair',
			'hero.title': 'Catalogue central d apps et d exp\u00e9riences jouables.',
			'hero.body': 'Ici vivront les d\u00e9mos, prototypes et pages produit de DICE LABS. Chaque carte sert de porte d entr\u00e9e vers une app individuelle et vers ses futures routes de t\u00e9l\u00e9chargement, support et documentation.',
			'hero.primary': 'Site principal',
			'hero.secondary': 'Canal de contact',
			'tile.sliding.body': 'Une version moderne du 15-puzzle classique : faites glisser les tuiles pour reconstruire des images et r\u00e9soudre des plateaux aux r\u00e8gles vari\u00e9es.',
			'tile.gore.body': 'Bient\u00f4t...',
			'tile.placeholder1.title': 'Bient\u00f4t',
			'tile.placeholder2.title': 'Bient\u00f4t',
			'tile.placeholder3.title': 'Bient\u00f4t',
			'tile.placeholder4.title': 'Bient\u00f4t',
			'tile.placeholder1.body': '???',
			'tile.placeholder2.body': '???',
			'tile.placeholder3.body': '???',
			'tile.placeholder4.body': '???',
			'footer.heading': 'Catalogue en construction',
			'footer.body': 'Cet espace rassemblera les futures apps de DICE LABS et servira de pont vers leurs pages individuelles, leurs canaux de t\u00e9l\u00e9chargement et leur documentation technique.',
			'footer.mainSite': 'Retour au site principal',
			'footer.career': 'Voir career',
			'footer.contact': 'Contact',
			'footer.primaryEmail': 'Email principal',
			'footer.technicalEmail': 'Email technique',
			'footer.copyright': '&copy; DICE LABS.'
		},
		de: {
			'meta.title': 'DICE LABS | Apps',
			'menu.title': 'Menu',
			'menu.home': 'Zu dice-labs.com',
			'menu.career': 'Career \u00f6ffnen',
			'menu.catalog': 'Katalog ansehen',
			'menu.contact': 'Kontakt',
			'menu.language': 'Sprache',
			'menu.theme': 'Thema',
			'theme.dark': 'Dunkel',
			'theme.light': 'Hell',
			'hero.title': 'Zentrales Verzeichnis f\u00fcr Apps und spielbare Experimente.',
			'hero.body': 'Hier werden die Demos, Prototypen und Produktseiten von DICE LABS leben. Jede Karte dient als Einstieg zu einer einzelnen App und zu ihren k\u00fcnftigen Download-, Support- und Dokumentationswegen.',
			'hero.primary': 'Hauptseite',
			'hero.secondary': 'Kontaktkanal',
			'tile.sliding.body': 'Eine moderne Version des klassischen 15-Puzzles: Verschiebe Kacheln, setze Bilder zusammen und l\u00f6se Spielfelder mit unterschiedlichen Regeln und Wegen.',
			'tile.gore.body': 'Demn\u00e4chst...',
			'tile.placeholder1.title': 'Demn\u00e4chst',
			'tile.placeholder2.title': 'Demn\u00e4chst',
			'tile.placeholder3.title': 'Demn\u00e4chst',
			'tile.placeholder4.title': 'Demn\u00e4chst',
			'tile.placeholder1.body': '???',
			'tile.placeholder2.body': '???',
			'tile.placeholder3.body': '???',
			'tile.placeholder4.body': '???',
			'footer.heading': 'Katalog im Aufbau',
			'footer.body': 'Dieser Bereich wird die k\u00fcnftigen Apps von DICE LABS zusammenf\u00fchren und als Br\u00fccke zu ihren einzelnen Seiten, Download-Kan\u00e4len und technischen Dokumentationen dienen.',
			'footer.mainSite': 'Zur Hauptseite zur\u00fcck',
			'footer.career': 'Career ansehen',
			'footer.contact': 'Kontakt',
			'footer.primaryEmail': 'Haupt-E-Mail',
			'footer.technicalEmail': 'Technische E-Mail',
			'footer.copyright': '&copy; DICE LABS.'
		},
		ru: {
			'meta.title': 'DICE LABS | Apps',
			'menu.title': '\u041c\u0435\u043d\u044e',
			'menu.home': '\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043d\u0430 dice-labs.com',
			'menu.career': '\u041e\u0442\u043a\u0440\u044b\u0442\u044c career',
			'menu.catalog': '\u0421\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u043a\u0430\u0442\u0430\u043b\u043e\u0433',
			'menu.contact': '\u041a\u043e\u043d\u0442\u0430\u043a\u0442',
			'menu.language': '\u042f\u0437\u044b\u043a',
			'menu.theme': '\u0422\u0435\u043c\u0430',
			'theme.dark': '\u0422\u0435\u043c\u043d\u0430\u044f',
			'theme.light': '\u0421\u0432\u0435\u0442\u043b\u0430\u044f',
			'hero.title': '\u0426\u0435\u043d\u0442\u0440\u0430\u043b\u044c\u043d\u044b\u0439 \u043a\u0430\u0442\u0430\u043b\u043e\u0433 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439 \u0438 \u0438\u0433\u0440\u043e\u0432\u044b\u0445 \u044d\u043a\u0441\u043f\u0435\u0440\u0438\u043c\u0435\u043d\u0442\u043e\u0432.',
			'hero.body': '\u0417\u0434\u0435\u0441\u044c \u0431\u0443\u0434\u0443\u0442 \u0436\u0438\u0442\u044c \u0434\u0435\u043c\u043e-\u0432\u0435\u0440\u0441\u0438\u0438, \u043f\u0440\u043e\u0442\u043e\u0442\u0438\u043f\u044b \u0438 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u043e\u0432 DICE LABS. \u041a\u0430\u0436\u0434\u0430\u044f \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0430 \u0441\u043b\u0443\u0436\u0438\u0442 \u0442\u043e\u0447\u043a\u043e\u0439 \u0432\u0445\u043e\u0434\u0430 \u0432 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0438 \u0432 \u0435\u0433\u043e \u0431\u0443\u0434\u0443\u0449\u0438\u0435 \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u044b \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438, \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0438 \u0438 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438.',
			'hero.primary': '\u0413\u043b\u0430\u0432\u043d\u044b\u0439 \u0441\u0430\u0439\u0442',
			'hero.secondary': '\u041a\u0430\u043d\u0430\u043b \u0441\u0432\u044f\u0437\u0438',
			'tile.sliding.body': '\u0421\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u0430\u044f \u0432\u0435\u0440\u0441\u0438\u044f \u043a\u043b\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043a\u043e\u0439 \u0433\u043e\u043b\u043e\u0432\u043e\u043b\u043e\u043c\u043a\u0438 \u00ab\u043f\u044f\u0442\u043d\u0430\u0448\u043a\u0438\u00bb: \u043f\u0435\u0440\u0435\u0434\u0432\u0438\u0433\u0430\u0439\u0442\u0435 \u043f\u043b\u0438\u0442\u043a\u0438, \u0441\u043e\u0431\u0438\u0440\u0430\u0439\u0442\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0438 \u0440\u0435\u0448\u0430\u0439\u0442\u0435 \u043f\u043e\u043b\u044f \u0441 \u0440\u0430\u0437\u043d\u044b\u043c\u0438 \u043f\u0440\u0430\u0432\u0438\u043b\u0430\u043c\u0438 \u0438 \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u0430\u043c\u0438.',
			'tile.gore.body': '\u0421\u043a\u043e\u0440\u043e...',
			'tile.placeholder1.title': '\u0421\u043a\u043e\u0440\u043e',
			'tile.placeholder2.title': '\u0421\u043a\u043e\u0440\u043e',
			'tile.placeholder3.title': '\u0421\u043a\u043e\u0440\u043e',
			'tile.placeholder4.title': '\u0421\u043a\u043e\u0440\u043e',
			'tile.placeholder1.body': '???',
			'tile.placeholder2.body': '???',
			'tile.placeholder3.body': '???',
			'tile.placeholder4.body': '???',
			'footer.heading': '\u041a\u0430\u0442\u0430\u043b\u043e\u0433 \u0432 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0435',
			'footer.body': '\u042d\u0442\u043e \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u043e \u0441\u043e\u0431\u0435\u0440\u0435\u0442 \u0431\u0443\u0434\u0443\u0449\u0438\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f DICE LABS \u0438 \u0441\u0442\u0430\u043d\u0435\u0442 \u043c\u043e\u0441\u0442\u043e\u043c \u043a \u0438\u0445 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u043c \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430\u043c, \u043a\u0430\u043d\u0430\u043b\u0430\u043c \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u0438 \u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u043e\u0439 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438.',
			'footer.mainSite': '\u041d\u0430\u0437\u0430\u0434 \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u044b\u0439 \u0441\u0430\u0439\u0442',
			'footer.career': '\u0421\u043c\u043e\u0442\u0440\u0435\u0442\u044c career',
			'footer.contact': '\u041a\u043e\u043d\u0442\u0430\u043a\u0442',
			'footer.primaryEmail': '\u041e\u0441\u043d\u043e\u0432\u043d\u0430\u044f \u043f\u043e\u0447\u0442\u0430',
			'footer.technicalEmail': '\u0422\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u043f\u043e\u0447\u0442\u0430',
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

	function updateLanguageMenuLabels() {
		document.querySelectorAll('[data-language]').forEach(function(node) {
			var code = node.getAttribute('data-language');
			var upperCode = code.toUpperCase();
			var label = languageNames[code] || code;

			node.innerHTML = '<img src="images/flags/' + upperCode + '.webp" class="nav-flag" alt="" />' + label;
		});
	}

	function applyTranslations() {
		var catalog = translations[state.language] || translations.es;

		document.documentElement.setAttribute('lang', state.language);
		document.title = catalog['meta.title'] || 'DICE LABS | Apps';

		document.querySelectorAll('[data-i18n]').forEach(function(node) {
			var key = node.getAttribute('data-i18n');

			if (catalog[key])
				node.innerHTML = catalog[key];
		});

		updateLanguageMenuLabels();
	}

	function syncSelectionState() {
		document.querySelectorAll('[data-language]').forEach(function(node) {
			node.classList.toggle('is-selected', node.getAttribute('data-language') === state.language);
		});

		document.querySelectorAll('[data-set-theme]').forEach(function(node) {
			node.classList.toggle('is-selected', node.getAttribute('data-set-theme') === state.theme);
		});
	}

	function syncUrl() {
		var url = new URL(window.location.href);

		url.searchParams.set('lang', state.language);
		url.searchParams.set('theme', state.theme);

		window.history.replaceState({}, '', url.pathname + url.search + url.hash);
	}

	function persistState() {
		writeStorage(storageKeys.language, state.language);
		writeStorage(storageKeys.theme, state.theme);
	}

	function closeMenu() {
		document.body.classList.remove('is-menu-visible');
	}

	function applyState(language, theme) {
		state.language = language;
		state.theme = theme;

		applyTheme();
		applyTranslations();
		persistState();
		syncUrl();
		syncSelectionState();
		closeMenu();
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

		applyState(
			isSupported(nextLanguage, supportedLanguages) ? nextLanguage : state.language,
			isSupported(nextTheme, supportedThemes) ? nextTheme : state.theme
		);
	}

	function interceptPlaceholderTiles(event) {
		var anchor = event.target.closest('a.app-link[href="#"]');

		if (!anchor)
			return;

		event.preventDefault();
	}

	function wireCardPreviews() {
		if (!window.matchMedia('(hover: hover)').matches)
			return;

		document.querySelectorAll('.app-card[data-preview-src]').forEach(function(card) {
			var source = (card.getAttribute('data-preview-src') || '').trim();
			var imageContainer = card.querySelector('.image');
			var preview;
			var previewImages;
			var clearTimer;

			if (!source || !imageContainer)
				return;

			preview = document.createElement('span');
			preview.className = 'tile-preview';
			preview.setAttribute('aria-hidden', 'true');
			preview.innerHTML = '<img class="tile-preview-blur" alt=""><img class="tile-preview-main" alt="">';
			imageContainer.appendChild(preview);
			previewImages = preview.querySelectorAll('img');
			card.classList.add('has-preview');

			card.addEventListener('pointerenter', function() {
				window.clearTimeout(clearTimer);
				previewImages.forEach(function(image) {
					if (!image.getAttribute('src'))
						image.setAttribute('src', source);
				});
			});

			card.addEventListener('pointerleave', function() {
				// Wait for the fade-out so browsers never render a broken-image glyph.
				clearTimer = window.setTimeout(function() {
					previewImages.forEach(function(image) {
						image.removeAttribute('src');
					});
				}, 350);
			});
		});
	}

	getInitialState();
	applyTheme();
	applyTranslations();
	persistState();
	syncSelectionState();
	wireCardPreviews();

	document.addEventListener('click', interceptStateLink, true);
	document.addEventListener('click', interceptPlaceholderTiles);
})();
