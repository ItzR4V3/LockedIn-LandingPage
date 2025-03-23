// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
  
  // Select all input elements with class "input"
  const inputs = document.querySelectorAll(".input");
  const contactForm = document.getElementById("contactForm");

  // Function to add focus class when an input is focused
  function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
  }

  // Function to remove focus class when an input loses focus and is empty
  function blurFunc() {
    let parent = this.parentNode;
    if (this.value == "") {
      parent.classList.remove("focus");
    }
  }

  // Loop through all input elements and add event listeners for focus and blur
  inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
  });

  // Handle form submission
  contactForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = this.querySelector('input[name="name"]').value;
    const email = this.querySelector('input[name="email"]').value;
    const phone = this.querySelector('input[name="phone"]').value;
    const message = this.querySelector('textarea[name="message"]').value;

    // Format email body with line breaks
    const emailBody = `
Name: ${name}
Email: ${email}
Phone: ${phone}

Message:
${message}`.trim();

    try {
      // Create mailto link with encoded parameters
      const mailtoLink = `mailto:lockedinseb@gmail.com?subject=Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(emailBody)}`;

      // Open default email client
      window.open(mailtoLink, '_self');
      
      // Reset form after email client opens
      setTimeout(() => {
        this.reset();
        inputs.forEach(input => input.parentNode.classList.remove("focus"));
      }, 100);
    } catch (error) {
      console.error('Failed to open email client:', error);
    }
  });
});
