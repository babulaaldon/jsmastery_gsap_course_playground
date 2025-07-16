gsap.to('.card',{
    opacity: 1,
    scale: 1,
    duration: 2,
    onComplete: function() {
        gsap.to('.card',{
           y: -20,
           rotation: -400,
           repeat: -2,
           yoyo: true,
           duration: 8,
        });
    }
})