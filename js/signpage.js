alert("test");

window.addEventListener('load', function () {

    fname = document.getElementById("fname");
    lname = document.getElementById("lname");
    ads = document.getElementById("ads");
    mail = document.getElementById("mail");
    age = document.getElementById("age");
    regist = document.getElementById("regist");

    spantxt = document.getElementById("spantxt");
    spanads = document.getElementById("spanads");
    spanmail = document.getElementById("spanmail");
    spanage = document.getElementById("spanage");
    var flag = 0;
    fname.addEventListener('blur', function () {
        if (!isValidFristName()) {
            fname.focus();
            fname.select();
            spantxt.style.display = 'block';
            fname.className = 'error';
            flag = 0;
        } else {
            fname.className = '';
            spantxt.style.display = 'none';
            flag = 1;
        }

    }); //end of fname blur

    lname.addEventListener('blur', function () {
        if (!isValidLastName()) {
            lname.focus();
            lname.select();
            spantxt.style.display = 'block';
            lname.className = 'error';
            flag = 0;
        } else {
            lname.className = '';
            spantxt.style.display = 'none';
            flag = 1;
        }
    }); //end of lname blur

    ads.addEventListener('blur', function () {
        if (!isValidAddress()) {
            ads.focus();
            ads.select();
            spanads.style.display = 'block';
            ads.className = 'error';
            flag = 0;
        } else {
            ads.className = '';
            spanads.style.display = 'none';
            flag = 1;
        }

    }); // end of blur for address


    mail.addEventListener('blur', function () {
        if (!isValidUserEmail()) {
            mail.focus();
            mail.select();
            spanmail.style.display = 'block';
            mail.className = 'error';
            flag = 0;
        } else {
            mail.className = '';
            spanmail.style.display = 'none';
            flag = 1;
        }

    }); // end of blur for user email
    age.addEventListener('blur', function () {
        if (!isValidAge()) {
            age.focus();
            age.select();
            spanage.style.display = 'block';
            age.className = 'error';
            flag = 0;
        } else {
            age.className = '';
            spanage.style.display = 'none';
            flag = 1;
        }

    });
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

       
        if (flag == 1) {

            localStorage.setItem("UserFristName", fname.value);
            localStorage.setItem("UserLastName", lname.value);
            localStorage.setItem("UserAddress", ads.value);
            localStorage.setItem("UserMail", mail.value);
            localStorage.setItem("UserAge", age.value);
        }
    })

}); //end of load

function isValidFristName() {
    return fname.value.match(/^[A-Za-z]{3,15}$/);

}

function isValidLastName() {
    return lname.value.match(/^[A-Za-z]{3,15}$/);

}

function isValidUserEmail() {
    return mail.value.match(/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/);

}

function isValidAddress() {
    return ads.value.match(/^[A-Za-z]{2,30}$/);
}

function isValidAge() {
    return age.value.match(/^2[4-9]|3[0-9]|4[0-9]|5[00]$/);
}