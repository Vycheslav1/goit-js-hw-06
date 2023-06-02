const form = document.querySelector(".login-form");

const formElements={};

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }else{
    formElements.email=email.value;
    formElements.password=password.value;
  }

  console.log(formElements);
  event.currentTarget.reset();
}
