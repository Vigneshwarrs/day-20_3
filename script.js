let api =""
let input = document.getElementById("food");
let button = document.querySelector("#sub");
let div = document.getElementById("res");

button.addEventListener("click", ()=> {
    div.innerHTML="";
    displayCard();
});

const displayCard = async () => {
    let api = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q="${input.value}"&app_id=c6817788&app_key=305384873d9ab1e4d46e4a54af54c49e`);
    let data = await api.json();
    console.log(data);
    let col = document.createElement('div');
    col.classList.add('col','text-center');
    col.innerHTML = `<div class="card" style="width: 18rem;">
  <img src="${data.hits[0].recipe.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${data.hits[0].recipe.label}</h5>
    <p class="card-text">PROTEIN: ${Math.round(data.hits[0].recipe.digest[2].total)} g</p>
    <p class="card-text">FAT: ${Math.round(data.hits[0].recipe.digest[0].total)} g</p>
    <p class="card-text">CARBS: ${Math.round(data.hits[0].recipe.digest[1].total)} g</p>
    <a class="card-Link" target="_blank" href="${data.hits[0].recipe.url}">Recipe</a>
  </div>
  </div>`;
    div.append(col);
}