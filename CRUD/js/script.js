window.addEventListener('load', start);
var GlobalNames = ['Um', 'Dois', 'Tres', 'Quatro', 'Cinco'];
var inputName = null;
var isEditing = false;
var currentIndex = 0;
function start() {
  preventFormSubmit();

  inputName = document.querySelector('#inputName');
  activateInput();
}

function preventFormSubmit() {
  function handleFormSubmit(event) {
    event.preventDefault();
  }
  var form = document.querySelector('form');
  form.addEventListener('submit', handleFormSubmit);
}

function activateInput() {
  function insertName(Name) {
    GlobalNames.push(Name);
    render();
  }
  function update(NewName) {
    GlobalNames[currentIndex] = NewName;
    render();
  }
  function HandleTyping(event) {
    if (event.key === 'Enter' && event.target.value.trim() !== '') {
      if (isEditing) {
        update(event.target.value);
      } else {
        insertName(event.target.value);
      }
      isEditing = false;
      clearInput();
    }
  }

  inputName.addEventListener('keyup', HandleTyping);
  inputName.focus();
}
function render() {
  function createDeleteButton(index) {
    function deleteName() {
      var removed = GlobalNames.splice(index, 1);
      render();
    }
    var button = document.createElement('button');
    button.classList.add('deleteButton');
    button.textContent = 'x';
    button.addEventListener('click', deleteName);
    return button;
  }
  function createSpan(name, index) {
    function editItem() {
      inputName.value = name;
      inputName.focus();
      isEditing = true;
      currentIndex = index;
    }
    var span = document.createElement('span');
    span.classList.add('clickable');
    span.textContent = name;
    span.addEventListener('click', editItem);
    return span;
  }
  var divNames = document.querySelector('#names');
  divNames.innerHTML = '';
  //Criar ul
  //Fazer n Li's
  var ul = document.createElement('ul');
  for (var i = 0; i < GlobalNames.length; i++) {
    var currentName = GlobalNames[i];

    var li = document.createElement('li');
    var button = createDeleteButton(i);
    var span = createSpan(currentName, i);

    li.appendChild(button);
    li.appendChild(span);
    ul.appendChild(li);
  }
  divNames.appendChild(ul);
  clearInput();
}
function clearInput() {
  inputName.value = '';
  inputName.focus();
}
