
function sum(){
    let num = document.getElementById("num").value;
    let sum =0;
    if(num<0){
        alert("Enter positive number");
    }
    for(let i=1; i<=num;i++){
    sum+=i;
    }
    document.write("The sum is"+ sum);
}
  
function mouseOver(){
    const person = {
        firstName: "abc",
        lastName: "xyz",
        age: 20,
        fullName: function(){
            return this.firstName+" "+this.lastName;
        }
    }
    console.log("mouse movedover object");
}

function activeElement(){
    const element = document.activeElement.tagName;
    console.log(element);
}

 document.addEventListener("click", myfn(){
    document.getElementById("h1").innerHTML= "Now changed";
});
