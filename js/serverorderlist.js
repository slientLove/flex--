$(function(){

    $(".book a").on("click",function(event){
            if( getCookie('user_mobile') ){
                window.location.href='http://service.enjoykeys.com?user_mobile='+ getCookie('user_mobile');
            }else{
                $('#notloginstatus').show();
                $('#mask_loading').show();
                var num=5;
                var timer = null;
                clearInterval(timer);
                timer = setInterval(function(){
                    num--;
                    $('#notloginstatus .num').html('').html(num);
                      if(num<=0){
                        window.location.href='http://www.enjoykeys.com/user/login.html?urlid=service';
                      }
                },1000);
                 $(".close").on("click",function(){
                    $('#notloginstatus').hide();
                    $('#mask_loading').hide();
                     clearInterval(timer);
                     $('#notloginstatus .num').html('').html(5);
                })
                
            }
    });
    $(".order a").on("click",function(event){
            if( getCookie('user_mobile') ){
                window.location.href='http://service.enjoykeys.com?user_mobile='+ getCookie('user_mobile');
            }else{
                $('#notloginstatus').show();
                $('#mask_loading').show();
                var num1=5;
                var timer = null;
                clearInterval(timer);
                timer = setInterval(function(){
                    num1--;
                    $('#notloginstatus .num').html('').html(num1);
                      if(num1<=0){
                        window.location.href='http://www.enjoykeys.com/user/login.html?urlid=service';
                      }
                },1000);
                 $(".close").on("click",function(){
                    $('#notloginstatus').hide();
                    $('#mask_loading').hide();
                     clearInterval(timer);
                     $('#notloginstatus .num').html('').html(5);
                })
                
            }
    });

   
})