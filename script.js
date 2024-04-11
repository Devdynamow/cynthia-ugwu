const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
});


function firstPageAnim() {
    var tl = gsap.timeline();

    tl.from("#nav", {
        y: "-10",
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    })
        .to(".boundingelem", {
            y: 0,
            duration: 2,
            stagger: .2,
            delay: -1,
            ease: Expo.easeInOut
        })
        .from("#footer", {
            y: "-10",
            opacity: 0,
            duration: 1.5,
            delay: -1,

            ease: Expo.easeInOut
        })

}
document.querySelectorAll(".elem").forEach(function (elem) {
    var rotate = 0;
    var diffrot = 0;
    elem.addEventListener("mouseleave", function (dets) {


        gsap.to(elem.querySelector("img"), {
            opacity: 0,
            ease: Power3,
            duration: 0.5,

        });
    });
});
// var imageelem = document.querySelectorAll(".elem")
// imageelem.forEach(function(ime){
//     ime.addEventListener("mousemove",function(details){
//         gsap.to("#page2 img",{
// x:details.x - 200,
// y:details.y - 200,
// opacity:1
//         })
//     })
// })

document.querySelectorAll(".elem").forEach(function (elem) {
    var rotate = 0;
    var diffrot = 0;
    elem.addEventListener("mousemove", function (dets) {
        var diff = dets.clientY - elem.getBoundingClientRect().top;
        diffrot = dets.clientX - rotate;
        rotate = dets.clientX;

        gsap.to(elem.querySelector("img"), {
            opacity: 1,
            ease: Power3,
            top: diff,
            left: dets.clientX,
            rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5)

        });
    });
});



var timeout;
function mouseChaptaKaro() {
    var xscale = 1;
    var yscale = 1;


    var xprev = 0;
    var yprev = 0;

    window.addEventListener("mousemove", function (dets) {
        this.clearTimeout(timeout);

        xscale = gsap.utils.clamp(.8, 1.2, dets.clientX - xprev);
        yscale = gsap.utils.clamp(.8, 1.2, dets.clientY - yprev);

        xprev = dets.clientX;
        yprev = dets.clientY;

        circleMouseFollower(xscale, yscale);

        timeout = setTimeout(function () {
            document.querySelector('#minicircle').style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${1}, ${1})`

        }, 100);



    });
}
mouseChaptaKaro();


function circleMouseFollower(xscale, yscale) {
    window.addEventListener("mousemove", function (dets) {
        document.querySelector('#minicircle').style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`
    })
}
circleMouseFollower();
firstPageAnim();


// document.addEventListener("DOMContentLoaded", function(){
//     setTimeout(function(){
//         document.querySelector("#loaderconatiner").style.display = "none"
//         document.querySelector("#main").style.display = "block"
    
//     },2000)
    
    
// })
var plug = document.querySelector("#plug")
plug.addEventListener("mouseenter", function(){
    plug.setAttribute("src", "./hudu.png")
})
plug.addEventListener("mouseleave", function(){
    plug.setAttribute("src", "cynthia.png")
})









