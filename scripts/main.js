//Get DOM Element
var fname = document.getElementById("fname");
var lname = document.getElementById("lname");
var phone = document.getElementById("phone");
var addr = document.getElementById("address");
var form = document.getElementById("form");
var male = document.getElementById("male");
var female = document.getElementById("female");

var tb = document.getElementById("tb");

//Avoide deletion of local storage when refresh the page 
if (localStorage.getItem("information") == null) {
    localStorage.setItem("information", "[]");
}

//When nothing in the table, dont show table on webpage
if (JSON.parse(localStorage.getItem("information")).length != 0) {
    fillTable(localStorage.getItem("information"));
}
//Function call when click submit button
function setAndShowData() {
    //Everytime click submit button, warning should be hidden
    warningReset();
    //Get value of input
    var fn = fname.value;
    var ln = lname.value;
    var ph = phone.value;
    var ad = addr.value;
    var ge = document.querySelector('input[name="gender"]:checked');
    //Check whether empty input, if so show warning and do nothing
    if (checkContent(fn, ln, ph, ad, ge)) {
        var person = new Object();
        person.fname = fn;
        person.lname = ln;
        person.phone = ph;
        person.address = ad;
        person.gender = ge.value;
        //Get content from local storage and push the person into it
        var personArr = JSON.parse(localStorage.getItem("information"));
        personArr.push(person);
        localStorage.setItem("information", JSON.stringify(personArr));
        //fill table with local storage content
        fillTable(localStorage.getItem("information"));
        //Reset form after a vaild input
        form.reset();
    }

}
//Check empty input
function checkContent(fn, ln, ph, ad, ge) {
    if (fn == "" || ln == "" || ph == "" || addr == "" || ge == null) {
        if (fn == "") {
            fname.insertAdjacentHTML('afterend', '<span id="warning1" style="color:red;">First Name cannot be empty</span>')

        }
        if (ln == "") {
            lname.insertAdjacentHTML('afterend', '<span id="warning2" style="color:red;">Last Name cannot be empty</span>');

        }
        if (ph == "") {
           phone.insertAdjacentHTML('afterend', '<span id="warning3" style="color:red;">Phone cannot be empty</span>');

        }
        if (ad == "") {
            addr.insertAdjacentHTML('afterend', '<span id="warning4" style="color:red;">Address cannot be empty</span>');

        }
        if (ge == null) {
            female.insertAdjacentHTML("afterend", '<span id="warning5" style="color:red;">Gender cannot be empty</span>');
        }
        return false;
    }

    return true;
}
//fill table
function fillTable(strArr) {
    tb.innerHTML = "";

    var arr = JSON.parse(strArr);
    var htm = "";
    htm += "<tr>";
    htm += "<th>" + "First Name" + "</th>";
    htm += "<th>" + "Last Name" + "</th>";
    htm += "<th>" + "Phone" + "</th>";
    htm += "<th>" + "Address" + "</th>";
    htm += "<th>" + "Gender" + "</th>";
    htm += "</tr>";

    for (var i = 0; i < arr.length; i++) {
        htm += "<tr>";
        htm += "<td>" + arr[i].fname + "</td>";
        htm += "<td>" + arr[i].lname + "</td>";
        htm += "<td>" + arr[i].phone + "</td>";
        htm += "<td>" + arr[i].address + "</td>";
        htm += "<td>" + arr[i].gender + "</td>";
        htm += "</tr>";
    }

    tb.insertAdjacentHTML("beforeend", htm);
}
//Hide warning
function warningReset() {
    var w1 = document.getElementById("warning1");
    var w2 = document.getElementById("warning2");
    var w3 = document.getElementById("warning3");
    var w4 = document.getElementById("warning4");
    var w5 = document.getElementById("warning5");
    if (w1 != null) {
        w1.remove();
    }
    if (w2 != null) {
        w2.remove();
    }
    if (w3 != null) {
        w3.remove();
    }
    if (w4 != null) {
        w4.remove();
    }
    if (w5 != null) {
        w5.remove();
    }

}
