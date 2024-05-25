// navbar
$(document).ready(function () {
  if ($(window).width() > 991) {
    $('.navbar-light .d-menu').hover(function () {
      $(this).find('.sm-menu').first().stop(true, true).slideDown(150);
    }, function () {
      $(this).find('.sm-menu').first().stop(true, true).delay(120).slideUp(100);
    });
  }
});
// form
function sendEmail() {
  Email.send({
    SecureToken:"7a34bf9f-4032-4ada-9375-9c4d18e5c357",
    To: 'arrownine9@gmail.com',
    From: document.getElementById("email").value,
    Subject: "New Contact Form for Enquiry",
    Body: "Name : " + document.getElementById("fullName").value +
      "<br>Email : " + document.getElementById("email").value +
      "<br>MobileNumber : " + document.getElementById("mobileNumber").value +
      "<br>Email : " + document.getElementById("message").value 
}).then(
        message => alert("Message Send Succesfully!!!")
      );
}





