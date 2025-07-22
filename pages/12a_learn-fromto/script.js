import gsap from 'gsap';

const bars = document.querySelectorAll('.bar');

bars.forEach((bar, index) => {
    gsap.fromTo(bar, {
        scaleY: 0.4,
    },{
        scaleY: 1.7,
        duration: 0.5,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        delay: index * 0.1,

    }
)
})