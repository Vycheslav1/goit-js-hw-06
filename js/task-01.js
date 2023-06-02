const tagList=document.querySelector("#categories");
console.log("Number of categories: ",tagList.children.length);

tagList.childNodes.forEach((cls)=>{
   if(cls.children){
console.log("Category: ",cls.querySelector("h2").textContent);
console.log("Elements: ",cls.querySelector("ul").children.length);
}else{
    console.log("");
}
});

