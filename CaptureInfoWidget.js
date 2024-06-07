// for the form

  $(document).ready(function () {
       if ($('#CheckoutForm_IsPhoneNumberRequired').val().toLowerCase() == 'false')
    {
        $('.custom-form-1 [name="ShippingPhone"]').removeAttr('data-field-is-required');
        $('.custom-form-1 [name="BillingPhone"]').removeAttr('data-field-is-required');
    }
 
    var countrySelectors = $('.custom-form-1 [name="{D.INPUT_SHIPPING_COUNTRY}"]');
    countrySelectors.change(function () {
        var $this = $(this);
        var countryId = $this.val();
 
        $.getJSON("/data/States", { countryId: countryId }, function (data) {
            var statesSelector = '.custom-form-1 [name="' + $this.attr('data-states-selector') + '"]';
            var statesControl = $(statesSelector);
            statesControl.html('');
            for (var i = 0; i < data.length; i++) {
                $('<option value="' + data[i].StateProvinceId + '">' + data[i].Name + '</option>').appendTo(statesControl);
            }
                        var selectedState = statesControl.data('selected-state');
                        if (selectedState != '' && statesControl.find('option[value="' + selectedState + '"]').length) {
                                 statesControl.val(statesControl.data('selected-state'));
                        }
                        else {
                                 statesControl.val(0);
                        }
        });
    });
 
     countrySelectors.val(0);
    countrySelectors.trigger('change');
 
    $('.custom-form-1 [name="ShippingZip"]').keyup(function () {
        setCityAndstateByZip("Shipping", ".custom-form-1");
    });
       $('.custom-form-1 [name="BillingZip"]').keyup(function () {
        setCityAndstateByZip("Billing", ".custom-form-1");
    });
 
});
 
var resizeTimeout = null;
function setCityAndstateByZip(mode, parentClass ) {
    if ($(parentClass + ' [name="' + mode + 'Zip"]').val().length >= 5) {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(function () {
            $.ajax({
                type: "GET",
                url: '/Data/GetStateAndCityByZip',
                data: {
                    zipCode: $(parentClass + ' [name="' + mode + 'Zip"]').val(),
                    countryId: $(parentClass + ' [name="' + mode + 'CountryId"]').val()
                },
                success: function (data) {
                    if (data != null) {
                        $(parentClass + ' [name="' + mode + 'City"]').val(data[0]).trigger('change');
                        $(parentClass + ' [name="' + mode + 'StateId"] [value = ' + data[1] + ']').attr("selected", "selected");
                        $(parentClass + ' [name="' + mode + 'StateId"]').val(data[1])
                        $(parentClass + ' [name="' + mode + 'StateId"]').trigger('change');
                    }
                }
            });
        }, 200);
    }
};


// for the button

  var formValidationState = { state: true, validationMessage: '' };
$('.js-client-info-form:visible').find('input[type=text], select').each(function () {
       formValidationState = formValidationState.state ? requiredFieldValidate($(this)) : formValidationState;
});
if (formValidationState.state) {
       $('.js-client-info-form:visible').submit();
} else {
       alert(formValidationState.validationMessage);
}
 
function requiredFieldValidate(field) {
    return (field.val() == '' || field.val() == null) && typeof field.attr('data-field-is-required') !== 'undefined' ? { state: false, validationMessage: 'Please fill required fields' } : { state: true, validationMessage: '' };
};