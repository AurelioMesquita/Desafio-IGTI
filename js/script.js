function changeRange() {
  var r = parseInt(document.getElementById('r').value);
  var g = parseInt(document.getElementById('g').value);
  var b = parseInt(document.getElementById('b').value);

  var cor = '#' + hex(r) + hex(g) + hex(b);

  document.getElementById('r-label').innerText = r;
  document.getElementById('g-label').innerText = g;
  document.getElementById('b-label').innerText = b;

  function hex(v) {
    var hex = v.toString(16);
    if (v < 16) {
      hex = '0' + hex;
    }
    return hex;
  }

  var div = document.querySelector('.cor');
  div.style.backgroundColor = cor;
}
