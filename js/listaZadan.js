{
    const taskTable = [
        {
            task: "zadanie 1",
            status: true
        },
        {
            task: "zadanie 2",
            status: true
        }];

    const render=()=>{
        let textRender="";
        const listTaskElement=document.querySelector(".js-taskList");

        taskTable.forEach(element => {
            textRender+=`<li class="list__item">
                    <img src="img/green-icon.png" alt="green icon">
                    <span>${element.task}</span>
                    <img src="img/trash-can.jpg" alt="trash can icon">  
            </li>`;            
        });
        listTaskElement.innerHTML=textRender;
    }

    const addNewTaskToList = () => {
        const taskTextElement = document.querySelector(".js-taskText");
        taskTextElement.focus();
        render();
    }
    const init = () => {
        const addTaskButton = document.querySelector(".js-addTaskButton");
        addTaskButton.addEventListener("click", addNewTaskToList);
        render();
    }
    init();
}