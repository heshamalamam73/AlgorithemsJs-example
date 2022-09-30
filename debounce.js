const input = document.getElementById("text");
const screen = document.getElementById("show");

function setShow(e) {
  screen.innerText = e.target.value;
}

input.addEventListener("keyup", debounce(setShow, 2000));

function debounce(cb, delay) {
  let timer;
  return function () {
    let context = this;
    clearTimeout(timer);
    timer = setTimeout(() => {
      cb.apply(context, arguments);
    }, delay);
  };
}
