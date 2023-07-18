export function AddProject(){

    const TaskBar = document.getElementById('TaskBar');
    const Projects = document.createElement('p');
    const AddTaskButton = document.createElement('button')
    const Form = document.createElement('form');
    

    AddTaskButton.id = "AddTaskButton";
    Form.id = "AddProjectFrom";

    Projects.textContent = "Projects";
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
        const resetbtn = document.createElement('input');

        ProjectName.id = "input";
        buttonsstyle.id = "buttonsstyle";
        submitbtn.id = "buttons";
        resetbtn.id = "buttons";


        ProjectName.placeholder = "ProjectName";

        submitbtn.type = "submit";
        resetbtn.type = "reset";

        Form.appendChild(ProjectName);
        Form.appendChild(buttonsstyle);
        buttonsstyle.appendChild(submitbtn);
        buttonsstyle.appendChild(resetbtn);

        resetbtn.addEventListener('click', () => {
            TaskBar.removeChild(Form);
        })
    })
}