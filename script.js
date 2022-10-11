var tl = gsap.timeline();

tl.from(".box1",{
    opacity:0,
    duration:1,
    delay:1
})
// .from(".box1 .a",{
   
//     duration:.5,
//     y:000
    
// },1)
.from(".box1 .b",{
   
    duration:1,
    x:100,
    delay:.1
},1)
// tl.from(".c",{
//     opacity:0,
//     duration:1,
//     y:-100
// },.5)
var serv = document.querySelector(".serv")
var overlay = document.querySelector(".overlay")
var main = document.querySelector(".main")
serv.addEventListener("mouseover",function(){
  overlay.style.display = "initial"
})

main.addEventListener("mouseover",function(){
  overlay.style.display = "none"
})








$(document).ready(function(){
  $('.content').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots:true,
  });
});































