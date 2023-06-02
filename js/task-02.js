const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const items=document.querySelector("#ingredients");
const fragment = document.createDocumentFragment();
ingredients.forEach(ingredient=>{
const list=document.createElement("li");
list.textContent=ingredient;
list.classList.add("item");
fragment.append(list);
});

items.append(fragment);

console.log(items);