let registerform = document.getElementById("register-form");
registerform.addEventListener("submit", (e) =>{
    e.preventDefault(); 
    formValidate = validatefn();
    if(formValidate == false){
        alert("Not submitted");
        return;
    }
 
    registerform.submit();
});

// document.getElementById("form-submit").onclick = validatefn();

function validatefn(){
    dateCheckResponse = datecheck();
    emailCheckResponse = emailCheck();
    pswdCheckResponse = passwordCheck();
    console.log("date is"+dateCheckResponse);
    if(dateCheckResponse == false){
        alert("Invalid date");
        return false;
    }
    if(emailCheckResponse == false){
            alert("Invalid email");
            return false
        }
    if(pswdCheckResponse == false){
            alert("Invalid password");
            return false;
        }
    return true;
    
}
function datecheck(){
    var inputMonth = document.getElementById("mm").value;
    var inputDay = document.getElementById("dd").value;
    var inputYear = document.getElementById("yyyy").value;

    var currentDate =new Date();
    var currentMonth = currentDate.getMonth();
    var currentDay = currentDate.getDate();
    var currentYear = currentDate.getFullYear();

    if((inputYear < currentYear) || (inputYear == currentYear && inputMonth < currentMonth) || (inputYear == currentYear && inputMonth == currentMonth && inputDay < currentDay)){
        return true;
    }
    else{
        return false;
    }
    }

    function emailCheck(){
        var regexValue = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        var inputEmail = document.getElementById("form-email").value;
        if(inputEmail.match(regexValue)){
            return true;
        }
        else{
            return false;
        }
    }

function passwordCheck(){
    var pswd1 = document.getElementById("password").value;
    var pswd2 = document.getElementById("re-password").value;
    if(pswd1 == pswd2 ){
        return true;
    }
    else{
        return false;
    }
}
