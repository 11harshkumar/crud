const API_GET = "http://localhost:3003/server";



async function get_data() {
    try {
        let res = await fetch(API_GET);
        let data = await res.json();
        let str = "";
        data.forEach(element => {
            str += `<div class="box_data" style="padding:25px;margin:15px;background-color:rgb(209, 255, 255)">
            <img width="200px" height="150px" src=${element.p_url} alt=${element.p_name}/>
            <h1>${element.p_name}</h1>
            <h2>Product ID: ${element.p_id}</h2>
            <h3>Product Quantity:${element.p_quantity}</h3>
            <h3>Product Price:${element.p_price}</h3>
            <button style="background-color:red; border-style:none" class="btn" onClick="delete_product_data('${element.id}')">Delete Product</button>
            <button onClick="update_product_data('${element.id}')" style="background-color:blue;border-style:none" class="btn">Update Product</button>
            </div>`;
        });
            let read = document.getElementById('read_data');
            read.innerHTML = str;
    }
    catch (error) {
        console.log(error)
    }
}
get_data();
// Update data
