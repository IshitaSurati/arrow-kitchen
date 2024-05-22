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
    function openPdfModal(pdfLinks) {
        // Clear any existing content in the modal body
        document.getElementById('pdfLinks').innerHTML = '';

        // Counter for numbering
        var counter = 1;

        // Loop through the provided PDF links and create HTML elements
        pdfLinks.forEach(function(link) {
            var pdfLinkElement = document.createElement('a');
            pdfLinkElement.setAttribute('href', link);
            pdfLinkElement.setAttribute('target', '_blank');
            pdfLinkElement.innerHTML = counter + '. ' + link.split('/').pop(); // Display number and file name
            pdfLinkElement.classList.add('d-block', 'my-2');
            document.getElementById('pdfLinks').appendChild(pdfLinkElement);
            counter++; // Increment counter
        });

        // Show the modal
        var modal = new bootstrap.Modal(document.getElementById('pdfModal'));
        modal.show();
    }
   


// form

   


 

