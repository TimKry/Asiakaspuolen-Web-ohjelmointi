"use strict";

window.onload = function() {
  const form = document.getElementById("myform");
  const password = document.getElementById("password");
  const password2 = document.getElementById("password2");
  const heightRange = document.getElementById("heightrange");
  const heightNumber = document.getElementById("heightnumber");
  const output = document.getElementById("output");

  
  heightRange.addEventListener("input", () => {
    heightNumber.value = heightRange.value;
  });

  heightNumber.addEventListener("input", () => {
    let val = parseInt(heightNumber.value, 10);
    if (isNaN(val)) val = 40;
    if (val < 40) val = 40;
    if (val > 250) val = 250;
    heightNumber.value = val;
    heightRange.value = val;
  });

  
  form.onsubmit = function(event) {
    event.preventDefault();

    
    if (!form.checkValidity()) {
      alert("Please fill all required fields correctly.");
      return false;
    }

    
    if (password.value !== password2.value) {
      alert("Passwords do not match.");
      return false;
    }

    
    const genders = document.getElementsByName("gender");
    let genderValue = "";
    for (let i = 0; i < genders.length; i++) {
      if (genders[i].checked) {
        genderValue = genders[i].value;
        break;
      }
    }

    
    const hobbies = document.getElementsByName("hobby");
    const hobbiesList = [];
    for (let i = 0; i < hobbies.length; i++) {
      if (hobbies[i].checked) hobbiesList.push(hobbies[i].value);
    }
    if (hobbiesList.length === 0) hobbiesList.push("none selected");

    
    output.innerHTML =
      "Full Name: " + document.getElementById("fullname").value + "\n" +
      "Password: " + password.value + "\n" +
      "Gender: " + genderValue + "\n" +
      "Hobbies: " + hobbiesList.join(", ") + "\n" +
      "Birth Date: " + document.getElementById("birthdate").value + "\n" +
      "Height: " + heightRange.value + " cm\n" +
      "Favorite Color: " + document.getElementById("color").value + "\n" +
      "Home Country: " + document.getElementById("country").value + "\n" +
      "Profession: " + document.getElementById("profession").value + "\n" +
      "Message: " + document.getElementById("message").value;

    return true;
  };
};