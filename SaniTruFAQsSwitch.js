$(function () {
    
    $('.productButton').click(function() {

        if ($(this).hasClass("activeButton")) {
            return;
        }

        else {
            $(".buttonAct").removeClass("activeButton");
            $(this).addClass("activeButton");
            $('.rowDetails').removeClass("activeRow");
            $(".productDetails").addClass("activeRow");
            $('html, body').animate({
                scrollTop: $("#productSection").offset().top
            }, 1000);

        }         
    });

    $('.makingButton').click(function() {
        
        if ($(this).hasClass("activeButton")) {
            return;
        }

        else {
            $(".buttonAct").removeClass("activeButton");
            $(this).addClass("activeButton");
            $('.rowDetails').removeClass("activeRow");
            $(".makingDetails").addClass("activeRow"); 
            $('html, body').animate({
                scrollTop: $("#makingSection").offset().top
            }, 1000);
        }         
    });

    $('.surfaceButton').click(function() {
        
        if ($(this).hasClass("activeButton")) {
            return;
        }

        else {
            $(".buttonAct").removeClass("activeButton");
            $(this).addClass("activeButton");
            $('.rowDetails').removeClass("activeRow");
            $(".surfaceDetails").addClass("activeRow");
            $('html, body').animate({
                scrollTop: $("#surfaceSection").offset().top
            }, 1000); 
        }         
    });

    $('.usingButton').click(function() {
        
        if ($(this).hasClass("activeButton")) {
            return;
        }

        else {
            $(".buttonAct").removeClass("activeButton");
            $(this).addClass("activeButton");
            $('.rowDetails').removeClass("activeRow");
            $(".usingDetails").addClass("activeRow");
            $('html, body').animate({
                scrollTop: $("#usingSection").offset().top
            }, 1000); 
        }         
    });

    $('.customerButton').click(function() {
        
        if ($(this).hasClass("activeButton")) {
            return;
        }

        else {
            $(".buttonAct").removeClass("activeButton");
            $(this).addClass("activeButton");
            $('.rowDetails').removeClass("activeRow");
            $(".customerDetails").addClass("activeRow"); 
            $('html, body').animate({
                scrollTop: $("#customerSection").offset().top
            }, 1000);
        }         
    });

    $('.videosButton').click(function() {
        
        if ($(this).hasClass("activeButton")) {
            return;
        }

        else {
            $(".buttonAct").removeClass("activeButton");
            $(this).addClass("activeButton");
            $('.rowDetails').removeClass("activeRow");
            $(".videosDetails").addClass("activeRow"); 
            $('html, body').animate({
                scrollTop: $("#videosSection").offset().top
            }, 1000);
        }         
    });




});


