'use strict';

/*Pop-Up-Feld*/
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}


/*aktuelles Datum*/
window.addEventListener("load", date);
document.getElementById("date").addEventListener("input", test);
function date(){
var date = new Date();
var day = date.getDate();
var month = date.getMonth();
month = month + 1;
if (month < 10)
{
    month = "0" + month;
}
var year = date.getFullYear();
var date1 = year + "-" + month + "-" + day;
document.getElementById("date").value = date1;
}
function test() {
    document.getElementById("test").innerText = "Funktionalität ist gegeben";
}

