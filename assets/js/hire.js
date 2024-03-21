const btn = document.getElementById("send");

emailjs.init("-_KxQHqLlLFr8LWk4");

document
  .getElementById("hire_form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    btn.innerHTML = "Sending...";

    const serviceID = "service_aiszu5r";
    const templateID = "template_yqkbsb9";

    emailjs.sendForm(serviceID, templateID, this).then(
      () => {
        btn.innerHTML = "Confirm Your Request";
        alert("Your hire request was sent successfully");
      },
      (err) => {
        btn.innerHTML = "Confirm Your Request";
        alert(JSON.stringify(err));
      }
    );
  });
