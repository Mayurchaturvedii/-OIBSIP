const todo = [];

function update() {
  let firsthtml = "";
  for (let i = 0; i < todo.length; i++) {
    let todowork = todo[i];
    const firstObject = todowork.work;
    const secondObject = todowork.date;

    let html = `<p>
         ${firstObject} -- ${secondObject} --
        <button onclick="todo.splice(${i}, 1)
        update();
        ">delete</button>
        </p>`;

    firsthtml += html;
  }
  document.querySelector("#lowerbox").innerHTML = firsthtml;
}

function addtodo() {
  const element = document.querySelector(".todotaker");
  const work = element.value;

  const elementTwo = document.querySelector(".dateselector");
  const date = elementTwo.value;

  todo.push({
    work,
    date,
  });

  console.log(todo);

  element.value = "";
  elementTwo.value = "";

  update();
}
