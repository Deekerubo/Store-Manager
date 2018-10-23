function validateEmail(email) {
    var re = /\S+@\S+/;
    return re.test(email);
}

function check(form)/*function to check userid & password*/
    {
     var modal = document.getElementById('id1');
     var modal2 = document.getElementById('id2');
     var modal3 = document.getElementById('id3');
     /*the following code checkes whether the entered userid and password are matching*/
     if(form.email.value == "admin@gmail.com" && form.psw.value == "admin")
      {
        modal2.style.display = "none";
        modal3.style.display = "block";
       document.getElementById("id3").innerHTML='<object type="text/html" style="width:100%;height:640px" data="admin_dashboard.html" ></object>';
      }else if(form.email.value == "user@gmail.com" && form.psw.value == "user")
      {
      modal.style.display = "block";
      modal2.style.display = "none";

     document.getElementById("id1").innerHTML='<object type="text/html" style="width:100%;height:640px" data="user_dashboard.html" ></object>';
      }
     else
     {
       alert("Error Password or Username")/*displays error message*/
      }
    }