let container = document.getElementById("inputBox");
let text = document.getElementById("text");
let submit = document.getElementById("submit");
let number = document.getElementById("number");
let outputBox = document.getElementById("outputBox");
let result = document.createElement("div");
result.innerHTML = "";
function generate() {
  if (text && number) {
    for (let i = 0; i < number.value; i++) {
      result.innerHTML += `${text.value} `;
      outputBox.appendChild(result);
    }
  }
  text.value = "";
  number.value = "";
}
function reset() {
  result.innerHTML = "";
  outputBox.removeChild(result);
}
function copy() {
  navigator.clipboard.writeText(result.innerHTML);
  result.innerHTML = "";
  outputBox.removeChild(result);
  alert("Text copied to clipboard");
}
