// navbar
$(document).ready(function () {
    if ($(window).width() > 991){
    $('.navbar-light .d-menu').hover(function () {
            $(this).find('.sm-menu').first().stop(true, true).slideDown(150);
        }, function () {
            $(this).find('.sm-menu').first().stop(true, true).delay(120).slideUp(100);
        });
        }
    });

//pop on
function openPdfModal(pdfData) {
    // Clear any existing content in the modal body
    document.getElementById('pdfLinks').innerHTML = '';

    // Counter for numbering
    var counter = 1;

    // Loop through the provided PDF data and create HTML elements
    pdfData.forEach(function(data) {
        var pdfLinkElement = document.createElement('a');
        pdfLinkElement.setAttribute('href', '#');
        pdfLinkElement.setAttribute('data-bs-toggle', 'modal');
        pdfLinkElement.setAttribute('data-bs-target', '#pdfPreviewModal');
        pdfLinkElement.innerHTML = counter + '. ' + data.name; // Display number and file name
        pdfLinkElement.classList.add('d-block', 'my-2');
        pdfLinkElement.addEventListener('click', function() {
            showPdfPreview(data.link);
        });
        document.getElementById('pdfLinks').appendChild(pdfLinkElement);
        counter++; // Increment counter
    });

    // Show the modal
    var modal = new bootstrap.Modal(document.getElementById('pdfModal'));
    modal.show();
}

function showPdfPreview(pdfLink) {
    var pdfPreviewElement = document.getElementById('pdfPreview');
    pdfPreviewElement.setAttribute('src', pdfLink);
}


// form
function emailform(){
    Email.send({
        Host : "smtp.gamil.com",
        Username : "ishitasurati83@gmail.com",
        Password : "password",
        To : 'ishitasurati83@gamil.com',
        From : document.getElementById("email").value,
        Subject : "This is the subject",
        Body : "Name : "+document.getElementById("name").value
        +"<br> Email : "+document.getElementById("email").value
        +"<br> Contact No.: "+document.getElementById("mobileNumber").value
        +"<br> Message : "+document.getElementById("message").value
    }).then(
      message => alert("Message send Succesfully")
    );
}
   


 

