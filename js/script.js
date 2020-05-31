const email=document.getElementById("email");
const name=document.getElementById("name");
const password=document.getElementById("password");
const pass=document.querySelector(".password");


function check(){
    if (email.checkValidity()){
    }
    else{
      email.reportValidity(); 
    }
  }