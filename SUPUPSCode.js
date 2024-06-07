var currentItems = [];
var currentItem = {
  id: 0,
  type: '',
  size: '',
  quantity: 1
};
var basePrice = 29.95;
var additionalPrice = 29.95;
$('.hidden-block').hide();
addNewItem();

$('button[data-type="women"]').click(function() {
  if (!$(this).hasClass('active')) {
    $(this).addClass('active');
    $('button[data-type="men"]').removeClass('active');
    $('div[data-gender="women"]').show();
    $('div[data-gender="men"]').hide();
    if (currentItem.type === 'Men') {
      currentItem.size = '';
    }
    currentItem.type = 'Women';
    toggleAddToCart();
  }
});

$('button[data-type="men"]').click(function() {
  if (!$(this).hasClass('active')) {
    $(this).addClass('active');
    $('button[data-type="women"]').removeClass('active');
    $('div[data-gender="men"]').show();
    $('div[data-gender="women"]').hide();
    if (currentItem.type === 'Women') {
      currentItem.size = '';
    }
    currentItem.type = 'Men';
    toggleAddToCart();
  }
});

$('button[data-size]').click(function() {
  $('button[data-size]').removeClass('active');
  $(this).addClass('active');
  currentItem.size = $(this).attr('data-size');
  toggleAddToCart();
});

$('.add-btn a').click(function() {
  if ($(this).hasClass('active')) {
    currentItem.id = new Date().getTime();
    currentItems.push(Object.assign({}, currentItem));
    addNewItem(currentItem);
    renderDropDowns();
    renderAddToCart();
  }
});

$('#selectQ').change(function() {
  currentItem.quantity = Number($(this).val());
});

$('body').on('change', '.selectQBottom', function() {
  var id = $(this).closest('[data-id]').attr('data-id');
  var val = Number($(this).val());
  var priceEl = $(this).closest('.grid__cell').find('.item-price');
  currentItems.forEach(function(el, i) {
    if (el.id === Number(id)) {
      el.quantity = val;
      var price = i === 0 ?
        `$${(29.95 * el.quantity).toFixed(2)} + S&P $9.95` :
        `$${(29.95 * el.quantity).toFixed(2)} + free S&P`;
      priceEl.text(price);
    }
  });

  reRenderQDropDown();
  renderDropDowns();
  renderAddToCart();
});

$('body').on('click', '.item-remove', function() {
  var id = Number($(this).attr('data-remove'));
  currentItems = currentItems.filter(function(el) {
    return el.id !== id;
  });
  reRenderQDropDown();
  renderDropDowns();
  renderAddToCart();
  $(this).closest('[data-id]').remove();
});

function toggleAddToCart() {
  var addToCartBtn = $('.add-btn a');
  if (currentItem.type !== '' && currentItem.size !== '') {
    addToCartBtn.addClass('active');
  }
  else {
    addToCartBtn.removeClass('active');
  }
}

function addNewItem(currentItem) {
  var quantity = getCurrentQuantity();
  var cartWr = $('.cart-wr > div');
  if (currentItem) {
    var isFirstPair = currentItems.length === 1;
    var price = isFirstPair ?
      `$${(29.95 * currentItem.quantity).toFixed(2)} + S&P $9.95` :
      `$${(29.95 * currentItem.quantity).toFixed(2)} + free S&P`;
    cartWr.append('<div class="grid__row item-box" data-id="' + currentItem.id + '"><div class="grid__column area--12"><div class="grid__cell"><div class="grid__row grid__row--forever"> <div class="grid__column area--7"> <div class="grid__cell"> <div> <div class="widget-text item-price">' + price + '</div></div>    <div>    <div class="widget-text item-size">Size: ' + currentItem.type + '’s ' + `${currentItem.size - 1.5} - ${currentItem.size}` + '</div>    </div>    <div>    <div class="widget-text item-quantity">Quantity:</div> <select id="' + currentItem.id + '" class="selectQBottom"></select> </div> </div> </div> <div class="grid__column area--5"> <div class="grid__cell"> <div class="widget-text item-remove" data-remove="' + currentItem.id + '">Remove <i class="fas fa-times"    style="margin-left: 5px; vertical-align: middle;"></i> </div> </div> </div> </div> </div> </div> </div>');
    var options = '';
    for (var i = 1; i <= currentItem.quantity; i++) {
      options += '<option value="' + i + '">' + i + '</option>';
    }
    $('#' + currentItem.id).html(options).find('option').eq(currentItem.quantity - 1).attr('selected', 'selected');

    currentItem.quantity = 1;
  }
  reRenderQDropDown();
}

