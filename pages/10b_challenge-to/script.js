import gsap from 'gsap';

const showToastLoop = () => {
    gsap.to('.toast.one', {
        y: 5,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: 'power2.out',
        onComplete: () => {
            gsap.to('.toast.one', {
                delay: 2,
                y: 1,
                opacity: 0,
                scale: 0.3,
                duration: 0.4,
                ease: 'power2.in',
                onComplete: () => {
                    gsap.to('.toast.two', {
                        opacity: 1,
                        y: 5,
                        scale: 1,
                        duration: 0.8,
                        ease: 'power2.out',
                        onComplete: () => {
                            gsap.to ('.toast.two', {
                            delay: 2,
                            y: 1,
                            opacity: 0,
                            scale: 0.3,
                            duration: 0.4,
                            ease: 'power2.in',
                            onComplete: () => {
                            showToastLoop();
                            }
                            })
                        }
                    })
                }
            })
        }
    })
}

showToastLoop();