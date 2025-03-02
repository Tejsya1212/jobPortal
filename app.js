$(document).ready(function(){
    $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      if(scroll>150){
        $(".navbar").css("background","#222");
        $(".navbar").css("box-shadow", "rgba(0,0,0,0.1)0px 4px 12px ")
      }
      else{
        $(".navbar").css("background" , "transparent");
        $(".navbar").css("box-shadow" , "none");
      }
    })
    });
    
    var navbarHeight = $(".navbar").outerHeight();
    $(".navbar-menu a").click(function(e){
      var targetHref = $(this).attr("href");
      $("html,body").animate({
        scrollTop:$(targetHref).offset().top = navbarHeight
      },1000)
      e.preventDefault();
    });
    
    const mobile = document.querySelector(".menu-toogle");
    const mobiLelink = document.querySelector(".navbar-menu");
    
    mobile.addEventListener("click" , function(){
    mobile.classList.toggle("is-active");
    mobileLink.classList.toggle("active");
    })
    
    mobilelink.addEventListener("click",function(){
      const menuBars =document.querySelector(".is-active");
      if(window.innerWidth <=768 && menuBars){
        mobile.classList.toggle("is-active");
        mobileLink.classList.remove("active");
      }
    })