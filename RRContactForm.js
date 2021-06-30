var firstName = $('#firstName').val();
var lastName = $('#lastName').val();
var email = $('#email').val();
var phone = $('#phone').val();
var questions = $('#questions').val();
var city = $('#city').val();
var zipCode = $('#zipCode').val();
var state = $('#state').val();
var subject = $('#subject').val();

$.ajax({
  type: "POST",
  url: '/Data/SendContactInfo/',
  data: {
    subject: 'Contact us page request',
    body: 'First name: ' + firstName + ' Last name: ' + lastName + ' Email: ' 
      + email + ' Phone: ' + phone + ' Subject: ' + ' Questions: ' + questions,
    emailFrom: email + ' City: ' + city +  ' zipCode: ' + zipCode + ' state: ' + state + ' subject: ' + subject 
  },
 success: function (data) {
      $('.contact-popup').addClass('overlay-visible');
      $('#firstName').val('');
      $('#lastName').val('');
      $('#email').val('');
      $('#questions').val('');
      $('#city').val('');
      $('#zipCode').val('');
      $('#state').val('');
      $('#subject').val('');
  },
  error: function (data) {
      alert('Something went wrong, please try again later');
  },
});