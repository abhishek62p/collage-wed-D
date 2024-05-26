const btn = document.querySelector("button");
const list = document.querySelector(".list-container");

btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    let task = document.querySelector("input").value;
    console.log(task);
    if(task === "") {
        alert("Create any Task");
    }
    else {
        const newTaskList = () => {
            let newTaskList = document.createElement("li");
            newTaskList.classList.add("list-item");
            list.prepend(newTaskList);
            console.log(newTaskList);
        }
        newTaskList();
        const listI = document.querySelector(".list-item");
        
        const checkList = () => {
            let checkList = document.createElement("i");
            listI.append(checkList);
            checkList.classList.add("fa-regular", "fa-circle", "fa-circle-check")
            console.log(checkList);
        }
        checkList();

        const listItem = () => {   
            let listItem = document.createElement("p");
            listI.append(listItem);
            listItem.innerText = task;
            console.log(listItem);
        }
        listItem();
        
        const deleteIcon = () => {
            let deleteIcon = document.createElement("i");
            listI.append(deleteIcon);
            deleteIcon.classList.add("fa-sharp", "fa-regular", "fa-circle-xmark")
            console.log(deleteIcon);
        }
        deleteIcon();

        listI.childNodes[0].addEventListener("click", () => {
            let checkBox = listI.childNodes[0];
            checkBox.classList.add("fa-solid");
            checkBox.classList.remove("fa-regular", "fa-circle");
            console.log(checkBox);
            completeTask();
            disableCheckBox();
        })

        const disableCheckBox = () => {
            listI.childNodes[0].style.fontSize = '1.10rem';
            listI.childNodes[0].style.color = '#e693b7';
            listI.childNodes[1].style.color = 'rgb(136, 131, 133)';
            listI.style.fontSize = '1.05rem';
            listI.disabled = "true";
            listI.childNodes[0].style.cursor = 'no-drop'
            listI.style.cursor = 'no-drop'
        }
        
        const completeTask = () => {
            // let crossIcon = listI.childNodes[2];
            // crossIcon.classList.remove("fa-regular", "fa-circle-xmark", "fa-sharp");

            listI.childNodes[2].remove();
            listItem();
            let = crossIcon = listI.childNodes[2];
            crossIcon.innerText = "completed";
            crossIcon.style.position = "absolute";
            crossIcon.style.right = 0 + 'px';
            crossIcon.style.color = '#deb0d0';
            crossIcon.style.fontSize = '1rem';
            crossIcon.style.fontStyle = 'normal';
            crossIcon.style.fontWeight = '300';
            crossIcon.style.fontFamily = 'Arial';
            crossIcon.style.margin = '0';
        }

        listI.childNodes[2].addEventListener("click", () => {
            listI.remove();
        })
    }
    document.querySelector("input").value = "";
    document.querySelector(".list-item").classList.remove("list-item");
});

