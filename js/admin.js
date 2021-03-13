var employee = document.getElementById("employee");
var lateRep = document.getElementById("lateRep");
var excRep = document.getElementById("excRep");
var empBrief = document.getElementById("empBrief");

function addEmp() {
    employee.style.visibility = "visible";
    lateRep.style.visibility = "hidden";
    excRep.style.visibility = "hidden";
    empBrief.style.visibility = "hidden";

    lateRep.style.height = 0;
    excRep.style.height = 0;
    empBrief.style.height = 0;
}
function addLateRep() {
    employee.style.visibility = "hidden";
    lateRep.style.visibility = "visible";
    excRep.style.visibility = "hidden";
    empBrief.style.visibility = "hidden";

    employee.style.height = 0;
    excRep.style.height = 0;
    empBrief.style.height = 0;
}
function addExcRep() {
    employee.style.visibility = "hidden";
    lateRep.style.visibility = "hidden";
    excRep.style.visibility = "visible";
    empBrief.style.visibility = "hidden";

    employee.style.height = 0;
    lateRep.style.height = 0;
    empBrief.style.height = 0;
}
function addEmpBri() {
    employee.style.visibility = "hidden";
    lateRep.style.visibility = "hidden";
    excRep.style.visibility = "hidden";
    empBrief.style.visibility = "visible";

    employee.style.height = 0;
    lateRep.style.height = 0;
    excRep.style.height = 0;
}

// var table = document.getElementById("emp");
// var _tr1 = "<tr border='1'> <th>Frist Name</th> <th>Last Name</th> <th>Address</th> <th>E-Mail</th> <th>Age</th></tr>";


// table.innerHTML = _tr1;
