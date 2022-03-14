jQuery(document).ready(function () {
  jQuery(".progress-bar").each(function () {
    jQuery(this)
      .find(".progress-content")
      .animate(
        {
          width: jQuery(this).attr("data-percentage"),
        },
        2000
      );

    jQuery(this)
      .find(".progress-number-mark")
      .animate(
        { left: jQuery(this).attr("data-percentage") },
        {
          duration: 2000,
          step: function (now, fx) {
            var data = Math.round(now);
            jQuery(this)
              .find(".percent")
              .html(data + "%");
          },
        }
      );
  });
});

const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const success = document.querySelector("#success");
const myForm = document.querySelector("#myform");
const errorNodes = document.querySelectorAll(".error");

function validateForm() {
  clearMessage();

  let errorFlag = false;

  if (nameInput.value.length < 1) {
    errorNodes[0].innerText = "Name cannot be blank";
    nameInput.classList.add("erroe-border");

    errorFlag = true;
  } else if (!emailIsValid(email.value)) {
    errorNodes[1].innerText = "Invalid email address";
    email.classList.add("error-border");

    errorFlag = true;
  } else if (message.value.length < 1) {
    errorNodes[2].innerText = "Please Enter Message";
    message.classList.add("error-border");

    errorFlag = true;
  } else {
    success.innerText = "Success!";

    let templateParams = {
      to_name: "Sam Okello",
      from_name: nameInput.value,
      from_email: email.value,
      message: message.value,
    };

    emailjs.send("service_mbrtz0s", "template_acygwsh", templateParams).then(
      function (response) {
        console.log(message.value);
        console.log(response)
        console.log("SUCCESS!", response.status, response.text);
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
  }
}

function clearMessage() {
  for (let i = 0; i < errorNodes.length; i++) {
    errorNodes[i].innerText = "";
  }
  success.innerText = "";
  nameInput.classList.remove("error-border");
  email.classList.remove("error-border");
  message.classList.remove("error-border");
}

function emailIsValid(email) {
  let pattern =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return pattern.test(email);
}
