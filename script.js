let add = document.querySelector(".icona")
let form = document.querySelector(".addpopup")
let done = document.querySelector(".done")
let task_list = document.querySelector(".task_list")
let numberoftask = document.querySelector(".numberoftask")
let taskinput = document.querySelector(".tasker")
let submit = document.querySelector(".submit")
let nametask = document.querySelector(".Name");
let deletes = document.querySelector(".delete")

add.addEventListener("click",function(){
    form.style.display = "flex";
    })
    
    done.addEventListener("click", function () {
        let nameoftask = nametask.value.trim();
        let a = parseInt(numberoftask.value);
    
        if (nameoftask === "" || isNaN(a)) {
            alert("Enter both name and a valid number of tasks");
        } else {
            let s = "";
            for (let i = 1; i <= a; i++) {
                s += `<input type="text" class="task" placeholder="Task ${i}">`;
            }
            taskinput.innerHTML = s;
            taskinput.style.padding = "1rem";
    
            let heading = document.querySelector(".namehead");
            heading.innerHTML = nameoftask;
    
            let numberoftaskview = document.querySelector(".namenum");
            numberoftaskview.innerHTML = a;
        }
    });
    



submit.addEventListener("click",function(){
    let task = document.querySelector(".task")
    let taskvalue = task.value
    if(taskvalue==""){
        alert("enter you preplanned task");
    }
    else{
        form.style.display = "none";
    }
    
 task_list.style.display = "flex"
});

deletes.addEventListener("click",function(){
    task_list.style.display = "none"
})