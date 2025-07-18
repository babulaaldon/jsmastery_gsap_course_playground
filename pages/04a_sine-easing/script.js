import gsap from 'gsap';

const button = document.querySelector('.scroll-to-top');

let isFloating = false;

window.addEventListener('scroll', () =>{
    if(window.scrollY > 300){
        button.classList.add('show');

    if(!isFloating){
        gsap.to(button,{
            y: 15,
            duration: 1.2,
            repeat: -1,
            yoyo: true,
            ease: 'sine.out'
        })
        isFloating = true;
    }
    } else {
        button.classList.remove('show');
    }
})

button.addEventListener('mouseenter', () => {
    gsap.to(button, {scale: 1.23 , duration: 0.3})
})

button.addEventListener('mouseleave', () => {
    gsap.to(button, {scale: 1 , duration: 0.3})
})

button.addEventListener('click', () => {
    window.scrollTo(0,0);
})