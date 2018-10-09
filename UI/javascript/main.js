function validateEmail(email) {
    var re = /\S+@\S+/;
    return re.test(email);
}

   /*function to check email & password*/
function check(form)
{
    /*the following code checkes whether the entered email and password are matching*/
 if(form.email.value == "admin@gmail.com" && form.psw.value == "admin")
  {
    window.open('target.html')
    /*opens the target page while Id & password matches*/
  }else if(form.email.value == "user@gmail.com" && form.psw.value == "user")
  {
    window.open('diana.html')
  }
 else
 {
   alert("Error Password or Username")/*displays error message*/
  }
}