function openMsgBox(){
    document.querySelector('.window-msg').style.opacity = '0';
    document.querySelector('.chatbox').style.clipPath="circle(75%";
  }

  function closeChat(){
      document.querySelector('.chatbox').style.clipPath="circle(0% at 90% 95%)"
      document.querySelector('.window-msg').style.opacity = '1';
      document.querySelector('.window-msg').style.transitionDelay = '0.5s';
  }