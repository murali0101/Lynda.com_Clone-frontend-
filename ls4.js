document.querySelector("form").addEventListener("submit", fn4);
var s4 = JSON.parse(localStorage.getItem("DB4")) || [];
var s3 = JSON.parse(localStorage.getItem("DB3"));
var mail = s3[s3.length-1].Mail;
var passwd = s3[s3.length-1].Password;
var Fname = s3[s3.length-1].FirstName;
var Lname = s3[s3.length-1].LastName;
var Cname = s3[s3.length-1].Country;
var Cname2 = s3[s3.length-1].City;
function fn4 (event){
    event.preventDefault();
    var var1 = document.querySelector("#jobtitle").value;
    var obj4 = {
        Mail : mail,
        Password : passwd,
        FirstName : Fname,
        LastName : Lname,
        Country : Cname,
        City : Cname2,
        JobTitle : var1,
    }
    s4.push(obj4);
    localStorage.setItem("DB4", JSON.stringify(s4));
    window.location.href = "ls5.html";
}
