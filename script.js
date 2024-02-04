// script.js

console.log("Script is running");

function redirectToModeOfPayment() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    if (firstName.trim() === '' || lastName.trim() === '' || email.trim() === '' || phone.trim() === '') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Fill all the fields in the Personal Information section.',
        });
        return;
    }

    // Redirect to Mode of Payment page
    window.location.href = 'mode_of_payment.html';
}
