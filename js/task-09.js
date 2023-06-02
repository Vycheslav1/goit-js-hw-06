function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const btn=document.querySelector(".widget button");

const colorValue=document.querySelector(".color");

let initialContent=colorValue.textContent;

btn.addEventListener("click",()=>{
 
colorValue.textContent=initialContent+getRandomHexColor();

});
