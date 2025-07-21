import gsap from 'gsap';

const repeat = document.querySelector('.repeat');

const animation = gsap.from('.card', {
    opacity: 0,
    y: 55,
    scale: 0.5,
    duration: 0.5,
    ease: 'power3.out',
    stagger: 0.2,
    onComplete: () =>{
        gsap.from('.card', {
            rotateY: 360,
            duration: 1.3,
            stagger: 0.2,
        })
    }
});


repeat.addEventListener('click', () => {
    animation.restart();
})