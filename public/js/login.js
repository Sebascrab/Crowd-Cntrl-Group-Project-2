async function signInForm (event) {
  event.preventDefault();
  const email_address = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();
  if (email_address && password) {
    const data = {email_address: email_address, password: password};
      const response = await fetch('/auth/login', {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {'Content-Type': 'application/json'}
      });
      console.log(response);
      if (response.ok) {
          console.log('User logged in');
          window.location.href = '/dashboard';
      } else {
          alert(response.statusText);
          
      }
  }

}
document.querySelector('#logInButton').addEventListener('click', signInForm);



