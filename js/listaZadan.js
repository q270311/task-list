{
   let taskTable = [];
   let hideDoneTask = false;


   const addNewTask = (newTaskContent) => {
      taskTable = [...taskTable, { content: newTaskContent, }];
      render();
   };
   const removeTask = (removeIndex) => {
      taskTable = [...taskTable.slice(0, removeIndex), ...taskTable.slice(removeIndex + 1)];
      render();
   }
   const toggleTask = (editIndex) => {
      taskTable = [...taskTable.slice(0, editIndex),
      { ...taskTable[editIndex], done: !taskTable[editIndex].done },
      ...taskTable.slice(editIndex + 1)];
      render();
   }
   const setDoneAllTasks = () => {
      taskTable = [...taskTable];
      taskTable.forEach((element) => {
         element.done = true;
      });
      render();
   }
   const hideDoneAllTasks = () => {
      hideDoneTask = !hideDoneTask;
      render();
   }

   const bindEvents = () => {
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
   }

   const renderTask = () => {
      let htmlString = "";

      taskTable.forEach(element => {
         if (element.done) {
            htmlString += `<li class="${hideDoneTask ? "list__item--hidden" : "list__item"}">
                    <button class="list__icon list__icon--green js-done"> ✔ </button>
                    <span class="list__taskText list__taskText--done">${element.content}</span>`;
         } else {
            htmlString += `<li class="list__item">
                    <button class="list__icon list__icon--green js-done"></button>
                    <span class="list__taskText">${element.content}</span>`;
         }
         htmlString += `
                <button class="list__icon list__icon--red js-remove"> 🗑 </button> 
            </li>`;
      });
      document.querySelector(".js-taskList").innerHTML = htmlString;

   }

   const renderButtons = () => {
      let htmlString = "<span>Lista zadań</span>";

      if (taskTable.length !== 0) {
         if (hideDoneTask) {
            htmlString += `
            <button type="button" class="section__button js-hideAllTasksButton">Pokaż ukończone</button>`;
         } else {
            htmlString += `
            <button type="button" class="section__button js-hideAllTasksButton">Ukryj ukończone</button>`;
         }


         const isEveryTaskDone = taskTable.every(({ done }) => done);
         if (isEveryTaskDone) {
            htmlString += `
            <button type="button" class="section__button js-setDoneAllTasksButton" disabled>Ukończ wszystkie</button>`;
         } else {
            htmlString += `
            <button type="button" class="section__button js-setDoneAllTasksButton">Ukończ wszystkie</button>`;
         }
      }
      document.querySelector(".js-sectionButton").innerHTML = htmlString;
   }

   const bindButtonEvents = () => {
      if (taskTable.length === 0) {
         return;
      }

      const setDoneAllTasksButton = document.querySelector(".js-setDoneAllTasksButton");
      setDoneAllTasksButton.addEventListener("click", () => {
         setDoneAllTasks();
      });

      const hideAllTasksButton = document.querySelector(".js-hideAllTasksButton");
      hideAllTasksButton.addEventListener("click", () => {
         hideDoneAllTasks();
      });
   }

   const render = () => {
      renderTask();
      renderButtons();

      bindEvents();
      bindButtonEvents();
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