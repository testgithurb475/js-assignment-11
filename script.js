function showAlert() {
alert("Link clicked!");
}

function showMsg(name) {
alert("Thanks for purchasing Phone from us");
}

function deleteRow(btn) {
btn.parentNode.parentNode.remove();
}

function changeImage() {
document.getElementById("hoverImg").src = "images/a.png";
}

function resetImage() {
document.getElementById("hoverImg").src = "images/s.png";
}

let count = 0;

function increase() {
count++;
document.getElementById("counter").innerText = count;
}

function decrease() {
count--;
document.getElementById("counter").innerText = count;
}