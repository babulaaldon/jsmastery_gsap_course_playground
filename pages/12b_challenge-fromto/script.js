import gsap from 'gsap';

const buttons = document.querySelectorAll('.reactions button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const emoji = button.dataset.emoji;

    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    bubble.textContent = emoji;

    const rect = button.getBoundingClientRect();
    bubble.style.left = `${rect.left + rect.width / 2}px`;
    bubble.style.top = `${rect.top}px`;

    document.body.appendChild(bubble);

    gsap.fromTo(bubble,
      {
        y: 0,
        scale: 0.6,
        opacity: 0.8,
        rotation: 0,
      },
      {
        y: -100,
        scale: 1.2,
        opacity: 0.2,
        rotation: gsap.utils.random(-360, 360),
        duration: 1.2,
        ease: 'power2.out',
        onComplete: () => bubble.remove(),
      }
    );

    console.log('Created bubble with emoji:', emoji);
  });
});
