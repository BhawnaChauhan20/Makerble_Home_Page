document.addEventListener("DOMContentLoaded", function () {
    // Toggle More Button
    const toggleMoreBtn = document.getElementById("toggleMoreBtn");
    const toggleLessBtn = document.getElementById("toggleLessBtn");
    const moreContent = document.getElementById("moreContent");

    const storyForm = document.getElementById("storyForm");
    const storyInput = document.getElementById("storyInput");
    const newsFeed = document.getElementById("newsFeed");
    const errorMessage = document.getElementById("error-message");
    
 
    storyForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent form submission

        const storyText = storyInput.value.trim(); // Get the input value

        // Validate input length
        if (storyText.length < 3) {
            errorMessage.classList.remove("hidden"); // Show error message
            return;
        } else {
            errorMessage.classList.add("hidden"); // Hide error message
        }

        // Create a new story element
        const newStory = document.createElement("div");
        newStory.className = "bg-gray-100 p-4 rounded-md flex justify-between items-center";
        newStory.innerHTML = `
            <div>
                <h3 class="text-md font-semibold">Bhawna Chauhan</h3>
                <p class="text-gray-700">${storyText}</p>
            </div>
            <button class="bg-red-500 text-white px-3 py-1 rounded-md remove-news">
                <i class="fas fa-minus"></i>
            </button>
        `;

        // Append the new story to the news feed
        newsFeed.appendChild(newStory);

        // Clear the input field
        storyInput.value = "";

        // Add event listener to remove button
        const removeButton = newStory.querySelector(".remove-news");
        removeButton.addEventListener("click", () => {
            newsFeed.removeChild(newStory);
        });
    });
    
    toggleLessBtn.style.display = "none"; // Hide the "Less..." button initially

    toggleMoreBtn.addEventListener("click", function () {
        // Show hidden content and "Less..." button
        moreContent.classList.remove("hidden");
        toggleMoreBtn.style.display = "none";  // Hide the "More..." button
        toggleLessBtn.style.display = "block"; // Show the "Less..." button
    });

    toggleLessBtn.addEventListener("click", function () {
        // Hide the hidden content and show "More..." button
        moreContent.classList.add("hidden");
        toggleMoreBtn.style.display = "block";  // Show the "More..." button
        toggleLessBtn.style.display = "none";   // Hide the "Less..." button
    });

    // Handle Add/Remove Tasks
    const taskForm = document.getElementById("taskForm");
    const tasksList = document.getElementById("tasksList");
    taskForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const taskInput = document.getElementById("taskInput");
        if (taskInput.value.trim() === "") return;
        const newTask = document.createElement("li");
        newTask.classList.add("bg-gray-100", "p-2", "rounded-md", "flex", "justify-between", "items-center");
        newTask.innerHTML = `${taskInput.value}<input type="checkbox" class="task-checkbox ml-5" data-task="Follow up on social authority"> <button class="bg-red-500 text-white px-2 py-1 rounded-md remove-task"><i class="fas fa-minus"></i></button>`;
        tasksList.appendChild(newTask);
        taskInput.value = "";
        attachRemoveEvent(newTask.querySelector(".remove-task"));
    });

   
const toDoList = document.getElementById('toDoList');
const doneList = document.getElementById('doneList');
const taskItems=document.querySelectorAll('.task-checkbox');
taskItems.forEach(task => {
    const taskText = task.getAttribute('data-task');
    if (!task.checked) {
        addTaskToList(toDoList, taskText);
    }
});
tasksList.addEventListener('change', function (e) {
    if (e.target && e.target.matches('input.task-checkbox')) {
        const taskText = e.target.getAttribute('data-task');
        if (e.target.checked) {
            // Move to "Done"
            moveTask(taskText, toDoList, doneList);
        } else {
            // Move back to "To-Do"
            moveTask(taskText, doneList, toDoList);
        }
    }
});

function addTaskToList(list, taskText) {
    const li = document.createElement('li');
    li.textContent = taskText;
    list.appendChild(li);
}

