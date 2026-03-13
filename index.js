let myForm = document.forms[0];
let inputVal = document.getElementById("todo");

let container = document.getElementsByClassName("todo-container")[0];

let updatedId = null;

let todos = JSON.parse(localStorage.getItem("todos")) ?? [];
let id = 0;

function AddItem(items) {
  if (inputVal.value.trim() !== "") {
    todos.push(items);
    console.log(inputVal.value);
  }
  inputVal.value = "";
  localStorage.setItem("todos", JSON.stringify(todos));
  rederItems();
}

function rederItems() {
  container.innerHTML = todos
    .map(function (todo) {
      if (updatedId === todo.id) {
        return `<div class="todo">
        <input type="text" id="updatevalue" value="${todo.text}"  />
        <button onclick="saveUpdate(${todo.id})">Save</button>
        </div>`;
      } else {
        return `<div class="todo">
    <p>${todo.text}</p>
    <div>
    <button class="update()" onclick="update(${todo.id})">update</button>
    <button class="del" onclick="Remove(${todo.id})">X</button>
    </div>
    </div>`;
      }
    })
    .join(" ");
}

function Remove(id) {
  let filteredItems = todos.filter((item) => {
    return item.id !== id;
  });

  todos = filteredItems;
  localStorage.setItem("todos", JSON.stringify(todos));
  rederItems();
}

function update(id) {
  updatedId = id;

  rederItems();
}
function saveUpdate(id) {
  let inputVal1 = document.getElementById("updatevalue").value;

  let updatedItems = todos.map(function (todo) {
    if (todo.id === id) {
      return { ...todos, text: inputVal1 };
    }
    return todo;
  });

  todos = updatedItems;
  localStorage.setItem("todos", JSON.stringify(todos));
  rederItems();
}
myForm.addEventListener("submit", function (e) {
  e.preventDefault();

  let text = inputVal.value;

  let items = { id: id++, text: text };

  AddItem(items);
});

rederItems();
