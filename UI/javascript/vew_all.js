document.addEventListener('DOMContentLoaded', () => {
    const token = JSON.parse(localStorage.getItem('access_token'));
    const EntriesUrl = '/https://storemanger2-api.herokuapp.com/api/v2/products/';
    fetch(`${EntriesUrl}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "access_token": token
        }
    })

    .then((response)=>{
        response.json().then((data) => {
            let entries_view = document.getElementById('tbody');
            const entries = Object.values(data['Products'])
            if (entries.length == 0){
                entries_view.innerHTML = `<div><p>Your products will appear here</p></div>`;
            }
            else{
                let all_entries = `<tr><th>Entry</th><th>Date Created</th><th class="action" colspan="3">Actions</th></tr>`;
                entries.forEach((single) => {
                    all_entries +=
                    `<tr>
                    <td class="tdata">${single.title}</td>
                    <td class="tdata">${single.date_created}</td>
                    <td class="view tdata"><li><a href="/view/${single.id}"> View</a></li></td>
                    <td class="edit tdata"><li><a href="/modify/${single.id}"> Edit</a></li></td>
                    </tr>`;
                })
                entries_view.innerHTML = all_entries;
            }
        })})
            .catch(err => console.log(err));
});