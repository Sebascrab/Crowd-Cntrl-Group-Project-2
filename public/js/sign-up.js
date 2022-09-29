const userSignUp = async (event) => {
    event.preventDefault();
  
    const email_address = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (email_address && password) {
      const data = {email_address: email_address, password: password}
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        alert('Thanks for creating an account, please log in.')
        document.location.replace('/');
      } else {
        alert('Failed to sign up.');
      }
    }
  };

  document.querySelector('#signUpButton').addEventListener('click', userSignUp);
