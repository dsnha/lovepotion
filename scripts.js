let currentLevel = 0;

function movePotion() {
  const liquid = document.querySelector('.liquid');
  currentLevel += 10; // Increase the potion's height by 10%

  // Restrict the potion from overflowing the bottle
  if (currentLevel > 100) {
    currentLevel = 100;
  }

  // Move the potion upward by adjusting its transform property
  liquid.style.transform = `translateY(-${currentLevel}%)`;
}
