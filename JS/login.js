let username = document.getElementById("username");
let password = document.getElementById("password");
let btn = document.getElementById("btn");
 

function login(callback) //CallBack Function//
{
    event.preventDefault();  
if(username.value == "" || password.value == "")
{
    alert("All fields must be filled");
}
else
{
if(username.value == "admin" && password.value == "12345")
{
    callback();
}
else
{
    alert("Please enter correct Username and Password");
}
}
}

//CallBack Function//
function log() {
   location.href = "mainpage.html";
}
login(log);
function myfunction() //Function to Show and Hide Password//
{
    var x = document.getElementById("password");
    if(x.type === "password")
    {
        x.type = "text";

    }
    else
    {
        x.type = "password";
    }
}  //Function to Show and Hide Password//