document.getElementById('tourismForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        address: document.getElementById('direction').value,
        date: document.getElementById('date').value,
        people: document.getElementById('people').value
    };

    console.log(formData);
    
    alert('Tourism Information Submitted:\n\nName: ' + formData.name + '\nEmail: ' + formData.email + '\nAddress: ' + formData.address + '\nDate: ' + formData.date + '\nNumber of People: ' + formData.people);
});
