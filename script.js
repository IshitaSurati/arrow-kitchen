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
function openPdfDetails(pdfData) {
    var pdfDetailsContainer = document.getElementById('pdfDetails');
    pdfDetailsContainer.innerHTML = '';

    pdfData.forEach(function (data, index) {
        var pdfDetail = document.createElement('div');
        pdfDetail.classList.add('accordion-item');
        pdfDetail.innerHTML = `
            <h2 class="accordion-header" id="flush-heading${index}">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse${index}" aria-expanded="false" aria-controls="flush-collapse${index}">
                ${data.name}
              </button>
            </h2>
            <div id="flush-collapse${index}" class="accordion-collapse collapse" aria-labelledby="flush-heading${index}" data-bs-parent="#pdfDetails">
              <div class="accordion-body">
                <img src="${data.previewImage}" alt="Preview Image" class="img-fluid mb-3">
                <a href="${data.link}" target="_blank" class="btn btn-primary mb-3">Open PDF</a>
                <ul>
                  ${data.pageIndexes.map(pageIndex => `<li>Page(s): ${pageIndex.pages}, Category: ${pageIndex.category}</li>`).join('')}
                </ul>
              </div>
            </div>
        `;
        pdfDetailsContainer.appendChild(pdfDetail);
    });

    var pdfDetailsModal = new bootstrap.Modal(document.getElementById('pdfDetailsModal'));
    pdfDetailsModal.show();
}

// Function to close modal
function closeModal() {
    var pdfDetailsModal = new bootstrap.Modal(document.getElementById('pdfDetailsModal'));
    pdfDetailsModal.hide();
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
   


 

