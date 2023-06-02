function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}



function createBoxes(amount){

const fragment=document.createDocumentFragment();
  
for(let i=0;i<amount;i+=1)
{
  const list=document.createElement("div");
  list.color=getRandomHexColor();
  fragment.append(list);
  if(i==0)
  {
    fragment.children[0].width="30px";
    fragment.children[0].height="30px";
  }else{
    fragment.children[i].width=Number.parseInt(fragment.children[i-1].width.replace("px",""))+10+"px";
    fragment.children[i].height=Number.parseInt(fragment.children[i-1].height.replace("px",""))+10+"px";
  }
}

return fragment;
}

function destroyBoxes(){

while (boxElements.firstChild) {
  boxElements.removeChild(boxElements.firstChild);
}
}


const inputNumber=document.querySelector("input");

const createBtn=document.querySelector('[data-create]');

const destroyBtn=document.querySelector('[data-destroy]');


const boxElements=document.querySelector("#boxes");

let number;

inputNumber.addEventListener("click",()=>{
 
number=Number.parseInt(inputNumber.value);


});

createBtn.addEventListener("click",()=>{
 
  boxElements.append(createBoxes(number));

  console.log(boxElements.children);
 });

 destroyBtn.addEventListener("click",()=>{
  destroyBoxes();
  console.log(boxElements.children);
 });

 