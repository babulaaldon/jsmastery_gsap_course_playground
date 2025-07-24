import gsap from 'gsap';

gsap.set('.gsap-box', {
    opacity: 0,
    scale: 0.2,
    y: 500,
    x: -500,
});

gsap.to('.gsap-box',{
    delay: 0.5,
    opacity: 1,
    scale: 1,
    y: 0,
    x: 0,
    duration: 1.4,
    ease: 'expo.out',
});