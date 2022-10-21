{
   const taskTable = [
      {
         content: "zadanie 1",
         done: true
      },
      {
         content: "zadanie 2",
         done: false
      }];

   const addNewTask = (newTaskContent) => {
      taskTable.push({
         content: newTaskContent,
      });
      render();
   };
   const removeTask = (taskIndex) => {
      taskTable.splice(taskIndex, 1);
      render();
   }
   const toggleTask = (taskIndex) => {
      taskTable[taskIndex].done = !taskTable[taskIndex].done;
      render();
   }

   const render = () => {
      let htmlString = "";

      taskTable.forEach(element => {
         if (element.done) {
            htmlString += `<li class="list__item list__item--lineThrough">
                    <img src="img/accept-icon.png" alt="green icon" class="list__icon js-done">`;
         } else {
            htmlString += `<li class="list__item">
                    <img src="img/green-icon.png" alt="green icon" class="list__icon js-done">`;
         }
         htmlString += `<span class="list__span">${element.content}</span>
                <img src="img/trash-can.jpg" alt="trash can icon" class="list__icon js-remove">  
            </li>`;
      });
      document.querySelector(".js-taskList").innerHTML = htmlString;

      const removeButtons = document.querySelectorAll(".js-remove");
      removeButtons.forEach((removeButton, index) => {
         removeButton.addEventListener("click", () => {
            removeTask(index);
         });
      });

      const toggleButtons = document.querySelectorAll(".js-done");
      toggleButtons.forEach((toggleButton, index) => {
         toggleButton.addEventListener("click", () => {
            toggleTask(index);
         });
      });
   };

   const onFormSubmit = (event) => {
      event.preventDefault();
      const taskTextElement = document.querySelector(".js-taskText");
      const newTaskContent = taskTextElement.value.trim();
      if (newTaskContent === "") {
         return;
      }
      addNewTask(newTaskContent);
      taskTextElement.value = "";
   };

   const init = () => {
      const form = document.querySelector(".js-form");
      form.addEventListener("submit", onFormSubmit);

      const addTaskButton = document.querySelector(".js-addTaskButton");
      addTaskButton.addEventListener("click", (event) => {
         document.querySelector(".js-taskText").focus();
         onFormSubmit(event);
      });
      render();
   };
   init();
}