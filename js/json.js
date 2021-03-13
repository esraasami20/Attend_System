//import index from "../Scripts/esm/popper-utils";

let data;
let _url = '../json/json.json';
function ajx() {
    fetch(_url).then(_arr => {
        return _arr.json()
    })
        .then(_arr => {
            var table = document.getElementById("_tbl");
            var _tr1 = "<tr> <th>ID</th> <th>firstNane</th> <th>Age</th> <th>City</tth> <th>dgree</th> <th>Track</th> </tr>";
            table.innerHTML += _tr1;
            for (var i = 0; i < _arr.length; i++) {
                console.log(_arr[i]);

                var _tr = "<tr><td>" + _arr[i].ID + "</td> <td>" + _arr[i].username + "</td> <td>" + _arr[i].password + "</td> <td>" + _arr[i].type + "</td> <td>" + _arr[i].dgree + "</td> <td>" + _arr[i].track + "</td> </tr>";
                table.innerHTML += _tr;
            }


        })
}

//function searchByID() {
//    do {
//        x = prompt("Enter ID", "EX: 1");
//    } while (!x.match(/^[0-9]+$/));

//    index = data.findIndex((objData) => {
//        return x == objData.ID;
//    })
//    //index = data.prototype.find((objData) => {
//    //    return x == objData.ID;
//    //})

//    if (index != -1) {
//        alert("Founded: ");
//        $('#myTable').empty();
//        var row = '<tr><td>' + data[index].ID + '</td><td>' + data[index].username + '</td><td>' + data[index].password + '</td><td>' + data[index].type + '</td><td>' + data[index].salary + ' $</td></tr>';
//        $('#myTable').append(row);
//    } else {
//        $('#myTable').empty();
//        var row = "<tr><td>No Data Founded, There is no employee have that id. </td></tr>"
//    }
//}

//var nnnnnn=document.getElementById('login-form');
//    nnnnnn.addEventListener('submit', function (e) {
//    // prevent default browser behavior
//    e.preventDefault();

//    // find the username and password nodes
//    var username_element = e.srcElement.elements.username;
//    var password_element = e.srcElement.elements.password;

//    // check whether these elements return right stuff
//    if (username_element && password_element) {
//        // get the values of username and password
//        username = username_element.value;
//        password = password_element.value;

//        // execute the 'login' function with the username and password filled in on the client
//        var user = login(username, password);

//        // check whether the login was successful
//        if (user !== false) {
//            // reset the username input field
//            username_element.value = '';

//            // reset the password input field
//            password_element.value = '';

//            if (user.type == 'user') {

//                window.open("Index/users.html", "_self");
//            }
//            else if (user.type == 'admin') {
//                window.open("Index/admin.html", "_self");

//            } else if (user.type == 'supplier') {
//                window.open("Index/supervisor.html", "_self");
//            }

//            // alert the client that login was successful 
//            //مكان الاليرفانكشن if+if else
//            /*if (username==user1&& username!=admin1&& username!=suplyer){
//             window.opener("url of employee.html")
//             }
//             else if(username!=user1&& username==admin1&& username!=suplyer){
//             window.opener("url of admin)
//             }
//             else if(username!=user1&& username!=admin1&& username==suplyer){
//             window.opener("url of suplyer)
//             }*/
//            //alert('Logged in as ' + user.username + '.');
//        } else {
//            // reset the password input field
//            password_element.value = '';

//            // alert the client that login was not successful
//            alert('Invalid username and/or password.');
//        }
//    }
//});