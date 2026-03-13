let myForm = document.forms[0];
let inputVal = document.getElementById("todo");

let todos = [];
let id = 0;
function AddItem(items) {
  todos.push(items);
}

myForm.addEventListener("submit", function (e) {
  e.preventDefault();

  let text = inputVal.value;
  console.log(text);

  let items = { id: id++, todo: text };

  AddItem(items);

  console.log(todos);
});
