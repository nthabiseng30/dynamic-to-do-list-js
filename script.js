// Setup Event Listener for Page Load
document.addEventListener('DOMContentLoaded', () => {
  // Select DOM Elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Function to load tasks from Local Storage
  function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.forEach(taskText => addTask(taskText, false));
  }

  // Create the addTask Function
  function addTask(taskText, save = true) {
    // Retrieve and trim the value from the task input field
    taskText = taskText.trim();

    // Check if taskText is not empty
    if (taskText === "") {
      alert("Please enter a task");
      return;
    }

    // Create a new li element
    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;

    // Create a new button element for removing the task
    const removeButton = document.createElement('button');
    removeButton.textContent = "Remove";
    removeButton.classList.add('remove-btn');

    // Assign an onclick event to the remove button
    removeButton.onclick = () => {
      taskList.removeChild(taskItem);
      updateTasks();
    };

    // Append the remove button to the li element
    taskItem.appendChild(removeButton);

    // Append the li to taskList
    taskList.appendChild(taskItem);

    // Save task to Local Storage
    if (save) {
      updateTasks();
    }
  }

  // Function to update tasks in Local Storage
  function updateTasks() {
    const tasks = Array.from(taskList.children).map(task => task.firstChild.textContent);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  // Load tasks from Local Storage
  loadTasks();

  // Attach Event Listeners
  addButton.addEventListener('click', () => {
    addTask(taskInput.value);
    taskInput.value = "";
  });

  taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      addTask(taskInput.value);
      taskInput.value = "";
    }
  });
});
