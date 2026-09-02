(() => {
  const storageKey = 'sliding-tiles-privacy-language';
  const languageControl = document.querySelector('.language-control');
  const languageButtons = document.querySelectorAll('[data-language]');

  const translations = {
    es: {
      title: 'Privacidad de un vistazo', intro: 'Este aviso explica cómo Sliding Tiles Puzzle trata la información en Android, Windows y la demo web. La mayor parte de los datos del juego permanece de forma local en el dispositivo o navegador de la persona usuaria.', language: 'Idioma', updated: 'Última actualización', updatedValue: '1 de septiembre de 2026', scopeValue: 'Aplica a las versiones para Android, Windows y demo web',
      summaryTitle: 'Resumen', summaryText: 'Sliding Tiles Puzzle no exige crear una cuenta, perfil, nombre de usuario ni contraseña. Dice Labs no solicita directamente datos bancarios, documentos de identidad ni información de contacto dentro del juego. La versión gratuita de Android utiliza servicios de Google Play y Google AdMob, sujetos a sus propias políticas.',
      localTitle: 'Información guardada localmente', localText: 'El progreso, tiempos, logros, niveles personalizados, favoritos, ajustes de tema, idioma y audio se guardan localmente. Las imágenes que elijas para crear niveles se usan solo dentro del juego y no llegan a servidores de Dice Labs. Borrar los datos, desinstalar la app o limpiar el navegador puede eliminar esta información.',
      androidTitle: 'Android: anuncios y compras', androidText: 'La versión gratuita para Android puede mostrar anuncios mediante Google AdMob. Google y sus socios pueden tratar identificadores publicitarios, dirección IP, información del dispositivo, idioma, interacciones con anuncios y ubicación aproximada. Las compras Premium se procesan por Google Play; Dice Labs no recibe números de tarjeta ni credenciales bancarias.',
      platformsTitle: 'Demo web y versión Windows', platformsText: 'La demo web no muestra anuncios ni ofrece compras Premium. Sus datos y ajustes se guardan en el navegador. El proveedor de alojamiento y el navegador pueden registrar información técnica necesaria para entregar el sitio. La versión actual para Windows no incorpora anuncios y guarda sus datos de juego localmente.',
      thirdPartiesTitle: 'Servicios y enlaces externos', thirdPartiesText: 'El juego puede interactuar con Google AdMob, Google Play y los servicios de alojamiento de las páginas de Dice Labs. Cada proveedor aplica sus propios términos y avisos de privacidad. Al abrir un enlace externo, sales del entorno directo del juego.',
      choicesTitle: 'Tus opciones', choicesText: 'Puedes eliminar datos locales al borrar los datos de la app, desinstalarla o limpiar los datos del navegador. Puedes desactivar recordatorios desde el juego o el sistema operativo y administrar las preferencias de anuncios disponibles mediante los mecanismos de Google cuando correspondan.',
      changesTitle: 'Cambios a este aviso', changesText: 'Este aviso puede actualizarse si cambian las funciones del juego, sus plataformas, los servicios de terceros o los requisitos aplicables. La fecha visible al inicio indica la versión más reciente.',
      contactTitle: 'Contacto', contactText: 'Para consultas relacionadas con Sliding Tiles Puzzle o este aviso, visita el catálogo oficial de Dice Labs.', contactLink: 'dice-labs.com/apps/', technicalText: 'Contacto técnico:'
    },
    en: {
      title: 'Privacy at a glance', intro: 'This notice explains how Sliding Tiles Puzzle handles information on Android, Windows, and the web demo. Most game data stays locally on the user’s device or browser.', language: 'Language', updated: 'Last updated', updatedValue: 'September 1, 2026', scopeValue: 'Applies to Android, Windows, and web demo versions',
      summaryTitle: 'Summary', summaryText: 'Sliding Tiles Puzzle does not require an account, profile, username, or password. Dice Labs does not directly request banking details, identity documents, or contact information inside the game. The free Android version uses Google Play and Google AdMob services, which are governed by their own policies.',
      localTitle: 'Information stored locally', localText: 'Progress, times, achievements, custom levels, favorites, theme, language, and audio settings are stored locally. Images selected to create levels are used only within the game and are not sent to Dice Labs servers. Deleting app data, uninstalling the app, or clearing browser data may remove this information.',
      androidTitle: 'Android: ads and purchases', androidText: 'The free Android version may display ads through Google AdMob. Google and its partners may process advertising identifiers, IP address, device information, language, ad interactions, and approximate location. Premium purchases are processed through Google Play; Dice Labs does not receive card numbers or banking credentials.',
      platformsTitle: 'Web demo and Windows version', platformsText: 'The web demo does not display ads or offer Premium purchases. Its data and settings are stored in the browser. The hosting provider and browser may log technical information needed to deliver the site. The current Windows version contains no ads and stores game data locally.',
      thirdPartiesTitle: 'Services and external links', thirdPartiesText: 'The game may interact with Google AdMob, Google Play, and hosting services used by Dice Labs pages. Each provider applies its own terms and privacy notice. Opening an external link takes you outside the game’s direct environment.',
      choicesTitle: 'Your choices', choicesText: 'You can remove local data by deleting app data, uninstalling the app, or clearing browser data. You can disable reminders from the game or operating system and manage available ad preferences through Google mechanisms where applicable.',
      changesTitle: 'Changes to this notice', changesText: 'This notice may be updated if game features, platforms, third-party services, or applicable requirements change. The date at the top identifies the most recent version.',
      contactTitle: 'Contact', contactText: 'For questions about Sliding Tiles Puzzle or this notice, visit the official Dice Labs catalog.', contactLink: 'dice-labs.com/apps/', technicalText: 'Technical contact:'
    },
    fr: {
      title: 'La confidentialité en bref', intro: 'Cet avis explique comment Sliding Tiles Puzzle traite les informations sur Android, Windows et la démo web. La plupart des données de jeu restent localement sur l’appareil ou le navigateur de la personne utilisatrice.', language: 'Langue', updated: 'Dernière mise à jour', updatedValue: '1er septembre 2026', scopeValue: 'S’applique aux versions Android, Windows et démo web',
      summaryTitle: 'Résumé', summaryText: 'Sliding Tiles Puzzle ne demande pas de compte, profil, nom d’utilisateur ni mot de passe. Dice Labs ne demande pas directement de données bancaires, documents d’identité ou coordonnées dans le jeu. La version Android gratuite utilise Google Play et Google AdMob, soumis à leurs propres politiques.',
      localTitle: 'Informations stockées localement', localText: 'La progression, les temps, succès, niveaux personnalisés, favoris et réglages de thème, langue et audio sont stockés localement. Les images choisies pour créer des niveaux sont utilisées uniquement dans le jeu et ne sont pas envoyées aux serveurs de Dice Labs. La suppression des données, la désinstallation ou le nettoyage du navigateur peut supprimer ces informations.',
      androidTitle: 'Android : publicités et achats', androidText: 'La version Android gratuite peut afficher des publicités via Google AdMob. Google et ses partenaires peuvent traiter des identifiants publicitaires, l’adresse IP, des informations sur l’appareil, la langue, les interactions publicitaires et une localisation approximative. Les achats Premium sont traités par Google Play ; Dice Labs ne reçoit ni numéros de carte ni identifiants bancaires.',
      platformsTitle: 'Démo web et version Windows', platformsText: 'La démo web n’affiche pas de publicités et ne propose pas d’achats Premium. Ses données et réglages sont stockés dans le navigateur. L’hébergeur et le navigateur peuvent enregistrer les informations techniques nécessaires au site. La version Windows actuelle ne contient pas de publicités et conserve les données de jeu localement.',
      thirdPartiesTitle: 'Services et liens externes', thirdPartiesText: 'Le jeu peut interagir avec Google AdMob, Google Play et les services d’hébergement utilisés par les pages Dice Labs. Chaque fournisseur applique ses propres conditions et avis de confidentialité. Ouvrir un lien externe vous fait quitter l’environnement direct du jeu.',
      choicesTitle: 'Vos choix', choicesText: 'Vous pouvez supprimer les données locales en supprimant les données de l’application, en désinstallant l’application ou en effaçant les données du navigateur. Vous pouvez désactiver les rappels depuis le jeu ou le système et gérer les préférences publicitaires disponibles via Google lorsque cela s’applique.',
      changesTitle: 'Modifications de cet avis', changesText: 'Cet avis peut être mis à jour si les fonctions du jeu, ses plateformes, les services tiers ou les exigences applicables changent. La date affichée en haut indique la version la plus récente.',
      contactTitle: 'Contact', contactText: 'Pour toute question concernant Sliding Tiles Puzzle ou cet avis, consultez le catalogue officiel de Dice Labs.', contactLink: 'dice-labs.com/apps/', technicalText: 'Contact technique :'
    },
    de: {
      title: 'Datenschutz auf einen Blick', intro: 'Dieser Hinweis erklärt, wie Sliding Tiles Puzzle Informationen unter Android, Windows und in der Web-Demo verarbeitet. Die meisten Spieldaten bleiben lokal auf dem Gerät oder im Browser der nutzenden Person.', language: 'Sprache', updated: 'Letzte Aktualisierung', updatedValue: '1. September 2026', scopeValue: 'Gilt für Android-, Windows- und Web-Demo-Versionen',
      summaryTitle: 'Zusammenfassung', summaryText: 'Sliding Tiles Puzzle erfordert kein Konto, Profil, keinen Benutzernamen und kein Passwort. Dice Labs fragt im Spiel nicht direkt nach Bankdaten, Ausweisdokumenten oder Kontaktdaten. Die kostenlose Android-Version nutzt Google Play und Google AdMob, die eigenen Richtlinien unterliegen.',
      localTitle: 'Lokal gespeicherte Informationen', localText: 'Fortschritt, Zeiten, Erfolge, benutzerdefinierte Level, Favoriten sowie Theme-, Sprach- und Audioeinstellungen werden lokal gespeichert. Bilder, die zum Erstellen von Leveln ausgewählt werden, werden nur im Spiel genutzt und nicht an Dice-Labs-Server gesendet. Das Löschen von App-Daten, eine Deinstallation oder das Leeren von Browserdaten kann diese Informationen entfernen.',
      androidTitle: 'Android: Werbung und Käufe', androidText: 'Die kostenlose Android-Version kann Werbung über Google AdMob anzeigen. Google und seine Partner können Werbe-IDs, IP-Adresse, Geräteinformationen, Sprache, Anzeigeninteraktionen und ungefähren Standort verarbeiten. Premium-Käufe werden über Google Play abgewickelt; Dice Labs erhält keine Kartennummern oder Bankzugangsdaten.',
      platformsTitle: 'Web-Demo und Windows-Version', platformsText: 'Die Web-Demo zeigt keine Werbung und bietet keine Premium-Käufe an. Daten und Einstellungen werden im Browser gespeichert. Der Hosting-Anbieter und der Browser können technische Informationen protokollieren, die zur Bereitstellung der Website erforderlich sind. Die aktuelle Windows-Version enthält keine Werbung und speichert Spieldaten lokal.',
      thirdPartiesTitle: 'Dienste und externe Links', thirdPartiesText: 'Das Spiel kann mit Google AdMob, Google Play und Hosting-Diensten der Dice-Labs-Seiten interagieren. Jeder Anbieter wendet eigene Bedingungen und Datenschutzhinweise an. Beim Öffnen eines externen Links verlassen Sie die direkte Spielumgebung.',
      choicesTitle: 'Ihre Optionen', choicesText: 'Sie können lokale Daten entfernen, indem Sie App-Daten löschen, die App deinstallieren oder Browserdaten leeren. Erinnerungen lassen sich im Spiel oder Betriebssystem deaktivieren; verfügbare Werbeeinstellungen können gegebenenfalls über Google verwaltet werden.',
      changesTitle: 'Änderungen dieses Hinweises', changesText: 'Dieser Hinweis kann aktualisiert werden, wenn sich Spielfunktionen, Plattformen, Drittanbieterdienste oder anwendbare Anforderungen ändern. Das Datum oben kennzeichnet die neueste Version.',
      contactTitle: 'Kontakt', contactText: 'Bei Fragen zu Sliding Tiles Puzzle oder diesem Hinweis besuchen Sie den offiziellen Dice-Labs-Katalog.', contactLink: 'dice-labs.com/apps/', technicalText: 'Technischer Kontakt:'
    },
    ru: {
      title: 'Конфиденциальность вкратце', intro: 'Это уведомление объясняет, как Sliding Tiles Puzzle обрабатывает информацию в Android, Windows и веб-демо. Большая часть игровых данных хранится локально на устройстве или в браузере пользователя.', language: 'Язык', updated: 'Последнее обновление', updatedValue: '1 сентября 2026 г.', scopeValue: 'Применяется к версиям Android, Windows и веб-демо',
      summaryTitle: 'Кратко', summaryText: 'Sliding Tiles Puzzle не требует учётной записи, профиля, имени пользователя или пароля. Dice Labs не запрашивает непосредственно в игре банковские данные, документы, удостоверяющие личность, или контактную информацию. Бесплатная версия Android использует Google Play и Google AdMob, которые регулируются собственными политиками.',
      localTitle: 'Локально сохранённая информация', localText: 'Прогресс, время, достижения, пользовательские уровни, избранное и настройки темы, языка и звука хранятся локально. Изображения, выбранные для создания уровней, используются только в игре и не отправляются на серверы Dice Labs. Удаление данных приложения, удаление приложения или очистка данных браузера может удалить эту информацию.',
      androidTitle: 'Android: реклама и покупки', androidText: 'Бесплатная версия Android может показывать рекламу через Google AdMob. Google и его партнёры могут обрабатывать рекламные идентификаторы, IP-адрес, сведения об устройстве, язык, взаимодействия с рекламой и приблизительное местоположение. Покупки Premium обрабатываются через Google Play; Dice Labs не получает номера карт или банковские учётные данные.',
      platformsTitle: 'Веб-демо и версия Windows', platformsText: 'Веб-демо не показывает рекламу и не предлагает покупки Premium. Его данные и настройки хранятся в браузере. Хостинг-провайдер и браузер могут регистрировать техническую информацию, необходимую для работы сайта. Текущая версия Windows не содержит рекламы и хранит игровые данные локально.',
      thirdPartiesTitle: 'Сервисы и внешние ссылки', thirdPartiesText: 'Игра может взаимодействовать с Google AdMob, Google Play и хостинг-сервисами страниц Dice Labs. Каждый поставщик применяет собственные условия и уведомления о конфиденциальности. При открытии внешней ссылки вы покидаете непосредственную среду игры.',
      choicesTitle: 'Ваши возможности', choicesText: 'Вы можете удалить локальные данные, удалив данные приложения, само приложение или данные браузера. Напоминания можно отключить в игре или операционной системе, а доступные настройки рекламы можно управлять через механизмы Google, когда это применимо.',
      changesTitle: 'Изменения уведомления', changesText: 'Это уведомление может обновляться при изменении функций игры, платформ, сторонних сервисов или применимых требований. Дата вверху указывает на последнюю версию.',
      contactTitle: 'Контакты', contactText: 'По вопросам о Sliding Tiles Puzzle или этом уведомлении посетите официальный каталог Dice Labs.', contactLink: 'dice-labs.com/apps/', technicalText: 'Технический контакт:'
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

  languageButtons.forEach((button) => {
    button.addEventListener('click', () => {
      setLanguage(button.dataset.language);
      languageControl.open = false;
    });
  });

  document.addEventListener('click', (event) => {
    if (!event.target.closest('.language-control')) languageControl.open = false;
  });

  setLanguage(localStorage.getItem(storageKey) || 'es');
})();
