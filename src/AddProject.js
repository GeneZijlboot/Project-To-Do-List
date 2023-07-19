export function AddProject(){

    const TaskBar = document.getElementById('TaskBar');
    const Projects = document.createElement('p');
    Projects.textContent = "To Do List";

    TaskBar.appendChild(Projects);
    /*
    const AddTaskButton = document.createElement('button');
    const Form = document.createElement('form');
    const resetbtn = document.createElement('button');

    AddTaskButton.id = "AddTaskButton";
    Form.id = "AddProjectFrom";

    
    AddTaskButton.textContent = "+ Add Project";

    TaskBar.appendChild(Projects);
    TaskBar.appendChild(AddTaskButton);
    TaskBar.appendChild(Form);


    const AddProject = document.getElementById('AddTaskButton');
    AddProject.addEventListener('click', () => {
        //Dom manipulate the adding shit
        console.log('testing eveentlistenter');

        const ProjectName = document.createElement('input');
        const buttonsstyle = document.createElement('div');
        const submitbtn = document.createElement('input');

        ProjectName.id = "input";
        buttonsstyle.id = "buttonsstyle";
        submitbtn.id = "buttons";
        resetbtn.id = "buttons";


        ProjectName.placeholder = "ProjectName";
        resetbtn.textContent = "cancel";

        submitbtn.type = "submit";
        resetbtn.type = "reset";

        Form.appendChild(ProjectName);
        Form.appendChild(buttonsstyle);
        buttonsstyle.appendChild(submitbtn);
        buttonsstyle.appendChild(resetbtn);
        AddProject.disabled = true;
    })


    resetbtn.addEventListener('click', () => {
        TaskBar.removeChild(Form);
        AddProject.disabled = false;
    })
    */
}