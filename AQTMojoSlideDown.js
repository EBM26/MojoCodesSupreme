$(function() {

  $('.faq-div').on('click', function(e) {
    var that = $(e.currentTarget);
    $('.faq-div:not(:eq(' + that.index() + '))').removeClass('active');
    $('.text-box:not(:eq(' + that.index() + '))').slideUp();
    $('.arrow-icon:not(:eq(' + that.index() + '))').removeClass('transition');
  });

});