async function addClientForm (event) {
    event.preventDefault();
    const customer_name = document.querySelector('#addClientNameField').value.trim();
    const phone_number = document.querySelector('#addClientPhoneField').value.trim();
    const email_address = document.querySelector('#addClientEmailField').value.trim();
    if (customer_name && phone_number && email_address) {
      const data = {customer_name: customer_name, phone_number: phone_number, email_address: email_address};
        const response = await fetch('/api/clients', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {'Content-Type': 'application/json'}
        });
        console.log(response);
        if (response.ok) {
            console.log('Client Has Been Added!');
            window.location.href = '/dashboard';
        } else {
            alert(response.statusText);
            
        }
    }
  
  }
  document.querySelector('#addClientButton').addEventListener('click', addClientForm);
  
  
  
  