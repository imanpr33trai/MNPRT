const navbarLinks = document.querySelectorAll('.nav-item');

navbarLinks.forEach(link => {
    link.addEventListener('mouseover',() =>{
        navbarLinks.forEach(otherlink => {
            if (otherlink !=link) {
                otherlink.style.opacity = '0.3'
            }
        });
    })

    link.addEventListener('mouseout',() =>{
        navbarLinks.forEach(otherlink =>{
            otherlink.style.opacity = '1'
            
        })
    })
});


    // gsap.from(".sent",{
    //     duration:1,
    //     y:100,
    //     stagger:0.7,
    //     ease: "power1.out",
    //     opacity:0
    // })

console.log(window.innerWidth);
console.log(window.innerHeight);