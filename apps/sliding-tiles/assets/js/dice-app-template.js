(() => {
  const diceFaces = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];
  const dice = document.querySelectorAll('.dice-logo .dice');
  const languageToggle = document.querySelector('.language-toggle');
  const languageOptions = document.querySelector('#language-options');
  const languageButtons = document.querySelectorAll('[data-language]');
  const storageKey = 'dice-labs-app-template-language';

  const translations = {
    es: {
      appName: 'Sliding Tiles Puzzle', tagline: 'La versión moderna del clásico 15-puzzle: desliza piezas para reconstruir imágenes y resuelve tableros con reglas, rutas y desafíos distintos.', moreInfo: 'Conoce el juego', language: 'Idioma', download: 'Próximamente', demo: 'Jugar demo', privacy: 'Aviso de privacidad',
      detailOneTitle: 'Un catálogo de retos', detailOneText: 'Elige entre colecciones de imágenes y estilos. Cada nivel indica su tamaño, dificultad y reglas antes de empezar.',
      detailTwoTitle: 'El clásico, ampliado', detailTwoText: 'Parte del 15-puzzle clásico: mueve una pieza hacia la celda vacía para recomponer la imagen. Hay tableros pequeños, grandes y con cronómetro.',
      detailThreeTitle: 'Tableros con reglas propias', detailThreeText: 'Algunos niveles añaden túneles que conectan bordes, celdas fijas, recortes, rotaciones y aristas bloqueadas.',
      detailFourTitle: 'Ayuda visual cuando la necesites', detailFourText: 'La numeración opcional identifica dónde va cada pieza. La mini guía resuelta ayuda a comparar el tablero actual con el objetivo.',
      detailFiveTitle: 'Niveles generados', detailFiveText: 'Con Premium puedes generar niveles nuevos a partir de las imágenes del juego, elegir dimensiones y ajustar reglas.',
      detailSixTitle: 'Niveles personalizados', detailSixText: 'Con Premium puedes importar una imagen propia, diseñar la forma del tablero y guardar o editar tu nivel.', contact: 'Contacto', mainEmail: 'Correo principal', technicalEmail: 'Correo técnico'
    },
    en: {
      appName: 'Sliding Tiles Puzzle', tagline: 'A modern take on the classic 15-puzzle: slide tiles to rebuild images and solve boards with different rules, paths, and challenges.', moreInfo: 'Explore the game', language: 'Language', download: 'Coming soon', demo: 'Play demo', privacy: 'Privacy notice',
      detailOneTitle: 'A catalog of challenges', detailOneText: 'Choose from image collections and styles. Every level shows its size, difficulty, and rules before you start.',
      detailTwoTitle: 'The classic, expanded', detailTwoText: 'Built on the classic 15-puzzle: move a tile into the empty cell to rebuild the image. Play small, large, or timed boards.',
      detailThreeTitle: 'Boards with their own rules', detailThreeText: 'Some levels add edge-to-edge tunnels, fixed cells, cropped tiles, rotations, and blocked edges.',
      detailFourTitle: 'Visual help when you need it', detailFourText: 'Optional numbering shows where every tile belongs. The solved mini guide helps compare the board with its goal.',
      detailFiveTitle: 'Generated levels', detailFiveText: 'With Premium, create new random levels from game images, choose dimensions, and adjust their rules.',
      detailSixTitle: 'Personalized levels', detailSixText: 'With Premium, import your own image, design the board shape, and save or edit your level.', contact: 'Contact', mainEmail: 'Main email', technicalEmail: 'Technical email'
    },
    fr: {
      appName: 'Sliding Tiles Puzzle', tagline: 'Une version moderne du 15-puzzle classique : faites glisser les tuiles pour reconstruire des images et résoudre des plateaux aux règles variées.', moreInfo: 'Découvrir le jeu', language: 'Langue', download: 'Bientôt disponible', demo: 'Jouer à la démo', privacy: 'Avis de confidentialité',
      detailOneTitle: 'Un catalogue de défis', detailOneText: 'Choisissez parmi des collections d’images et des styles. Chaque niveau indique taille, difficulté et règles avant de commencer.',
      detailTwoTitle: 'Le classique, enrichi', detailTwoText: 'Issu du 15-puzzle classique : déplacez une tuile vers la case vide pour reconstruire l’image. Jouez sur des plateaux petits, grands ou chronométrés.',
      detailThreeTitle: 'Des plateaux avec leurs propres règles', detailThreeText: 'Certains niveaux ajoutent des tunnels reliant les bords, cellules fixes, tuiles recadrées, rotations et bords bloqués.',
      detailFourTitle: 'Une aide visuelle au besoin', detailFourText: 'La numérotation optionnelle indique la place de chaque tuile. Le mini-guide résolu aide à comparer le plateau avec l’objectif.',
      detailFiveTitle: 'Niveaux générés', detailFiveText: 'Avec Premium, créez de nouveaux niveaux aléatoires à partir des images du jeu, choisissez les dimensions et ajustez les règles.',
      detailSixTitle: 'Niveaux personnalisés', detailSixText: 'Avec Premium, importez votre image, dessinez la forme du plateau et enregistrez ou modifiez votre niveau.', contact: 'Contact', mainEmail: 'E-mail principal', technicalEmail: 'E-mail technique'
    },
    de: {
      appName: 'Sliding Tiles Puzzle', tagline: 'Eine moderne Version des klassischen 15-Puzzles: Verschiebe Kacheln, setze Bilder zusammen und löse Spielfelder mit unterschiedlichen Regeln und Wegen.', moreInfo: 'Spiel entdecken', language: 'Sprache', download: 'Demnächst', demo: 'Demo spielen', privacy: 'Datenschutzhinweis',
      detailOneTitle: 'Ein Katalog voller Herausforderungen', detailOneText: 'Wähle aus Bildsammlungen und Stilen. Jedes Level zeigt Größe, Schwierigkeit und Regeln vor dem Start.',
      detailTwoTitle: 'Der Klassiker, erweitert', detailTwoText: 'Basierend auf dem klassischen 15-Puzzle: Verschiebe eine Kachel in die leere Zelle, um das Bild wiederherzustellen. Spiele kleine, große oder zeitbegrenzte Felder.',
      detailThreeTitle: 'Spielfelder mit eigenen Regeln', detailThreeText: 'Einige Level bieten Tunnel zwischen den Rändern, feste Zellen, zugeschnittene Kacheln, Drehungen und gesperrte Kanten.',
      detailFourTitle: 'Visuelle Hilfe bei Bedarf', detailFourText: 'Die optionale Nummerierung zeigt die Position jeder Kachel. Die gelöste Mini-Vorlage hilft beim Vergleich mit dem Ziel.',
      detailFiveTitle: 'Generierte Level', detailFiveText: 'Mit Premium erstellst du neue Zufallslevel aus Spielbildern, wählst Maße und passt die Regeln an.',
      detailSixTitle: 'Eigene Level', detailSixText: 'Mit Premium importierst du ein eigenes Bild, gestaltest die Spielfeldform und speicherst oder bearbeitest dein Level.', contact: 'Kontakt', mainEmail: 'Haupt-E-Mail', technicalEmail: 'Technische E-Mail'
    },
    ru: {
      appName: 'Sliding Tiles Puzzle', tagline: 'Современная версия классической головоломки «пятнашки»: передвигайте плитки, собирайте изображения и решайте поля с разными правилами и маршрутами.', moreInfo: 'Открыть игру', language: 'Язык', download: 'Скоро', demo: 'Играть в демо', privacy: 'Политика конфиденциальности',
      detailOneTitle: 'Каталог испытаний', detailOneText: 'Выбирайте коллекции изображений и стили. В каждой карточке уровня указаны размер, сложность и правила.',
      detailTwoTitle: 'Классика, расширенная', detailTwoText: 'Основано на классической «пятнашке»: передвиньте плитку в пустую ячейку, чтобы собрать изображение. Есть маленькие, большие и уровни с таймером.',
      detailThreeTitle: 'Поля со своими правилами', detailThreeText: 'Некоторые уровни добавляют туннели между краями, фиксированные ячейки, обрезанные плитки, повороты и заблокированные грани.',
      detailFourTitle: 'Визуальная помощь при необходимости', detailFourText: 'Опциональная нумерация показывает место каждой плитки. Решённая мини-подсказка помогает сравнить поле с целью.',
      detailFiveTitle: 'Сгенерированные уровни', detailFiveText: 'С Premium можно создавать новые случайные уровни из игровых изображений, выбирать размеры и настраивать правила.',
      detailSixTitle: 'Персональные уровни', detailSixText: 'С Premium можно импортировать своё изображение, создать форму поля и сохранить или изменить свой уровень.', contact: 'Контакты', mainEmail: 'Основной адрес', technicalEmail: 'Технический адрес'
    }
  };

  const setLanguage = (language) => {
    const copy = translations[language] || translations.es;
    document.documentElement.lang = language;
    document.querySelectorAll('[data-i18n]').forEach((element) => {
      const key = element.dataset.i18n;
      if (copy[key]) element.textContent = copy[key];
    });
    languageButtons.forEach((button) => button.classList.toggle('is-active', button.dataset.language === language));
    localStorage.setItem(storageKey, language);
  };

  dice.forEach((die) => {
    die.textContent = diceFaces[Math.floor(Math.random() * diceFaces.length)];
  });

  languageToggle.addEventListener('click', () => {
    const isOpen = !languageOptions.hidden;
    languageOptions.hidden = isOpen;
    languageToggle.setAttribute('aria-expanded', String(!isOpen));
  });

  languageButtons.forEach((button) => {
    button.addEventListener('click', () => {
      setLanguage(button.dataset.language);
      languageOptions.hidden = true;
      languageToggle.setAttribute('aria-expanded', 'false');
    });
  });

  document.addEventListener('click', (event) => {
    if (!event.target.closest('.language-control')) {
      languageOptions.hidden = true;
      languageToggle.setAttribute('aria-expanded', 'false');
    }
  });

  document.querySelectorAll('a[href="#"]').forEach((link) => {
    link.addEventListener('click', (event) => event.preventDefault());
  });

  setLanguage(localStorage.getItem(storageKey) || 'es');
})();
