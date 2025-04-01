const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("li-container");

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    storeData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        storeData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        storeData();
    }
},false);


function storeData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function pastTask(){
    listContainer.innerHTML =localStorage.getItem("data");
}
pastTask();