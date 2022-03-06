function success() {
    if((document.getElementById("email").value===null) || (document.getElementById("tel").value===null) || (document.getElementById("password").value===null) || (document.getElementById("password2").value===null)) { 
           document.getElementById('signup').disabled = true; 
       } else { 
           document.getElementById('signup').disabled = false;
       }
}