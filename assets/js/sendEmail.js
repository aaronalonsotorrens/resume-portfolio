function sendMail(contactForm) {
  emailjs
    .send("service_jia8kwc", "Aaron's portfolio", {
      from_name: contactForm.name.value,
      from_email: contactForm.emailaddress.value,
      project_request: contactForm.projectsummary.value,
    })
    .then(
      function (response) {
        console.log("SUCCESS", response);
        contactForm.reset(); // Clears form
        document.getElementById("form-message").textContent =
          "Your message has been sent!";
      },
      function (error) {
        console.log("FAILED", error);
        document.getElementById("form-message").textContent =
          "Oops! Something went wrong. Please try again.";
      }
    );
  return false;
}
