const inputfield = document.getElementsByTagName("input");
const inputArray = Array.from(inputfield);
const mailfield = document.getElementById("mail");
const regexp = /^[a-zA-Z]+@[a-zA-Z]+.[a-zA-Z]+$/;
document.getElementById("submitbutton").addEventListener("click", () => {
  inputArray.forEach((field) => {
    if (field.value === "") {
      field.nextElementSibling.classList.remove("hidden");
      field.nextElementSibling.nextElementSibling.classList.remove("hidden");

      field.style.borderColor = "hsl(0, 100%, 74%)";
      field.placeholder = "";
    }
    if (!regexp.test(mailfield.value)) {
      document.getElementById("error_msg_for_mail").classList.remove("hidden");
      mailfield.value = "";
    } else {
      console.log("j");
    }
  });
});

//

Array.from(document.getElementsByTagName("input")).forEach((field) => {
  field.addEventListener("keydown", (e) => {
    field.style.borderColor = "hsl(154, 59%, 51%)"; // Sets the border color
  });
});
