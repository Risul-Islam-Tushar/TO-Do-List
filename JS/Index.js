let inputs = document.getElementById("Imp");
let texts = document.querySelector(".text");

function add() {
  if (inputs.value == "") {
    alert("Enter Your Task First");
  } else {
    let newElement = document.createElement("ul");
    newElement.innerHTML = `${inputs.value} <i class="fas fa-trash"></i>`;
    texts.appendChild(newElement);
    inputs.value = "";
    save();
    newElement.querySelector("i").addEventListener("click", remove);
  }
}

function remove(event) {
  event.target.parentElement.remove();
  save();
}

function save() {
  localStorage.setItem("data", texts.innerHTML);
}

function show() {
  texts.innerHTML = localStorage.getItem("data");
}

show();

texts.addEventListener("click", function (event) {
  if (event.target && event.target.nodeName === "I") {
    remove(event);
  }
});
