function insert(num) {
  document.getElementById("result").value += num;
}

function insertPercentage() {
  document.getElementById("result").value += "%";
}

function clearResult() {
  document.getElementById("result").value = "";
}

function backspace() {
  var value = document.getElementById("result").value;
  document.getElementById("result").value = value.substr(0, value.length - 1);
}

function calculate() {
  var result = eval(document.getElementById("result").value);
  document.getElementById("result").value = result;
}
