import gsap from 'gsap';

const card = document.querySelector('#card');
const cardFront = card.querySelector('.card-front');
const cardBack = card.querySelector('.card-back');


gsap.set(card, { transformStyle: "preserve-3d" });
gsap.set(cardFront, { rotationY: 0 });
gsap.set(cardBack, { rotationY: 180, backfaceVisibility: "hidden" });

const flipCard = () => {
    // Front rotates away
    gsap.to(cardFront, {
        rotationY: 180,
        scale: 1.2,
        duration: 0.6,
        ease: "power2.inOut"
    });


    gsap.fromTo(cardBack,
        { rotationY: -180 },  // Start from -180
        { rotationY: 0,       // Animate to 0

          duration: 0.6,
          ease: "power2.inOut"
        }
    );
};

const resetCard = () => {
    gsap.fromTo(cardFront,
        { rotationY: -180 },  // Start from -180
        { rotationY: 0,       // Animate to 0

          duration: 0.6,
          ease: "power2.inOut"
        }
    );

    gsap.to(cardBack, {
        rotationY: 180,
        scale: 1.2,
        duration: 0.6,
        ease: "power2.inOut"
    });
};

card.addEventListener('mouseenter', flipCard);
card.addEventListener('mouseleave', resetCard);