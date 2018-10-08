function validateEmail(email) {
    var re = /\S+@\S+/;
    return re.test(email);
}