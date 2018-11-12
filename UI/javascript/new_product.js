token = localStorage.getItem('token')
const FetchProduct = () => {
    document.getElementById('products').addEventListener('submit', (e) => {
        e.preventDefault();
    const name = document.getElementById('name').value;
    const description = document.getElementById('description').value;
    const price = document.getElementById('price').value;
    const quantity = document.getElementById('quantity').value;
    const category = document.getElementById('category').value;
    const url = 'https://storemanger2-api.herokuapp.com/api/v2/';

    fetch(url + 'products', {
        method:'POST',
        headers: {
            'Accept': 'application/json',
            'Content-type':'application/json',
            'Authorization':'Bearer '+token
        },
        body:JSON.stringify({product_name:name, product_description:description, price:Number(price), quantity:Number(quantity), category:category})
    }).then( resp => resp.json(). then( data => { console.log(data)
        if (data.message === 'sucess!')

        {
            document.getElementById('success').innerHTML = "Product created!";
        }
        else if (data.message === 'product item already exists!')
        {
            document.getElementById('errors').innerHTML = data.message;
        }
        else if (data.msg == "Token has expired"){
            document.getElementById('errors').innerHTML = "please login again to add products";
        }
    }))
    
})
}