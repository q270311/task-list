{
    const addNewTaskToList = () => {
        const taskTextElement = document.querySelector(".js-taskText");
        taskTextElement.focus();
    }
    const init = () => {
        const addTaskButton = document.querySelector(".js-addTaskButton");

        addTaskButton.addEventListener("click", addNewTaskToList);
    }
    init();
}