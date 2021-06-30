

function BurgerOn() {   
    $(".mobileButton .button").addClass("burgerOpen");
    $(".mobileButton").addClass("burgerOpen2");
}

function BurgerOff() {   
    $(".mobileButton .button").removeClass("burgerOpen");
    $(".mobileButton").removeClass("burgerOpen2");
}

$('.header__burger').click(function() { 
        return (this.tog = !this.tog) ? BurgerOn() : BurgerOff();
});


