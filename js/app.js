$(function(){
$('a').click(function(e){
    e.preventDefault();
});

// loading-p
setTimeout(() => {
    $('.loading-p').fadeOut(function(){
        $('.login-p').fadeIn();
    });        
}, 1500);

//login-p
$('#id, #password').on({
    focusin:function(){ 
        $(this).prev().addClass('change');
    },
    focusout:function(){
        $(this).prev().removeClass('change');
    },
});

$('#btn-submit').click(function(){    
    var id=$('#id').val(); 
    var password=$('#password').val();
      $('.message').remove();

  
    if(id==''){//아이디 값이 없다(빈값)
        $('#id').after('<p class="message">*아이디를 입력하세요.</p>').focus();
    }else if(password==''){//패스워드 값이 없다(빈값)
        $('#password').after('<p class="message">*비밀번호를 입력하세요.</p>').focus();
    }else{//아이디와 패스워드 값이 둘다 있다.
        //아이디의 값을 저장 
        var id=$('#id').val();
        $('.nav b').text(id);                                            
        $('.login-p').hide();
        $('.goal-p').show();
        $('#btn-login').hide();
      }
});

$('#id, #password').keyup(function(){
    var textLength=$(this).val().length;
        if(textLength!=0){
        $(this).next('.message').remove();
      }
});    

$('.login-form .link a:first-child').click(function(){
    $('.login-chart').fadeIn();
});

$('.login-form .link a:last-child').click(function(){
    $('.login-find').fadeIn();
});

//login-pw
$('.login-pw .pw-btn a').click(function(){
    $('.login-pw .pw-btn i').removeClass('active');
    $(this).addClass('active');
});

$('.login-pw button').click(function(){
    $('.login-pw').hide();
    $('.goal-p').show();
});

//login-chart
$('.login-chart .icon-close').click(function(){
    $('.login-chart').fadeOut();
});

$('.login-chart .group .ok').click(function(){
    $('.goal-p').fadeIn();
});

//pw-setting
$('.pw-setting .icon-backarrow').click(function(){
    $('.pw-setting').fadeOut();
});

$('.pw-setting .ok').click(function(){
    $('.pw-check').show();
    $('.pw-setting').hide();
})

//pw-check
$('.pw-check .ok').click(function(){
    $('.pw-pop').fadeIn();
});

$('.pw-pop .ok').click(function(){
    $('.pw-pop').fadeOut();
    $('.pw-setting, .pw-check').hide();
});

//login-find
$('.login-find .icon-close').click(function(){
    $('.login-find').fadeOut();
});

$('.login-find .wrap .m-send').click(function(){
        $('.idfind-pop').fadeIn();
});

$('.login-find .wrap .p-send').click(function(){
    $('.idfind-pop').fadeIn();
});

//goal-p
$('.icon-menu').click(function(){
    $('.nav').fadeIn();
});

$('.goal-p > a').click(function(){
    $('.goal-p').hide();
    $('.goalset-p').fadeIn();
});

$('.goal-p .header-wrap .icon-more').click(function(){
    $('.goal-p').hide();
    $('.goalset-p').fadeIn();
});

//goalset-p
$('.goalset-p .icon-close').click(function(){
    $('.goalset-p').hide();
    $('.goal-p').fadeIn();
});

$('.goalset-p button').click(function(e){
    e.preventDefault();
    $('.goalset-p').hide();
    $('.goal-main, .goal-end, .goal-list1').fadeIn();
});

var nonLinearSlider = document.getElementById('slider');
noUiSlider.create(nonLinearSlider,{
    connect: true,
    start: [ 10, 100 ],
    step: 5,
    tooltips: [true, true],
    range: {
        'min': [ 0 ],
        'max': [ 100 ]
    },
    format: wNumb({
        decimals: 0
    }),
});
// var nodes = [$('#min')[0], $('#max')[0]];
// nonLinearSlider.noUiSlider.on('update', function ( values, handle) {
//     nodes[handle].innerHTML = numberWithCommas(values[handle]);                
// });

nonLinearSlider.noUiSlider.on('update', function () {                
    $('.noUi-tooltip').each(function(){
        $(this).text(numberWithCommas($(this).text()));
    })
});

$('.amount b').each(function(){
    $(this).text(numberWithCommas($(this).text()));
});

//numberCommas
function numberWithCommas(x){
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};


$('.tab-nav a').click(function(){
    $('.tab-nav a').removeClass('active'); 
    $(this).addClass('active'); 

    //내가 클릭한 메뉴에서 아이디선택자 구하기               
    var id=$(this).attr('href');

    $('.tab-contents div').hide();                
    $(id).delay().show();
});

//goal-main    
var swiper = new Swiper('.swiper-container', {
    navigation: {
    nextEl: '.icon-arrowr',
    prevEl: '.swiper-button-prev',
    },
});

$('.goal-main .icon-more').click(function(){
    $('.goal-main').hide();
    $('.goalset-p').fadeIn();
});

$('.goal-main .icon-menu').click(function(){
    $('.nav').fadeIn();
});

//goal-list1
$('.goal-list1 .wrap .goal-deta').click(function(){
    $('.goal-list1 .wrap .goal-deta-tab').toggle();
});

$('.goal-list1 .wrap1 .goal-deta').click(function(){
    $('.goal-list1 .wrap1 .goal-deta-tab').toggle();
});

$('.goal-list1 svg').click(function(){
    $('.goal-list1').hide();
    $('.goal-list2').fadeIn();
});

$('.goal-list1 .list1 a').click(function(){
    $('.goal-list1 .list1 .tab').toggle();
});

$('.goal-list1 .list2 a').click(function(){
    $('.goal-list1 .list2 .tab').toggle();
});

$('.goal-list1 .list3 a').click(function(){
    $('.goal-list1 .list3 .tab').toggle();
});

$('.goal-list1 .list3 .icon-more').click(function(){
    $('.alram-set').show();
});

//goal-list2
$('.goal-list2 .text-box .goal-deta').click(function(){
    $('.goal-list2 .goal-deta-tab').toggle();
});

$('.container li:last-child').click(function(){
    // $('.goal-list2').hide();
    $('.out-pop').fadeIn();
});
$('.goal-list2 .container .main:first-child').click(function(){
    $('.container li:first-child .sticker-tab').toggle();
    $('.goal-list2').css('height','830px');
});
$('.goal-list2 .circle-chart').click(function(){
    $('.goal-main').hide();
    $('.goal-list2').hide();
    $('.goal-list1').show();
});

//프로그래스바
    $('.progress-bar').each(function(){
        $(this).find('.percent').animate({
            left:$(this).data('percent')
        },
            {
                duration:2000,
                step:function(now){
                    var data=Math.round(now);                        
                    $(this).text(data+'%');                          
                }
            }
        )       
        $(this).find('.bar').animate({                
                width:$(this).data('percent')
        },2000)
    });
    
//alram-set
$('.alram-set > a').click(function(){
    $('.alram-set').fadeOut();
    $('.goal-main').fadeIn();
    $('.goal-list1').fadeIn();
});

//시간 슬라이드       
for (let  index = 1; index < 25; index++) {            
    if(index < 10){
        $('.hours .swiper-wrapper').append('<div class="swiper-slide"><p>'+ '0' + index +'</p></div>')
    }else{
        $('.hours .swiper-wrapper').append('<div class="swiper-slide"><p>'+ index +'</p></div>')
    }                    
}

for(let index = 0; index < 60; index++){           
    if(index < 10){
        $('.minutes .swiper-wrapper').append('<div class="swiper-slide"><p>'+ '0' + index +'</p></div>')
    }else{
        $('.minutes .swiper-wrapper').append('<div class="swiper-slide"><p>'+  index +'</p></div>')
    }           
}
var swiper2 = new Swiper('.alram-set .hours .swiper-container', {
    direction: 'vertical',
    loop: true,
    slidesPerView: 3,
    spaceBetween: 5, 
    centeredSlides:true, 
    slideToClickedSlide: true,
});

var swiper3 = new Swiper('.alram-set .minutes .swiper-container', {
    direction: 'vertical',
    loop: true,
    slidesPerView: 3,
    spaceBetween: 5, 
    centeredSlides:true, 
    slideToClickedSlide: true,
});

$('.days .icon-m1').click(function(){
    $(this).toggleClass('icon-m1 icon-m');
});

$('.days .icon-t21').click(function(){
    $(this).toggleClass('icon-t21 icon-t2');
});

$('.days .icon-w').click(function(){
    $(this).toggleClass('icon-w icon-w1');
});

$('.days .icon-t4').click(function(){
    $(this).toggleClass('icon-t4 icon-t41');
});

$('.days .icon-f').click(function(){
    $(this).toggleClass('icon-f icon-f1');
});

$('.days .icon-s').click(function(){
    $(this).toggleClass('icon-s icon-s1');
});

$('.days .icon-s7').click(function(){
    $(this).toggleClass('icon-s7 icon-s');
});

$('.alram-set button, .alram-set .icon-closew').click(function(){
    $('.alram-set').fadeOut();
});

//nav
$('.menu li a').click(function(){        
    if($(this).hasClass('active')){
        $(this).removeClass('active');
        $(this).next().slideUp();
        $(this).find('i').removeClass('fa-angle-up').addClass('fa-angle-down');
    }else{
        $('.menu a').removeClass();
        $('.menu .box').slideUp();
        $('.menu i').removeClass('fa-angle-up').addClass('fa-angle-down');
        $(this).find('i').removeClass('fa-angle-down').addClass('fa-angle-up');
        $(this).addClass('active');
        $(this).next().slideDown();
    }
});

$('.icon-menu').click(function(){
    $('.nav').fadeIn();
});

$('.nav #codeSetting').click(function(){
    $('.pw-setting').fadeIn();
});

$('.nav .icon-close').click(function(){
    $('.nav').fadeOut();
});


//pop ======================================================================================================
//ask-pop
$('.ask').click(function(){
    $('.ask-pop').fadeIn();
});

$('.ask-pop button').click(function(){
    $('.ask-pop').hide();
});

//access-pop
$('.nav .profile').click(function(){
    $('.access-pop').show();
});

$('.access-pop .no').click(function(){
    $('.access-pop').fadeOut();
});

$('.access-pop .ok').click(function(){
    $('.access-pop').fadeOut();
    $('.profile-pop').fadeIn();
});

//idfind-pop
$('.idfind-pop .ok').click(function(){
    $('.idfind-pop').hide();
});

//site-pop
$('.site').click(function(){
    $('.site-pop').fadeIn();
});

$('.site-pop .ok').click(function(){
    $('.site-pop').hide();
});

//version-pop
$('.version').click(function(){
    $('.version-pop').fadeIn();
});

$('.version-pop .ok').click(function(){
    $('.version-pop').hide();
});

//profile-pop
$('.profile-pop button').click(function(){
    $('.profile-pop').fadeOut();
});

//out-pop
$('.out-pop button:first-child').click(function(){
    $('.out-pop').hide();
});

$('.out-pop button:last-child').click(function(){
    $('.out-pop').hide();
    $('.goal-list2').hide();
    $('.goal-list1').show();
    $('.goal-main').fadeIn();
});

//logout-pop
$('.logout').click(function(){
     $('.logout-pop').fadeIn();
});

$('.logout-pop .cancel').click(function(){
    $('.logout-pop').fadeOut();
});

$('.logout-pop .logout').click(function(){
    $('.nav').hide();
    $('.logout-pop').hide();
    $('.login-p').fadeIn();
});

})