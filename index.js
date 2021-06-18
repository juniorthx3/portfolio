const navigation= document.querySelector(".navigation");
const bars= document.querySelector("#bars");
const times= document.querySelector("#times");
const menu = document.querySelector(".menu");

window.addEventListener("scroll", function(){
    window.pageYOffset > 100 ? navigation.classList.add('navigation-active'): navigation.classList.remove('navigation-active')
});

navigation.addEventListener('click', function(){
   window.scrollTo({
       top:0,
       left:0,
       behavior:'smooth'
   });
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

bars.addEventListener("click", ()=>{
    bars.classList.toggle("active");
    menu.classList.toggle("active");
    times.style.display='block';
    bars.style.display='none'

    menu.forEach((link, index)=>{
        if(link.style.animation){
            link.style.animation='';
        }else{
            link.style.animation=`digit 0.5s ease forwards ${index /7 + 1}s`;
        }
    })
});

times.addEventListener('click', ()=>{
    times.style.display='none';
    bars.style.display='block';
    menu.style.display='none';
})



