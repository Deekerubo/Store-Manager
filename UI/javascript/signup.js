const SignupUser = () => {
    document.getElementById('signup').addEventListener('submit', (e) => {
        e.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const url = 'https://storemanger2-api.herokuapp.com/api/v2/';

    fetch(url + 'signup', {
        method:'POST',
        headers: {
            'Accept': 'application/json',
            'Content-type':'application/json'
        },
        body:JSON.stringify({username:username, email:email, password:password})
    }).then( resp => resp.json(). then( data => { console.log(data)
        if (data.message === 'email already exist')

        {
            document.getElementById('errors').innerHTML = data.message;
        }
        if (data.message === 'Password should be atleast 6 characters')
        {
            document.getElementById('errors').innerHTML = data.message;
        }
        else if (data.message === "Store attendant was created succesfully"){
            document.getElementById('success').innerHTML = data.message;
        }
    }))
    
})
}