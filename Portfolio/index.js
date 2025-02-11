document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission
  
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (name && email && message) {
    alert(`Thank you for reaching out, ${name}! Your message has been sent.`);
    
    // Optionally, you can reset the form after submission
    document.getElementById("contact-form").reset();
  } else {
    alert("Please fill out all fields before submitting.");
  }
});
