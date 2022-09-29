async function deleteClient(id) {
    const response = await fetch(`/api/clients/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    });
    console.log(response);
    if (response.ok) {
        console.log('Client Has Been Deleted :( !');
        window.location.href = '/dashboard';
    } else {
        alert(response.statusText);

    }
}



$(document).on('click', '#deleteButton', function (event) {
    const clientId = $(this).parent().parent().find('th').text();
    deleteClient(clientId);
});

$(document).on('click', '#editButton', function (event) {
    const clientId = $(this).parent().parent().find('th').text();
    const clientName = $(this).parent().parent().find('#clientName').text().trim();
    const clientPhoneNumber = $(this).parent().parent().find('#clientPhoneNumber').text().trim();
    const clientEmailAddress = $(this).parent().parent().find('#clientEmailAddress').text().trim();
    console.log(clientId, clientName, clientPhoneNumber, clientEmailAddress);

    // editClient 
    // Allows fields to be editable and saved. 

    const tdHolder1 = $('<td>');
    const clientNameInput = $('<input>').addClass('updateClientName').val(clientName)
    clientNameInput.appendTo(tdHolder1);
    $(this).parent().parent().find('#clientName').replaceWith(tdHolder1);

    const tdHolder2 = $('<td>');
    const clientPhoneNumberInput = $('<input>').addClass('updateClientPhoneNumber').val(clientPhoneNumber)
    clientPhoneNumberInput.appendTo(tdHolder2);
    $(this).parent().parent().find('#clientPhoneNumber').replaceWith(tdHolder2);

    const tdHolder3 = $('<td>');
    const clientEmailAddressInput = $('<input>').addClass('updateClientEmailAddress').val(clientEmailAddress);
    clientEmailAddressInput.appendTo(tdHolder3)
    $(this).parent().parent().find('#clientEmailAddress').replaceWith(tdHolder3);

    const saveButton = $('<a>').addClass('button is-light is-small is-success saveButton').text('Save');
    const saveIcon = $('<i>').addClass('fa-solid fa-floppy-disk pl-1');
    saveIcon.appendTo(saveButton);
    $(this).replaceWith(saveButton);
});

// My attempt at save button putting data.
async function updateClient(updatedClientInfo) {
    const data = { customer_name: updatedClientInfo.customer_name, phone_number: updatedClientInfo.phone_number, email_address: updatedClientInfo.email_address };
    const response = await fetch(`/api/clients/${updatedClientInfo.id}`, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
    });
    console.log(response);
    if (response.ok) {
        console.log('Client Has Been Updated !');
        window.location.href = '/dashboard';
    } else {
        alert(response.statusText);

    }
}



$(document).on('click', '#deleteButton', function (event) {
    const clientId = $(this).parent().parent().find('th').text();
    deleteClient(clientId);
});

$(document).on('click', '.saveButton', function (event) {
    const clientId = $(this).parent().parent().find('th').text();
    const clientName = $(this).parent().parent().find('.updateClientName').val();
    const clientPhoneNumber = $(this).parent().parent().find('.updateClientPhoneNumber').val();
    const clientEmailAddress = $(this).parent().parent().find('.updateClientEmailAddress').val();
    const updatedClientInfo = {
        id: clientId,
        customer_name: clientName,
        phone_number: clientPhoneNumber,
        email_address: clientEmailAddress
    };
    updateClient(updatedClientInfo);
});
