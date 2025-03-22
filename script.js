var cursor = document.querySelector("#cursor")
var blr = document.querySelector("#cursor-blr")

document.addEventListener("mousemove",function(dets){
    cursor.style.left = dets.x +3 + "px";
    cursor.style.top = dets.y  - 10 + "px";
    blr.style.left = dets.x - 250 + "px";
    blr.style.top = dets.y - 250 + "px";
})

var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        cursor.style.scale = 4
        cursor.style.border = "0.5px solid #fff"
        cursor.style.backgroundColor = "transparent"
        elem.style.color = "#95C11E"
    })
    elem.addEventListener("mouseleave",function(){
        cursor.style.scale = 1
        cursor.style.border = "0px solid #95C11E"
        cursor.style.backgroundColor = "#95C11E"
        elem.style.color = "#fff"
    })
})

gsap.to("#nav",{
    backgroundColor: "#000",
    height: "100px",
    duration: 0.5,
    scrollTrigger:{
        trigger: "#nav",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }
});

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        // markers: true,
        start: "top -25%",
        end: "top -70%",
        scrub: 2
    }
});

gsap.from("#about-us img,#about-us-in",{
    y: 90,
    opacity: 0,
    duration: 1,
    scrollTrigger:{
        trigger: "#about-us",
        scroller: "body",
        // markers: true,
        start: "top 60%",
        end: "top 50%",
        scrub: 3
    }
})

gsap.from(".card",{
    scale: 0.5,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
    scrollTrigger:{
        trigger: ".card",
        scroller: "body",
        // markers: true,
        start: "top 75%",
        end: "top 65%",
        scrub: 1
    }
})

gsap.from("#colon1",{
    y: -70,
    x: -70,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        // markers: true,
        start: "top 55%",
        end: "top 45%",
        scrub: 4
    }
})
gsap.from("#colon2",{
    y: 70,
    x: 70,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        // markers: true,
        start: "top 55%",
        end: "top 45%",
        scrub: 4
    }
})

gsap.from("#page4 h1",{
    y:50,
    scrollTrigger: {
        trigger: "#page4",
        scroller: "body",
        // markers: true,
        start: "top 75%",
        end: "top 70%",
        scrub: 3
    }
})