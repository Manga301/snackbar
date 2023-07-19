const btn = document.getElementById("btn");
const snackbar = document.getElementById("snackbar-container");

const message = "Success";
let isActive = true;

function createNotigfication(){
    
    if(isActive){
        isActive = false;
        
        const notification = document.createElement("div");
        notification.classList.add("snackbar");
        notification.classList.add("active-snackbar");
        notification.innerText = message;
        snackbar.appendChild(notification);

        // remove notification after 5 seconds
        setTimeout(() => {
            notification.remove();
            isActive = true;

        }, 3000);
    }  

}


btn.addEventListener("click", () => createNotigfication());

