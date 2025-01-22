function addTask() {
  // Retrieve and trim the value from the task input field
  const taskText = taskInput.value.trim();

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

  // Add the class 'remove-btn' to the remove button
  removeButton.classList.add('remove-btn');

  // Assign an onclick event to the remove button
  removeButton.onclick = () => {
    taskList.removeChild(taskItem);
  };

  // Append the remove button to the li element
  taskItem.appendChild(removeButton);

  // Append the li to taskList
  taskList.appendChild(taskItem);

  // Clear the task input field
  taskInput.value = "";
}
