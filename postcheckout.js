var uN  = JSON.parse(localStorage.getItem("logindata"));
var Fname = uN.user.firstName;
var Lname = uN.user.lastName;

document.querySelector("#FN").value = Fname;
document.querySelector("#FN1").append(Fname);
document.querySelector("#LN").value =  Lname;

function monthly (){
    document.querySelector("#fl").textContent = "";
    document.querySelector("#fr").textContent = ""; 
    document.querySelector("#fr2").textContent = ""; 
    document.querySelector("#fl").append("Monthly after free trial");
    document.querySelector("#fr").append("₹1,610.17");
}
function annual(){
    document.querySelector("#fl").textContent = "";
    document.querySelector("#fr").textContent = "";
    document.querySelector("#fr2").textContent = "";
    document.querySelector("#fl").append("Total after free trial (₹1,016.95 x 12 months)");
    document.querySelector("#fr").append("₹12,203.39");
    document.querySelector("#fr2").append("*₹7,118.65 saving when you buy annual");
}



function signOut (){
    localStorage.removeItem("logindata");
    localStorage.removeItem("signInDataBase");
    alert("you are logging out!!!");
    window.location.href = "index.html";
}