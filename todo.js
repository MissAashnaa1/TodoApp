let id ;
//create data structue

let todo = [];

function search(arr, idd) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].id == idd) {
            return i;
        }
    }
}
function reload() {
    let old = JSON.parse(localStorage.getItem("task"));
    // json se parse krke dubara array m dalna pdega sb and vo sbke aage append krna pdega 
    if (old!=null) {
        for (let i = 0; i < old.length; i++) {
            let name = old[i].task;
            let taskList = document.getElementById("taskList");

            let main = document.createElement("div");
            main.id = id;
            let ob = {};
            let span = document.createElement('span');
            span.id = old[i].id;
            span.innerHTML = old[i].task;
            if (old[i].status == "checked") {
                span.style.textDecoration = "line-through";
            }

            else {
                span.style.textDecoration = "none";
                // span.innerHTML = old[i].task;
            }
            ob["id"] = old[i].id;
            ob["task"] = old[i].task;
            ob["status"] = old[i].status;
            // console.log(ob);
            todo.push(ob);
            localStorage.setItem("task", JSON.stringify(todo));
            let delbtn = document.createElement("button");
            delbtn.id = old[i].id;
            delbtn.innerHTML = "X";
            delbtn.addEventListener('click', function (event) {
                let parent = event.target.parentElement;
                let task = document.getElementById("taskList");
                task.removeChild(parent);
                for (let i = 0; i < todo.length; i++) {

                    if (todo[i].id == delbtn.id) {
                        // console.log(todo);
                        todo.splice(i, 1);
                        //console.log(todo);
                    }

                }

                localStorage.setItem("task", JSON.stringify(todo));


            });


            let checkbox = document.createElement("input");
            checkbox.setAttribute("type", "checkbox");
            checkbox.id = old[i].id;

            if (old[i].status == "checked") {
                checkbox.checked = true;
                span.style.textDecoration="line-through";
            }
            else {
                checkbox.checked = false;
                span.style.textDecoration="none";
            }
            checkbox.addEventListener('click', function (event) {
                let idd = event.target.id;
                let check = event.target.checked;
                let child = document.getElementById(idd);//maindiv
                //let child=parent.children[0];
                console.log(idd+id);
                let k=search(todo,idd);
                if (check == true) {
                    child.style.textDecoration="line-through";
                    
                    todo[k].status = "checked";
                    localStorage.setItem("task", JSON.stringify(todo));
                    check=false;

                }
                else {
                    child.style.textDecoration = "none";
                    todo[k].status = "unchecked";
                    localStorage.setItem("task", JSON.stringify(todo));
                    check=true;
                }
            });
            let update = document.createElement("button");
            update.id = old[i].id;
            update.innerHTML = "p";
            update.addEventListener("click", function (event) {
                let par = event.target.parentElement;
                let upid = event.target.id;
                let p = par.getElementsByTagName("span")[0];
                // p.innerHTML = "";
                let k = search(todo, upid);
                let ans = prompt("Write updated task", p.innerHTML);

                if (ans==""||!ans.trim()) {
                    ans = p.innerHTML;
    
                }
                

                {
                    p.innerHTML = ans;

                    if (todo[k].status == "checked") {

                        p.style.textDecoration = "line-through";

                    }
                    else {
                        p.style.textDecoration = "none";
                    }
                    todo[k].task = ans;
                    //console.log(todo,"update");
                    //  todo[old[i].id].

                    localStorage.setItem("task", JSON.stringify(todo));
                }


            });

            let hr = document.createElement("hr");
            hr.id = old[i].id;
            taskList.appendChild(main);
            main.appendChild(span);

            main.appendChild(update);
            main.appendChild(checkbox);
            main.appendChild(delbtn);
            main.appendChild(hr);


            id = old[i].id;

        }

    }
}


function addTask() {
    let name = document.getElementById("textare").value;
    if (name !== "" && name.trim().length !== 0) {
        let taskList = document.getElementById("taskList");
        id=Date.now();
        let main = document.createElement("div");
        main.id = id;
        let ob = {};
        let span = document.createElement('span');
        span.id = id;

        span.innerHTML = name;

        let taskdata = (span.innerHTML);
        ob["id"] = main.id;
        ob["task"] = taskdata;
        ob["status"] = "unchecked";
        // console.log(ob);
        todo.push(ob);
        localStorage.setItem("task", JSON.stringify(todo));
        //  console.log(todo,"123");


        let delbtn = document.createElement("button");
        delbtn.id = id;
        delbtn.innerHTML = "X";
        // console.log(todo);
        delbtn.addEventListener('click', function (event) {
            let parent = event.target.parentElement;
            let task = document.getElementById("taskList");
            task.removeChild(parent);
            for (let i = 0; i < todo.length; i++) {

                if (todo[i].id == delbtn.id) {
                    console.log(todo);
                    todo.splice(i, 1);
                    console.log(todo);
                }

            }

            localStorage.setItem("task", JSON.stringify(todo));


        });


        let checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        checkbox.id = id;

        checkbox.addEventListener('click', function (event) {
            let idd = event.target.id;
            let check = event.target.checked;
            let parent = document.getElementById(idd);//maindiv
           let k=search(todo,idd);
           let child = parent.childNodes[0];
        
            if (check == true) {
                child.style.textDecoration = "line-through";
                todo[k].status = "checked";
                localStorage.setItem("task", JSON.stringify(todo));
                check=false;

            }
            else {
                child.style.textDecoration = "none";
             
                todo[k].status = "unchecked";
                localStorage.setItem("task", JSON.stringify(todo));
                check=true;


            }



        });
        let update = document.createElement("button");
        update.id = id;
        update.innerHTML = "p";
        update.addEventListener("click", function (event) {
            let par = event.target.parentElement;
            let p = par.getElementsByTagName("span")[0];
            let uid = p.id;
            let k=search(todo,uid);
            let ans = prompt("Write updated task");
            if (!ans.trim()||ans=="") {
                ans = p.innerHTML;

            }
            else {
                p.innerHTML = ans;
                if (todo[k].status == "checked") {
                    p.style.textDecoration = "line-through";
                    
                    localStorage.setItem("task", JSON.stringify(todo));

                }
                else {
                    p.style.textDecoration = "none";
                    localStorage.setItem("task", JSON.stringify(todo));
                }

                todo[k].task = p.innerHTML;
              
                localStorage.setItem("task", JSON.stringify(todo));
            }




        });

        let hr = document.createElement("hr");
        hr.id = id;
        taskList.appendChild(main);
        main.appendChild(span);

        main.appendChild(update);
        main.appendChild(checkbox);
        main.appendChild(delbtn);
        main.appendChild(hr);


        
        textare.value = null;
    }
}
textare.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        addTask();
    }
});

reload(); 