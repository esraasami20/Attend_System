

var monRep = document.getElementById("monRep");
var dayRep = document.getElementById("dayRep");


function addMonRep() {
    monRep.style.visibility = "visible";
    dayRep.style.visibility = "hidden";

    dayRep.style.height = 0;
}
function addDayRep() {
    monRep.style.visibility = "hiddeb";
    dayRep.style.visibility = "visible";

    monRep.style.height = 0;
    
}