const api_delete = "http://localhost:3003/server";

function delete_product_data(pid) {
    fetch(`${api_delete}/${pid}`, {
        method:"DELETE"
    }).then(res => res.json())    
}