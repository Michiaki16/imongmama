document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.wish-button');

  if (!button) {
    return;
  }

  button.addEventListener('click', () => {
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 }
    });
  });
});
