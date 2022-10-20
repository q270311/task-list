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

   const render = () => {
      let htmlString = "";

      taskTable.forEach(element => {
         if (element.done) {
            htmlString += `<li class="list__item list__item--lineThrough">
                    <img src="img/accept-icon.png" alt="green icon">`;
         } else {
            htmlString += `<li class="list__item">
                    <img src="img/green-icon.png" alt="green icon">`;
         }
         htmlString += `<span>${element.content}</span>
                <img src="img/trash-can.jpg" alt="trash can icon">  
            </li>`;
      });
      document.querySelector(".js-taskList").innerHTML = htmlString;
   }
   const addNewTask=(newTaskContent)=>{
      taskTable.push({
         content:newTaskContent,
      });
      render();
   }

   const onFormSubmit= (event) => {
      event.preventDefault();
      const taskTextElement = document.querySelector(".js-taskText");
      const newTaskContent = taskTextElement.value.trim();
      if (newTaskContent === "") {
         return;
      }
      addNewTask(newTaskContent);
      taskTextElement.value="";
   }

   const init = () => { 

      const form = document.querySelector(".js-form");
      form.addEventListener("submit",onFormSubmit);

      const addTaskButton = document.querySelector(".js-addTaskButton");
      addTaskButton.addEventListener("click", () => {
         document.querySelector(".js-taskText").focus();
      });
      render();
   }
   init();
}