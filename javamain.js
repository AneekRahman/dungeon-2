/* THE HIDDEN ELEMENTS GO HERE */
    $(".profilebox").hide()
    $(".login button span").hide();

$(document).ready(function(){
    /* THE PROFILE SECTIONS SHOW/HIDE GOES HERE */
    $("#proIcon").click(function(){
        $(".profilebox").toggle(); 
    })
    /* THE LOGIN BUTTON ANIMATION HERE */

    $(".login button").click(function(){
        $(this).css({
            "padding-right":"3.6em"
        })
        $(this).text("Log In or Sign Up") 
    })
    $(".login button").blur(function(){
        $(this).css({
            "padding-right":"1.8em"
        })
        $(this).text("Log In")
    })
    /* THE LOGIN BOX HIDE/SHOW AND ANIMATION HERE */
    $(".loginbox").hide();
    $(".login button").on("click",function(){
        $(".loginbox").toggle(150);
    })
    /* THE PROFILE SECTIONS CLICK COUNTER HERE */
    var counter=0;
    $(".profilebox button").click(function(){
        counter++
        $('output').text(" "+counter)
    })
    /* THE SIDEBAR HIDE/SHOW GOES HERE */
    $(".sidebar").hide()
    $("#bars").click(function(){
        $(".sidebar").toggle(350);
    })
    /* THE TOPBAR ELEMENTS SQUZING HIDE SHOW HERE */
    $(window).resize(function(){
       if($(window).width()<1027){
        $("#proIcon").hide()
        $(".topbar").css({
            "top":"0"
        })
    }else{
        $("#proIcon").show()
    }
        if($(window).width()<930){
            $(".navBar").hide()
        }else{
            $(".navBar").show()
        }
        if($(window).width()<510){
            $(".login button").hide()
            $(".loginbox").hide()
            $(".topbar").css({
                "padding-bottom":".57em"
            })
        }else{
            $(".loginbox").show()
            $(".login button").show()
            $(".topbar").css({
                "padding-bottom":".2em"
            })
        }
    })
    /* TOPBAR PREPENDING TO THE SIDEBAR HERE */
    $(window).resize(function(){
        if($(window).width()<902){
            
        }
    })
})