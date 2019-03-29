
   // var sess = document.getElementById("nameText").value;
    //localStorage.setItem("storageName",getInput);
    sessionStorage.SessionName="SessionData";
    sessionStorage.getItem("SessionName");
    sessionStorage.setItem("SessionName","SessionData");

function clear(){
    document.getElementById("nameText").value=' ';
    document.getElementById("passText").value=' ';
}

function validate(){
    if(document.getElementById("nameText").value === 'admin' ){
        if(document.getElementById("passText").value === 'qwerty' ){
            window.location.href="homePage.html";
        }
    }else{
        alert("Invalid username or password");
        clear();
    }
}