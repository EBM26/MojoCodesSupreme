$(document).ready(function() {

    $('.oneTitleBox').click(function() {
          $('.subBox').hide();
          $('.oneBox').show();
          $('.subTitleBox').removeClass("redBox");
          $('.subTitleBox').addClass("blueBox");
          $('.oneTitleBox').removeClass("blueBox");
          $('.oneTitleBox').addClass("redBox");
    });

    $('.subTitleBox').click(function() {
          $('.oneBox').hide();
          $('.subBox').show();
          $('.oneTitleBox').removeClass("redBox");
          $('.oneTitleBox').addClass("blueBox");
          $('.subTitleBox').removeClass("blueBox");
          $('.subTitleBox').addClass("redBox");
    });

    $('.boxCol').hover(function() {
          $('.topSection').removeClass("redBack");
          $('.topSign').removeClass("greenBack");
          $('.midSection').removeClass("blueBack");
          $('.orderButt').removeClass("orangeBack");
          $(this).find(".topSection").addClass("redBack");
          $(this).find(".topSign").addClass("greenBack");
          $(this).find(".midSection").addClass("blueBack");
          $(this).find(".orderButt").addClass("orangeBack");
    });

            
});