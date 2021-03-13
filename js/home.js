// alert("rest");
window.addEventListener('load', function () {
    //get user name
    usertxtinput = document.getElementById("usertxtinput");
    userpassinput = document.getElementById("userpassinput");

    spantxt = document.getElementById("spantxt");
    spanpass = document.getElementById("spanpass");

    //onblur event
    usertxtinput.addEventListener('blur', function () {
        if (!isValidUserName()) {
            usertxtinput.focus();
            spantxt.style.display = 'block';
            usertxtinput.className = 'error';
        } else {
            usertxtinput.className = '';
            spantxt.style.display = 'none';

        }

    });//end of blur user text

    //pass blur
    userpassinput.addEventListener('blur', function () {
        if (!isValidPassword()){
            userpassinput.focus();
            userpassinput.select();
            spanpass.style.display = 'block';
            userpassinput.className = 'none';
        }
        else {
            userpassinput.className = '';
            spanpass.style.display = 'none';

        }


    });//end of pass blur

    //submit button
    document.forms[0].addEventListener('submit', function (e) {

            e.preventDefault();
        
        if (!isValidUserName()) {
            usertxtinput.focus();
            spantxt.style.display = 'block';
        }

        if (!isValidPassword()) {
            userpassinput.focus();
            spanpass.style.display = 'block';
        }
        
        if (usertxtinput.value == 'AdminBB') {

            window.open("../Index/admin.html", "_self");
        }
        else if (usertxtinput.value == 'SubBB') {
            window.open("../Index/supervisor.html", "_self");
        }
        else if (usertxtinput.value =='UserBB')
        {
            window.open("../Index/users.html", "_self");
        }
    });

});//end of load event


function isValidUserName() {
    return usertxtinput.value.match(/^[A-Z][a-z]+["BB"]/);

}
function isValidPassword() {
    return userpassinput.value.match(/^[A-Za-z0-9]{4}/g);
}