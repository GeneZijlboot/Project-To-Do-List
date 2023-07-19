const SubmitButton = document.createElement('input');
const Form = document.createElement('form');
const Screen = document.getElementById('Screen');
const ToDoNotes = document.createElement("div");
ToDoNotes.id = ToDoNotes;

SubmitButton.type = "submit";
SubmitButton.style = "cursor: pointer;";
SubmitButton.id = "SubmitButton";
Form.id = "AddTaskform";

const NewTask = document.createElement('div');
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

NewTask.id = "NewTask";
txt.class = "text";
DueDate1.for = "DueDate";
DueDate2.id = "DueDate";
Priority.for = "Priority";
Priority2.id = "Priority";

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
    const AddToDobtn = document.getElementById('AddTaskButton');
    AddToDobtn.addEventListener('click', () => {
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
        AddToDobtn.disabled = true;
})
}

//function for every div of the "ToDo"
export function ToDoDiv(){
    const AddToDobtn = document.getElementById('AddTaskButton');
    let ToDo = [];

    function ToDoItem(Title, Description, DueDate2, Priority2) {
        this.Title = Title;
        this.Description = Description;
        this.DueDate2 = DueDate2;
        this.Priority2 = Priority2;
    }

    function render(){
        for(let i = 0; i < ToDo.length; i++){
            let A = ToDo[i];
            ToDoNotes.innerHTML = `
                <div id="ToDo">
                    <p><strong>Title: </strong>${A.Title}<p>
                    <p><strong>Description: </strong>${A.Description}<p>
                    <p><strong>DueDate: </strong>${A.DueDate2}<p>
                    <p><strong>Priority: </strong>${A.Priority2}<p>
                </div>
            `;
            Screen.appendChild(ToDoNotes);
            Screen.removeChild(NewTask);
            AddToDobtn.disabled = false;
        }
    }

    function AddToDodiv(){
        const Title = document.getElementById('Title').value;
        const Description = document.getElementById('Description').value;
        const DueDate2 = document.getElementById('DueDate').value;
        const Priority2 = document.getElementById('Priority').value;

        let newToDo = new ToDoItem(Title, Description, DueDate2, Priority2)
        ToDo.push(newToDo);
        render();
    }

    SubmitButton.addEventListener('click', (e) => {
        e.preventDefault();
        AddToDodiv();
    })
}