function getCurrentQuantity() {
  var quantity = 0;
  currentItems.forEach(function(i) {
    quantity += i.quantity;
  });
  return quantity;
}

function renderDropDowns() {
  var maxQuantity = 3 - getCurrentQuantity();
  $('.selectQBottom').each(function(i, el) {
    var currentValue = Number($(el).val());

    $(el).find('option').each(function() {
      if (Number($(this).val()) > currentValue) {
        $(this).remove();
      }
    });
    for (var j = currentValue + 1; j <= currentValue + maxQuantity; j++) {
      $(el).append('<option value="' + j + '">' + j + '</option>');
    }
  });
}

function reRenderQDropDown() {
  var quantity = getCurrentQuantity();
  var optionsQ = '';
  for (var j = 1; j <= 3 - quantity; j++) {
    optionsQ += '<option value="' + j + '">' + j + '</option>';
  }
  if (optionsQ === '') {
    optionsQ = '<option value="0"> - </option>';
  }
  $('#selectQ').html(optionsQ).find('option').eq(0).attr('selected', 'selected');
}

function renderAddToCart() {
  var addToCartBtn = $('.add-btn a');
  var quantity = getCurrentQuantity();
  if (quantity >= 3) {
    addToCartBtn.removeClass('active');
  } else {
    addToCartBtn.addClass('active');
  }
  if (currentItems.length > 0) {
    addToCartBtn.text('ADD AN ADDITIONAL PAIR');
  }
  else {
    addToCartBtn.text('ADD TO CART');
  }

  if (quantity === 0) {
    $('.hidden-block').hide();
  }
  else {
    $('.hidden-block').show();
  }
  $('.cart-items-wr').text('YOUR SHOPPING CART (' + quantity + ' ITEMS)');
}

if (typeof window.mojoApp !== 'undefined') {
  window.mojoApp._hooks.add('offer_selection_send_offers', function(value, options) {
      Object.keys(value.offers).forEach(function(index) {
        value.offers[index] = 0;
      });
      var isFllPrice = true;
      currentItems.forEach(function(el, i) {
        if (isFllPrice) {
          var offer = getOfferId(el);
          value.offers[offer.offerId] = 1;
          if (el.quantity > 1) {
            for (var i = 2; i <= el.quantity; i++) {
              var addOffer = ___pageOffers.filter(function(addEl) {
                return addEl.name.indexOf('-' + el.size) > -1 && addEl.name.indexOf(el.type) > -1 && addEl.offerGroup === 'Downsell';
              })[0];
              value.offers[addOffer.offerId] = value.offers[addOffer.offerId] + 1;
            }
          }
          isFllPrice = false;
        } else {
          var additionalOffer = getAdditionalOfferId(el);
          value.offers[additionalOffer.offerId] = el.quantity;
        }
      });
      function getOfferId(current) {
        return ___pageOffers.filter(function(el) {
          return el.name.indexOf('-' + current.size) > -1 && el.name.indexOf(current.type) > -1 && el.offerGroup === '';
        })[0];
      }

      function getAdditionalOfferId(current) {
        return ___pageOffers.filter(function(el) {
          return el.name.indexOf('-' + current.size) > -1 && el.name.indexOf(current.type) > -1 && el.offerGroup === 'Downsell';
        })[0];
      }
    }
  );
}

