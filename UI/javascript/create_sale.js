const CreateSale = () => {
    document.getElementById('sale').addEventListener('submit', (e) => {
        e.preventDefault();
    const sales_items = document.getElementById('sales_items').value;
    const quantity = document.getElementById('quantity').value;
    const price = document.getElementById('price').value;
    const url = 'https://storemanger2-api.herokuapp.com/api/v2/';

    fetch(url + 'sale', {
        method:'POST',
        headers: {
            'Accept': 'application/json',
            'Content-type':'application/json'
        },
        body:JSON.stringify({sales_items:sales_items, quantity:quantity, price:price})
    }).then( resp => resp.json(). then( data => { console.log(data)
        if (data.message === 'Password should be atleast 6 characters')
        {
            document.getElementById('errors').innerHTML = data.message;
        }
        else if (data.message === "Sale Created"){
            document.getElementById('success').innerHTML = data.message;
        }
    }))
    
})
}