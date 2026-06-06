function verticalLoop(selector, speed) {

  const track = document.querySelector(selector);

  if (!track) return;

  const originalItems = [...track.children];

  originalItems.forEach(item => {
    track.appendChild(item.cloneNode(true));
  });

  let position = 0;

  function animate() {

    const loopHeight = track.scrollHeight / 2;

    position += speed;

    if (position >= loopHeight) {
      position -= loopHeight;
    }

    track.style.transform =
      `translate3d(0,-${position}px,0)`;

    requestAnimationFrame(animate);
  }

  animate();
}

window.addEventListener("load", () => {

  verticalLoop(".hero-track-1", 1.6);

  verticalLoop(".hero-track-2", 1.2);

  verticalLoop(".hero-track-3", 1.4);

});