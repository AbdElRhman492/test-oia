const btn = document.getElementById("send");

emailjs.init("IsjXiWaK0vV30HFsm");

document
  .getElementById("contact_form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    btn.innerHTML = "Sending...";

    const serviceID = "default_service";
    const templateID = "template_z92j09i";

    emailjs.sendForm(serviceID, templateID, this).then(
      () => {
        btn.innerHTML = "Confirm Your Meeting";
        alert("Your schedule meeting request was sent successfully");
      },
      (err) => {
        btn.innerHTML = "Confirm Your Meeting";
        alert(JSON.stringify(err));
      }
    );
  });

let d = new Date(),
  month = "" + (d.getMonth() + 1),
  day = "" + d.getDate(),
  year = d.getFullYear();

if (month.length < 2) month = "0" + month;
if (day.length < 2) day = "0" + day;

let current_date = [year, month, day].join("-");

document.getElementById("date").setAttribute("min", current_date + "T00:00");
