document.querySelector("form").addEventListener("submit", signIn)
var regUsrs = JSON.parse(localStorage.getItem("DB1")) || [];
var signInStack = [];
// console.log(regUsrs);
function signIn (event){
    event.preventDefault();
    var email = document.querySelector("#emailsi").value;
    // console.log(email);
    var count = 0;
    
    for(var i=0; i < regUsrs.length; i++)
    {
        if(email==regUsrs[i].emailAdd)
        {
            count++;
            var logindata = {
                emailAd: email,
                passwd: regUsrs[i].passwd,
            };
            signInStack.push(logindata);
            localStorage.setItem("signInDataBase", JSON.stringify(signInStack));
            // alert("email is correct")
            window.location.href = "login.html"
            break;
        }
        
    }
    if(count==0)
    {
        alert("Your email is not registered");
        window.location.href = "signIn.html";
    }
    
}

function library(){
    alert("You don't have any Library Card registered")
}



