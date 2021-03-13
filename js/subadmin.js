var employee = document.getElementById("employee");
var monRep = document.getElementById("monRep");
var dayRep = document.getElementById("dayRep");
var attRep = document.getElementById("attRep");

function addEmp() {
    employee.style.visibility = "visible";
    monRep.style.visibility = "hidden";
    dayRep.style.visibility = "hidden";
    attRep.style.visibility = "hidden"

    monRep.style.height = 0;
    dayRep.style.height = 0;
    attRep.style.height = 0;
}

function addMonRep() {
    employee.style.visibility = "hidden";
    monRep.style.visibility = "visible";
    dayRep.style.visibility = "hidden";
    attRep.style.visibility = "hidden"

    employee.style.height = 0;
    dayRep.style.height = 0;
    attRep.style.height = 0;

}
function addDayRep() {
    employee.style.visibility = "hidden";
    monRep.style.visibility = "hidden";
    dayRep.style.visibility = "visible";
    attRep.style.visibility = "hidden";

    monRep.style.height = 0;
    employee.style.height = 0;
    attRep.style.height = 0;

}
function addAttRep() {
    employee.style.visibility = "hidden";
    monRep.style.visibility = "hidden";
    attRep.style.visibility = "visible";
    dayRep.style.visibility = "hidden";

    monRep.style.height = 0;
    employee.style.height = 0;
    dayRep.style.height = 0;
}