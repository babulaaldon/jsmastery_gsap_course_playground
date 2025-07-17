import gsap from 'gsap';

gsap.to('.box', {
    opacity: 1,
    y: -270,
    rotation: 400,
    background: '#00ffffff',
    borderRadius: '50%',
    scale: 2,
    duration: 4,
    yoyo: true,
    repeat: -1,
    delay: 2,
});