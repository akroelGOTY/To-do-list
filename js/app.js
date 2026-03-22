const inputTask = document.getElementById("tarefa");
const containerList = document.getElementById("container-list");

function adicionarTarefa() {
    if(inputTask.value === '') {
        alert("Vc precisa escrever algo");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputTask.value;
        containerList.appendChild(li);
        let icon = document.createElement("span");
        icon.innerHTML = "\u00d7";
        li.appendChild(icon);
    }
    inputTask.value = "";
    salvarDados()
}

containerList.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        salvarDados()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        salvarDados()
    }
}, false);

function salvarDados() {
    localStorage.setItem('data', containerList.innerHTML)
}

function mostraTarefas() {containerList.innerHTML = localStorage.getItem("data")}
mostraTarefas()