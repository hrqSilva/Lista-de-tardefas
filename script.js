const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

// Adicionar tarefa
addBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if(taskText === '') return;

    const li = document.createElement('li');
    li.textContent = taskText;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Excluir';
    deleteBtn.addEventListener('click', () => li.remove());

    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = '';
});

// Adicionar tarefa ao pressionar Enter
taskInput.addEventListener('keypress', (e) => {
    if(e.key === 'Enter') addBtn.click();
});
