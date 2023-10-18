document.addEventListener('DOMContentLoaded', function () {
    const todoForm = document.querySelector('#todoForm');
    const todoList = document.querySelector('#todoList');
    const input = document.querySelector('#task')

    todoForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const removeButton = document.createElement('button');
        removeButton.innerText = 'Complete';

        const newTask = document.createElement('li');
        newTask.innerText = input.value.toUpperCase();

        todoList.appendChild(newTask);
        newTask.appendChild(removeButton);

        todoForm.reset();
    });

    todoList.addEventListener('click', function (e) {
        const targetTagLowerCase = e.target.tagName.toLowerCase();
        if (targetTagLowerCase === 'li') {
            e.target.style.textDecoration = 'line-through';
        } else if (targetTagLowerCase === 'button') {
            e.target.parentElement.remove();
        }
    });
});
