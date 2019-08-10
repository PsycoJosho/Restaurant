/*
function clearErrors() {
    for (var loopCounter = 0;
        loopCounter < document.forms["info"].elements.length;
        loopCounter++) {
        if (document.forms["info"].elements[loopCounter]
           .parentElement.className.indexOf("has-") != -1) {

            document.forms["info"].elements[loopCounter]
               .parentElement.className = "form-group";
        }
    }
}
*/

function validateForm() {
    //clearErrors();
    var name = document.forms["info"]["name"].value;
    var email = document.forms["info"]["email"].value;
    var phone = document.forms["info"]["phone"].value;

    if (name == "") {
        alert("Name must be filled out");
        return false;
    }

    if (email == "") {
        alert("Email must be filled out");
        return false;
    }

    if (phone == "") {
        alert("Phone must be filled out");
        return false;
    }

    return false;
}
