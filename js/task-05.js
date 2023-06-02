const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
const initialValue=output.textContent;

textInput.addEventListener("input", (event) => {
  output.textContent = event.currentTarget.value;
  if(output.textContent==="") output.textContent=initialValue;
});
