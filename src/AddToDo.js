//function for making the text and add a "ToDo" button
export function AddToDo(){
    const TaskBar = document.getElementById('TaskBar');
    const AddToDo = document.createElement('button');

    AddToDo.id = "AddTaskButton";

    AddToDo.textContent = "+ AddToDo";

    TaskBar.appendChild(AddToDo);

}

//function for the form of the "ToDo"
export function ToDoForm(){
    const AddToDo = document.getElementById('AddTaskButton');
    AddToDo.addEventListener('click', () => {
        const Screen = document.getElementById('Screen');
        const NewTask = document.createElement('div');
        const Form = document.createElement('form');
        const txt = document.createElement('h2');
        const Title = document.createElement('input');
        const brONE = document.createElement('br');
        const Description = document.createElement('input');
        const brTWO = document.createElement('br');
        const div = document.createElement('div');
        const DueDate1 = document.createElement('label');
        const DueDate2 = document.createElement('input');
        const brThree = document.createElement('br');
        const div2 = document.createElement('div');
        const Priority = document.createElement('label');
        const Priority2 = document.createElement('select');
        const Low = document.createElement('option');
        const Medium = document.createElement('option');
        const High = document.createElement('option');
        const brFOUR = document.createElement('br');
        const SubmitButton = document.createElement('input');

        NewTask.id = "NewTask";
        Form.id = "AddTaskform";
        txt.class = "text";
        DueDate1.for = "DueDate";
        DueDate2.id = "DueDate";
        Priority.for = "Priority";
        Priority2.id = "Priority";
        SubmitButton.id = "SubmitButton";
        SubmitButton.type = "submit";
        SubmitButton.style = "cursor: pointer;";

        div.style = "display:flex;"

        Title.id = "Title";
        Title.type = "text";
        Title.name = "Title";
        Title.placeholder = "Title";

        DueDate2.type = "date";
        DueDate2.name = "DueDate";
        Priority2.name = "Priority";

        Description.id = "Description";
        Description.type = "text";
        Description.name = "Description";
        Description.placeholder = "Description";

        txt.textContent = "New Task";
        DueDate1.textContent = "Due Date: ";

        Priority.textContent = "Priority: ";

        Low.value = "Low";
        Medium.value = "Medium";
        High.value = "High";

        Low.textContent = "Low";
        Medium.textContent = "Medium";
        High.textContent = "High";

        Screen.appendChild(NewTask);
        NewTask.appendChild(Form);
        Form.appendChild(txt);
        Form.appendChild(Title);
        Form.appendChild(brONE);
        Form.appendChild(Description);
        Form.appendChild(brTWO);
        Form.appendChild(div);
        div.appendChild(DueDate1);
        div.appendChild(DueDate2);
        Form.appendChild(brThree);
        Form.appendChild(div2);
        div2.appendChild(Priority);
        div2.appendChild(Priority2);
        Priority2.appendChild(Low);
        Priority2.appendChild(Medium);
        Priority2.appendChild(High);
        Form.appendChild(brFOUR);
        Form.appendChild(SubmitButton);

        console.log('test');        

        AddToDo.disabled = true;
})
}

//function for every div of the "ToDo"
export function ToDoDiv(){
    console.log('functie werkt!')
}