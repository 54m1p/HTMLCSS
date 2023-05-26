
let loginFlag;
let currentLoggedIn;

let loginFn = () =>{
    loginCheck();
    if(loginFlag){
        location.href = "https://samipneupane.com.np/";
    }
    else{
        alert("Invalid email or password");
    }
}

let loginCheck = () =>{
    let loginEmail = document.getElementById("login-email").value;
    let loginPswd = document.getElementById("login-pswd").value;
    document.getElementById("login-email").value = "";
    document.getElementById("login-pswd").value = "";

    let creds = localStorage.getItem("creds") != null? JSON.parse(localStorage.getItem("creds")):[];
    for(let i = 0; i<creds.length;i++){
        if(loginEmail == creds[i].email && loginPswd == creds[i].password){
            currentLoggedIn = {
                    name: creds[i].name,
                    email: creds[i].email,
                    password: creds[i].password
            }
            sessionStorage.setItem("currentLoggedIn",JSON.stringify(currentLoggedIn));
          loginFlag = true;
          break;
          }
        else{
            loginFlag = false;
        }
    }
}

// function to run Onload
let onLoadFn = () =>{
    
}