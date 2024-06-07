var selectedModel;
$(function () {
	mojoApp.offerSelectionPage._sections.forEach(function (s) {
		var offerSelector = $(".shadeSelector");
		$('.btn-vip a').hide();
		$('.btn-bbp a').hide();
		$('.btn-bbp-disable a').show();
		$('.btn-vip-disable a').show();

		$('.btn-bbp-disable').on('click',function(e){
				showMessage('Please select shade.', '', 'error');
		});

		$('.btn-vip-disable').on('click',function(e){
				showMessage('Please select shade.', '', 'error');
		});

		offerSelector.on('change', function (e) {
			var name = e.currentTarget.value;
			var offer = getOfferByName(name, s.offers);
			if (offer != null) {
				selectedModel = offer.offerId;
				if (s.number == 2) {
					$('.btn-vip a').show();
					$('.btn-bbp a').hide();
					$('.btn-vip-disable a').hide();
					$('.btn-bbp-disable a').show();
				}
				if (s.number == 1) {
					$('.btn-vip a').hide();
					$('.btn-bbp a').show();
					$('.btn-vip-disable a').show();
					$('.btn-bbp-disable a').hide();
				}
			}
		});
	});

	mojoApp._hooks.add('offer_selection_send_offers', function (e) {
		 if (selectedModel  == null || selectedModel  == 'undefined'){
				showMessage('Please select shade.', '', 'error');
		}
		for (var offerId in e.offers) {
			var currentQty = selectedModel == Number(offerId) ? 1 : 0;
			var currentOffer = getOfferById(Number(offerId), ___pageOffers);
			if (currentOffer && currentOffer.offerType === 'Attached' && currentOffer.parentOfferId === selectedModel) currentQty = 1;
			e.offers[offerId] = currentQty;
		}
	});

	___currentCart.forEach(function(offer) {
		$('input[name="shadeSelect"][value="'+offer.offerGroup+'"]').prop('checked', true).change();
	});
});

function getOfferByName(name, offers) {
	var value = name;
	var data = offers.filter(function (o) { return o.offerGroup === value; });
	return data && data.length === 1 ? data[0] : null;
}

function getOfferById(offerId, offers) {
	var value = offerId;
	var data = offers.filter(function (o) { return o.offerId === value; });
	return data && data.length === 1 ? data[0] : null;
}

	function initToastrOptions() {
		if (typeof toastr !== 'object') return;
		toastr.options = {
			"closeButton": true,
			"debug": false,
			"newestOnTop": false,
			"progressBar": false,
			"positionClass": "toast-top-right",
			"preventDuplicates": false,
			"onclick": null,
			"showDuration": 300,
			"hideDuration": 1000,
			"timeOut": 5000,
			"extendedTimeOut": 1000,
			"showEasing": "swing",
			"hideEasing": "linear",
			"showMethod": "fadeIn",
			"hideMethod": "fadeOut"
		}
	}

	function showMessage(message, title, type) {
		if (typeof toastr !== 'object') {
			alert(message);
		} else {
			switch (type) {
				case 'success':
					toastr.success(message, title);
					break;
				case 'info':
					toastr.info(message, title);
					break;
				case 'warning':
					toastr.warning(message, title);
					break;
				case 'error':
					toastr.error(message, title);
					break;
			}
		}
	}