import gsap from 'gsap';

document.addEventListener('DOMContentLoaded', () => {
  const card = document.querySelector('#card');
  const cardFront = card.querySelector('.card-front');
  const cardBack = card.querySelector('.card-back');


  gsap.set([cardFront, cardBack], {
    backfaceVisibility: "hidden",
    transformStyle: "preserve-3d"
  });


  gsap.set(cardBack, { rotationY: 180 });

  const flipCard = () => {
    gsap.to(cardFront, {
      rotationY: 180,
      duration: 0.6,
      ease: "power2.inOut"
    });


    gsap.from(cardBack, {
      rotationY: -180,
      duration: 0.6,
      ease: "power2.inOut"
    });
  };

  const resetCard = () => {
    gsap.from(cardFront, {
      rotationY: -180,
      duration: 0.6,
      ease: "power2.inOut"
    });


    gsap.to(cardBack, {
      rotationY: 180,
      duration: 0.6,
      ease: "power2.inOut"
    });
  };

  // Event listeners
  card.addEventListener('mouseenter', flipCard);
  card.addEventListener('mouseleave', resetCard);
});