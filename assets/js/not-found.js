(() => {
  'use strict';

  const game = document.querySelector('.little-game');
  const button = document.querySelector('.roll');
  const die = document.querySelector('.die');
  const result = document.querySelector('.roll-result');
  if (!game || !button || !die || !result) return;

  game.hidden = false;
  const face = () => Math.floor(Math.random() * 6) + 1;

  button.addEventListener('click', () => {
    if (button.disabled) return;
    const value = face();
    const finish = () => {
      die.dataset.value = String(value);
      die.classList.remove('is-rolling');
      result.textContent = `You rolled ${value}. Still a 404, though.`;
      button.disabled = false;
    };

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      finish();
      return;
    }

    button.disabled = true;
    die.classList.add('is-rolling');
    const shuffle = window.setInterval(() => { die.dataset.value = String(face()); }, 90);
    window.setTimeout(() => {
      window.clearInterval(shuffle);
      finish();
    }, 600);
  });
})();
