 $(document).ready(function() {

  $(".quickRow").click(function() {
   
      if ( $(this).hasClass("refreshClick") ) {
        $(".wrapperSection, .refreshRow").fadeIn();
      }

      if ( $(this).hasClass("comfortClick") ) {
        $(".wrapperSection, .comfortRow").fadeIn();
      }

      if ( $(this).hasClass("purifyClick") ) {
        $(".wrapperSection, .purifyRow").fadeIn();
      }

      if ( $(this).hasClass("energizeClick") ) {
        $(".wrapperSection, .energizeRow").fadeIn();
      }

      if ( $(this).hasClass("breatheClick") ) {
        $(".wrapperSection, .breatheRow").fadeIn();
      }

      if ( $(this).hasClass("inspireClick") ) {
        $(".wrapperSection, .inspireRow").fadeIn();
      }

      if ( $(this).hasClass("unwindClick") ) {
        $(".wrapperSection, .unwindRow").fadeIn();
      }

      if ( $(this).hasClass("ariseClick") ) {
        $(".wrapperSection, .ariseRow").fadeIn();
      }

      if ( $(this).hasClass("balanceClick") ) {
        $(".wrapperSection, .balanceRow").fadeIn();
      }

      if ( $(this).hasClass("slumberClick") ) {
        $(".wrapperSection, .slumberRow").fadeIn();
      }

      if ( $(this).hasClass("sensualClick") ) {
        $(".wrapperSection, .sensualRow").fadeIn();
      }

      if ( $(this).hasClass("elevateClick") ) {
        $(".wrapperSection, .elevateRow").fadeIn();
      }

      if ( $(this).hasClass("focusClick") ) {
        $(".wrapperSection, .focusRow").fadeIn();
      }

      if ( $(this).hasClass("holidayClick") ) {
        $(".wrapperSection, .holidayRow").fadeIn();
      }


  });
  
  $(".bigX").click(function() {
        $(".wrapperSection, .hidRow").fadeOut();
  });


});