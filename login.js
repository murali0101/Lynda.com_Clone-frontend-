
// var regUsrs1 = JSON.parse(localStorage.getItem("userDataBase"));
var signInusr = JSON.parse(localStorage.getItem("signInDataBase"));
// console.log(signInusr);
var correctpw = signInusr[signInusr.length-1].passwd;
// console.log(correctpw);
var correctmail = signInusr[signInusr.length-1].emailAd;
document.querySelector("#emailappend").append(correctmail);

document.querySelector("form").addEventListener("submit", logIn);
function logIn (event){
    event.preventDefault();
    var password = document.querySelector("#passWd").value;
// console.log("correctpw:",correctpw);
// console.log("inputpw:",password);

    if(correctpw==password){
        alert("login Sucessful");
        window.location.href = "index.html";
    }
    else {
        alert("wrong password");
    }
}

function showpass(){
        var input = document.querySelector("#passWd");
        var show = document.querySelector("#showpwd");
        var hide = document.querySelector("#hidepwd");

        if(input.type === 'correctpw'){
            input.type = "text";
            show.style.display = "none";
            hide.style.display = "inline";

        }
        else{
            
            input.type = "correctpw";
            show.style.display = "inline";
            hide.style.display = "none";
        }

    }