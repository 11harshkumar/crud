const API_Update = "http://localhost:3003/server"

async function get_data(id) {
    try {
            const res = await fetch(`${API_Update}/${id}`)
            const data = await res.json();
            console.log(data)
            document.getElementById(p_id).value= data.p_id;
            document.getElementById(p_name).value = data.p_name;
            document.getElementById(p_price).value = data.p_price;
            document.getElementById(p_quantity).value = data.p_quantity;
            document.getElementById(p_url).value = data.p_url;
    }
    catch (err) {
        console.log(err)
    }

}
 
 function update_product_data(pid) {
    
    window.location.href = `./editData.html?id=${pid}`;
    const res =  fetch(`${API_Update}/${pid}`)
    const data = res.json();
    console.log(data)
    // get_data(pid);

    

}