function moveTask(taskText, fromList, toList) {
    // Find task in "fromList" and remove it
    const items = fromList.querySelectorAll('li');
    items.forEach(item => {
        if (item.textContent === taskText) {
            fromList.removeChild(item);
        }
    });

    // Add task to "toList"
    addTaskToList(toList, taskText);
}
});
const viewTasksBtn = document.getElementById('viewTasksBtn');
const taskList = document.getElementById('taskList');
// Toggle task list visibility
viewTasksBtn.addEventListener('click', () => {
    taskList.classList.toggle('hidden');
    renderTasks();
  });

    
// Toggle personal progress details here
const progressSection=document.getElementById("progressSection");
const progressBtn=document.getElementById("progress");
progressSection.addEventListener('click',()=>{
progressBtn.classList.toggle('hidden');
    
});
// Attach remove event to the remove button
attachRemoveEvent(newTask.querySelector(".remove-task"));



    // Handle Add/Remove Projects
    const projectForm = document.getElementById("projectForm");
    const projectsList = document.getElementById("projectsList");
    projectForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const projectInput = document.getElementById("projectInput");
        if (projectInput.value.trim() === "") return;
        const newProject = document.createElement("li");
        newProject.classList.add("bg-gray-100", "p-2", "rounded-md", "flex", "justify-between", "items-center");
        newProject.innerHTML = `${projectInput.value} <button class="bg-red-500 text-white px-2 py-1 rounded-md remove-project"><i class="fas fa-minus"></i></button>`;
        projectsList.appendChild(newProject);
        projectInput.value = "";
        attachRemoveEvent(newProject.querySelector(".remove-project"));
    });
    

    // Remove Newsfeed, Tasks, Projects Items
    function attachRemoveEvent(removeBtn) {
        removeBtn.addEventListener("click", function () {
            removeBtn.parentElement.remove();
        });
    }

    // Attach to existing remove buttons on page load
    document.querySelectorAll(".remove-task").forEach(attachRemoveEvent);
    document.querySelectorAll(".remove-project").forEach(attachRemoveEvent);
    document.querySelectorAll(".remove-news").forEach(attachRemoveEvent);






    // const taskProgress = document.getElementById("taskProgress");
    // const projectProgress = document.getElementById("projectProgress");
    // const skillProgress = document.getElementById("skillProgress");

    // // Simulate progress values (These can be fetched or calculated based on actual data)
    // let taskCompletion = 75;   // 75% of tasks completed
    // let projectCompletion = 50; // 50% of project work done
    // let skillDevelopment = 85;  // 85% skill development progress

    // // Function to set progress width dynamically
    // function updateProgress(progressElement, value) {
    //     progressElement.style.width = value + '%';
    // }

    // // Update the progress bars
    // updateProgress(taskProgress, taskCompletion);
    // updateProgress(projectProgress, projectCompletion);
    // updateProgress(skillProgress, skillDevelopment);
     // Dark Mode Toggle

    //  li.querySelector('.task-checkbox').addEventListener('change', function () {
    //     if (this.checked) {
    //         // Move to Done list
    //         doneList.appendChild(li);
    //     } else {
    //         // Move back to Tasks list
    //         toDoList.appendChild(li);
    //     }
    // });


    
// Example task data structure (You can replace this with your actual data or fetch from an API)
// const tasks = [
//   { id: 1, name: 'Task 1', done: false },
//   { id: 2, name: 'Task 2', done: true },
//   { id: 3, name: 'Task 3', done: false },
// ];

// // Function to render tasks
// function renderTasks() {
//   toDoList.innerHTML = '';
//   doneList.innerHTML = '';

//   tasks.forEach(task => {
//     const taskItem = document.createElement('li');
//     taskItem.textContent = task.name;

//     if (task.done) {
//       doneList.appendChild(taskItem);
//     } else {
//       toDoList.appendChild(taskItem);
//     }
//   });
// }


