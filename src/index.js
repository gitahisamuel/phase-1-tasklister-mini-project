document.addEventListener("DOMContentLoaded", () => {
  // your code here
const taskForm = document.querySelector('#taskForm');
  const taskInput = document.querySelector('#taskInput');
  const taskList = document.querySelector('#tasks');


  taskForm.addEventListener("submit", (event) => {
  // prevents the page from refreshing
    event.preventDefault();

  // gets the value the user typed

    const text = taskInput.value;
      // console.log(text);
    if(text === "")return;

    // ccreated a new element(<li>)
    
    const li = document.createElement('li');
    li.textContent = text
    console.log(li);

    // create delete button

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X'

    // deletes the tasks in the list
    deleteBtn.addEventListener('click', () => li.remove());
    li.appendChild(deleteBtn);



    //Displayed the value added to my TODO LIST
    taskList.appendChild(li);

    // clears the input field
    taskInput.value = "";

    // Can see where to input my text

    taskInput.focus();




  });


});

  

