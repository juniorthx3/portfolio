const navigation= document.querySelector(".navigation");

window.addEventListener("scroll", function(){
    window.pageYOffset > 100 ? navigation.classList.add('navigation-active'): navigation.classList.remove('navigation-active')
});

navigation.addEventListener('click', function(){
   window.scrollTo({
       top:0,
       left:0,
       behavior:'smooth'
   })

});


function openMsgBox(){
    document.querySelector('.icon-msg').style.opacity = '0';
    document.querySelector('.chatbox').style.clipPath="circle(75%";
    document.querySelector('.container-msg').style.visibility="visible";
}

function closeChat(){
      document.querySelector('.chatbox').style.clipPath="circle(0% at 0% 95%)"
      document.querySelector('.icon-msg').style.opacity = '1';
      document.querySelector('.icon-msg').style.transitionDelay = '0.5s';
      document.querySelector('.container-msg').style.visibility="hidden";
}