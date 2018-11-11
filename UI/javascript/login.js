
const LoginUser = () => {
    document.getElementById('login').addEventListener('submit', (e) => {
        e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const url = 'https://storemanger2-api.herokuapp.com/api/v2/';

    fetch(url + 'login', {
        method:'POST',
        headers: {
            'Accept': 'application/json',
            'Content-type':'application/json'
        },
        body:JSON.stringify({email:email, password:password})
    }).then( resp => resp.json(). then( data => {
        if (data.message === 'invalid credentials')
        {
            document.getElementById('errors').innerHTML = data.message;
        }
        else
        window.location.assign("admin_dashboard.html")
    }))
    
})



}
