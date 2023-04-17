// 
function register() {
    const form = document.getElementById("reg");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        let username = document.querySelector(".username").value;
        let password = document.querySelector(".password").value;

        alert(username, password)

        let user = {
            username,password
        }
    
    });

}

