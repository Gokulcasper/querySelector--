// How to select DOM Elements

// 1. getElementById()
// 2. getElementsByClassName()
// 3. getElementsByTagName()
// 4. Finding Elements by css Selectors
// 5. querySelector and querySelectorAll()

let inputTxtId = document.getElementById("input-txt-id");
let inputButtonId = document.getElementById("input-button-id");
let inputList = document.getElementById("input-list");

inputButtonId.addEventListener("click", () => {
  inputList.innerHTML += `<li class="input-item">${inputTxtId.value.toUpperCase()}</li>`;
});

// getElementsByTagName()

// const inputTag = document.getElementsByTagName("li");
// console.log(`I have ${inputTag.length} items`);

// querySelector and querySelector()
const result = document.querySelector("li");
console.log(result.innerText);

const resultAll = document.querySelectorAll("li");
console.log(resultAll[2].innerText);
