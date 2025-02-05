
var maleSizes = ['5.5-7', '7.5-9', '9.5-11', '11.5-13', '13.5-15' ];
var femaleSizes = [ '4.5-6', '6.5-8', '8.5-10', '10.5-12' ];

var radioWr = $('.radio-wr');

radioWr.change(function() {
  var pack = $(this).closest('.pack');
  $('.step-selector-form').hide();

  pack.find('.pack-header > div').css('background-color', '#172E58');
  pack.find('.pack-header > div').find('.widget-text').css('color', 'white');
  pack.find('.pack-border > div').css('border-color', '#172E58');
});


var firstOfferValueSelector = 'input[name="offer-radio"]:checked';
var secondOfferValueSelector = 'input[name="offer-radio2"]:checked';

function updateControlsState() {
    var firstOffer = $(firstOfferValueSelector).val();
    var secondOffer = $(secondOfferValueSelector).val();
    if (firstOffer) {
        $('.scroll-btn').removeClass('disabled');
        $('input[name="offer-radio2"]').prop('disabled', false);
    } else {
        $('.scroll-btn').addClass('disabled');
        $('input[name="offer-radio2"]').prop('disabled', true);
    }

    if (firstOffer && secondOffer) {
        $('.send-offers-btn').removeClass('disabled');
        if (secondOffer == 'superthotics') {
            $('#supGenderSelector, #supSizeSelector').prop('disabled', false);
        } else {
            $('#supGenderSelector, #supSizeSelector').prop('disabled', true);
        }
    } else {
        $('.send-offers-btn').addClass('disabled');
        $('#supGenderSelector, #supSizeSelector').prop('disabled', true);
    }
}

function updateSizesDropdown() {
    var gender = $('#supGenderSelector').val();
    var valuesToAdd = maleSizes;
    if (gender === 'female') {
        valuesToAdd = femaleSizes
    } 
    var sizeSelector = $('#supSizeSelector');
    sizeSelector.html('');
    $.each(valuesToAdd, function(key, value) {   
         sizeSelector.append($("<option></option>")
                    .attr("value", value)
                    .text(value)); 
    });
}

$(function() {
  $('.radio-wr input').change(function() {
        updateControlsState();
  });

  updateControlsState();
  updateSizesDropdown();
  
  $('#supGenderSelector').change(function() {
      updateSizesDropdown();
  });

  
  $('.send-offers-btn a').click(function(e) {
    var isButtonDisable = $('.send-offers-btn').hasClass('disabled');
    if (isButtonDisable) {
      e.preventDefault();
      return false;
    }
  });

  if (typeof window.mojoApp !== 'undefined') {
    window.mojoApp._hooks.add('offer_selection_send_offers', function(x, options) {
        var firstOffer = $(firstOfferValueSelector).val();
        var secondOffer = $(secondOfferValueSelector).val();
        var gender = $('#supGenderSelector').val();
        var size = $('#supSizeSelector').val();

        var filteredOffers = [];
        var regularOfferIds = [];

        /* add regular offers */
        $.each(window.mojoApp.pageOffers, function(key, value) {
            if (value.customFields && value.customFields.MainOffer === firstOffer && value.customFields.BonusOffer === secondOffer) {
                if (secondOffer === 'superthotics') {
                    if (value.customFields.Size === size && value.customFields.Gender === gender) {
                        filteredOffers.push(value);
                        regularOfferIds.push(value.offerId);
                    }
                } else {
                    filteredOffers.push(value);
                    regularOfferIds.push(value.offerId);
                }
            }
        });
        /* add attached offers */
        $.each(window.mojoApp.pageOffers, function(key, value) {
            if (value.parentOfferId && regularOfferIds.indexOf(value.parentOfferId) !== -1) {
                filteredOffers.push(value);
            }
        });

        /* add only filtered offers, but clear others */
        $.each(window.mojoApp.pageOffers, function(key, value) {
            x.offers[value.offerId] = 0;
        });

        $.each(filteredOffers, function(key, value) {
            x.offers[value.offerId] = 1;
        });
      }
    );
  }
});