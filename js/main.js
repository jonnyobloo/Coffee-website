// window event listeners

eventListener();
function eventListener(){
    const ui = new UI();
    // preloader
    window.addEventListener('load', function(){
        ui.hidePreloader();
    })
    // nav btn
    document.querySelector('.navBtn').addEventListener('click', function(){
        ui.showNav();
    })
    // control the video
    document.querySelector('.video__switch').addEventListener('click', function(){
        ui.videoControl();
    })
    // submit the form
    document.querySelector('.drink-form').addEventListener('submit', function(event){
        
    })
}



 function UI(){

 }
 
 //hide preloader
 UI.prototype.hidePreloader = function(){
    document.querySelector('.preloader').style.display = "none";
 }

 UI.prototype.showNav = function () {
    document.querySelector(".nav").classList.toggle("nav--show");
 }
 // play/pause the video
 UI.prototype.videoControl = function(){
     let btn = document.querySelector('.video__switch-btn');
     if(!btn.classList.contains('btnSlide')){
         btn.classList.add('btnSlide')
         document.querySelector('.video__item').pause()
     }
     else{
         btn.classList.remove("btnSlide");
         document.querySelector(".video__item").play();
     }
 }



