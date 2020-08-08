window.addEventListener('load', changeRange);

function changeRange() {
  var r = parseInt(document.getElementById('Red').value);
  var g = parseInt(document.getElementById('Green').value);
  var b = parseInt(document.getElementById('Blue').value);

  var cor = '#' + hex(r) + hex(g) + hex(b);
  console.log(r);
  function hex(event) {
    var hex = event.toString(16);
    if (event < 16) {
      hex = '0' + hex;
    }
    return hex;
  }
  console.log(cor);

  document.getElementById('Red_Text').value = r;
  document.getElementById('Green_Text').value = g;
  document.getElementById('Blue_Text').value = b;

  var div = document.querySelector('.cor');
  div.style.backgroundColor = cor;
}
