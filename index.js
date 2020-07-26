const burgerMenu = $('.haburgerIco');
const mobileMenu = $('.hamburgerMenu');
const blackBack = $('.menuBack');
const mailAdress = $('#mailInput');

//cards slider run check
if ($(window).width() >= 1024) {
    testimonialDesktop();
}
else {
    testimonial();
}

//slider function for mobile
function testimonial(){
    new Glider(document.querySelector('.cardsContainer'), {
        slidesToShow: 1,
        dots: '.dots',
        draggable: true
      });
}

//slider function for desktop
function testimonialDesktop(){
    new Glider(document.querySelector('.cardsContainer'), {
        slidesToShow: 3,
        slidesToScroll: 1,
        draggable: true
    });
}


//Mobile menu
burgerMenu.click(() => {
    if (!burgerMenuClicked) {
        burgerMenu.attr("src", "./images/icon-close.svg");
        mobileMenu.show();
        blackBack.show();
        $('body').css("overflow", "hidden");
        burgerMenuClicked = true;
    } else {
        burgerMenu.attr("src", "./images/icon-hamburger.svg");
        mobileMenu.hide();
        blackBack.hide();
        $('body').css("overflow", "auto");
        burgerMenuClicked = false;
    }

});

// Check for email adress typing
function validMail(mail) {
    let pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g ; //general format of email address using RegEx
    return !!pattern.test(mail);
}
function submitMail(){
    $('.errormail').hide();
    const address = ""+mailAdress.val();
    if(!validMail(address)){
        $('.errormail').show();
    }
}


