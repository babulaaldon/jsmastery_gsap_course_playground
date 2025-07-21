import gsap from 'gsap';

const showToastLoop = () => {
    gsap.to('.toast', {
        y: -102,
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: 'power2.out',
        onComplete: () => {
            gsap.to('.toast', {
                delay: 2,
                y: 200,
                opacity: 0,
                scale: 0.95,
                duration: 0.6,
                ease: 'power2.in',
            })
        }
    })
}

showToastLoop();