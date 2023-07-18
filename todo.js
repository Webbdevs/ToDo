let list = document.getElementById("list");
let input = document.getElementById("input");
let button = document.getElementById("button");

button.addEventListener("click", function(){
    let newList = document.createElement ("li");
    newList.innerHTML = input.value;
    list.appendChild(newList);
    input.value = "";
});