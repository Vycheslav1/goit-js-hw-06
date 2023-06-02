const letterSize=document.querySelector("#font-size-control");

const word=document.querySelector("#text");

letterSize.addEventListener("mousemove", () => {

word.style.fontSize=letterSize.value+"px";

});

letterSize.addEventListener("keydown", () => {

    word.style.fontSize=letterSize.value+"px";
    
    });