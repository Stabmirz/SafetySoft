
//faq toggle stuff 
$('.togglefaq').click(function(e) {
    e.preventDefault();
    var notthis = $('.active').not(this);
    notthis.find('.icon-up').addClass('icon-down').removeClass('icon-up');
    notthis.toggleClass('active').next('.faqanswer').slideToggle(300);
     $(this).toggleClass('active').next().slideToggle("fast");
    $(this).children('i').toggleClass('icon-down icon-up');
});