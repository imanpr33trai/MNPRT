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

// Website Full Animations

const timeline = gsap.timeline({repeat:0 , repeatDelay:0.5});
timeline.from(".sentence .first-line" , {
    opacity:0,
    duration:1,
    filter:"blur(10px)"
});
timeline.from(".sentence .second-line" ,{
    opacity:0,
    duration:1,
    filter:"blur(10px)"
});
timeline.from(".box",{
    transform:"scale(0)",
    duration:2,
    onUpdate:function (){
        if(this.progress() >= 0.5 && !this.hasUpdated){
            console.log("50reaced");
        }
        gsap.from('.box',{borderRadius:"0px",duration:50});
        this.hasUpdated = true;
    },
    onComplete:function(){
        this.hasUpdated = false;
    }
})
timeline.to(".move .morque",{
    transform:'translateX(-100%)',
    ease:"none",
    duration:15,
    repeat:-1
})
