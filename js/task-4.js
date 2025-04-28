const form = document.querySelector('.login-form');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const { email, password } = form.elements;
    const emailData = email.value.trim();
  const passwordData = password.value.trim();

    if (emailData === '' || passwordData === '') {
        alert('All form fields must be filled in');
    } else {
        const userData = {
            email: emailData,
            password: passwordData
        };

        console.log(userData);
        form.reset();
    }
});
