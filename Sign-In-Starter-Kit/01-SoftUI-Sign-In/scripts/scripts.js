document
  .getElementById("input-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let inputEmail = document.getElementById("input-email").value;
    let inputPassword = document.getElementById("input-password").value;
    console.log(typeof inputEmail, inputPassword);

    alert(`Your Email is : ${inputEmail} Your Password is: ${inputPassword}`);
  });
