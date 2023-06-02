const textInput=document.querySelector('[data-length="6"]');


  
  textInput.addEventListener("blur", () => {

    
    if(Number.parseInt(textInput.dataset.length)===textInput.value.length)
    {
        textInput.style.borderColor="#4caf50";
      
    }else{
        textInput.style.borderColor="#f44336";
    }
  });
  