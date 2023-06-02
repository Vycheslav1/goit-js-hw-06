
const decrBtn = document.querySelector('button[data-action="decrement"]');
const incrBtn = document.querySelector('button[data-action="increment"]');
const result=document.querySelector("#value");

let counterValue=0;


const decrementClick = () => {
    counterValue+=Number.parseInt(decrBtn.textContent);
  
  result.textContent=counterValue.toString();
  };
  
  decrBtn.addEventListener("click", decrementClick);

  const incrementClick = () => {
    counterValue+=Number.parseInt(incrBtn.textContent);
 
  result.textContent=counterValue.toString();
  };
  
  incrBtn.addEventListener("click", incrementClick);