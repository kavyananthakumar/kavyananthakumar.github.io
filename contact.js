let inputForm = document.getElementById("contactform");

inputForm.addEventListener("submit", (e) => {
  e.preventDefault();



  let firstname = document.getElementById("name");
  // let emailid = document.getElementById("contactemail");
  let textField = document.getElementById("field");

  if (firstname.value == "") {
    alert("Please enter your name!");
  } else {
    // perform operation with form input
    alert(`This form has been successfully submitted! This form has a name of ${firstname.value} and text of ${textField.value}`);

    // sendEmail(firstname.value, emailid.value, textField.value);    //Calling the function

    // firstname.value = "";
    // emailid.value = "";
    // textField.value = "";
  }
 setTimeout(window.location.href = "mailto:kavyakumar87@yahoo.com?subject=" + firstname.value + "&body=" + textField.value, 3000);

});


