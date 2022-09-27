const sendToLogin = ()=> {
    window.location.href = "/login";
}

const sendToSignUp = ()=> {
    window.location.href = "/sign-up";
}

const sendToNewCustomer = ()=> {
    window.location.href = "/new-customer";
}

const sendToEditCustomer = ()=> {
    window.location.href = "/edit-customer";
}

document.querySelector("#logInButton").addEventListener("click", sendToLogin);

document.querySelector("#signUpButton").addEventListener("click", sendToSignUp);

document.querySelector("#addButton").addEventListener("click", sendToNewCustomer);

document.querySelector("#editButton").addEventListener("click", sendToEditCustomer);

