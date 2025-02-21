document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent page refresh
        
        const name = document.getElementById("name").value;
        const phone = document.getElementById("phone").value;
        const email = document.getElementById("email").value;

        if (name && phone && email) {
            console.log("Contact Details:", { Name: name, Phone: phone, Email: email });
            alert("Your contact details have been saved in the console!");
        } else {
            alert("Please fill in all fields.");
        }
    });
});
