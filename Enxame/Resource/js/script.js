//dropdown
$(function(){
$('.navbar li').hover(
function(){
    $('>ul.sub:not(:animated)',this).slideDown(500)
},
function(){
   $('>ul.sub',this).slideUp(300);

}
    );


});

//video
window.addEventListener("load",function(){
    let video = window.document.querySelector("#video");
video.play();
video.loop = true;

});

//reload
window.addEventListener('resize', function (event) {
    recarrega();
});

function recarrega() {
    document.location.reload();
};


// cards
if ($(window).width() < 769) {
    var swiper = new Swiper(".about-inner", {
        slidesPerView: 1,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
} else {
    var swiper = new Swiper(".about-inner", {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

}

//carousel swiper

var swiper = new Swiper(".carousel-swiper",{
spaceBetween: 30,
centeredSlides: true,
autoplay:{
    delay:2500,
    disbleOnInteracion: false,
},
pagination: {
    el:".swiper-pagination",
    clickable:true,
},
navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
}

});
/*menu-hamburguer*/
$("i").click(function () {
    $("ul").toggleClass("open")
});


/*login*/
function login(){
    var nome = document.getElementById('nome').value;
    var senha = document.getElementById('senha').value;
    if (nome == 'admin' && senha == 'admin') {
        alert('Sucesso !!');
        location.href = 'privacity.html'
    }
    else{
        alert('Fracasso !! usuário ou senha inválidos !!');
        document.getElementById('nome').value;
        document.getElementById('senha').value;
        document.getElementById('nome').focus();
    }
}
// 
// 



$(document).ready(function(){
    $('.grid').isotope({
        itemSelector: '.item',
    });


$('.filterBtnGroup').on('click','li',function(){
    var filterValue = $(this).attr('data-filter');
    $('.grid').isotope({filter:filterValue});
    $(this).addClass('active');
});

})

