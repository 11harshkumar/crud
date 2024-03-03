const API_Update = "http://localhost:3003/server"

let editform = document.getElementById('edit_form');
editform.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log("Hello")
    async function update_data() {
     const params = new URLSearchParams(window.location.search);
        let id = params.get('id')
             let pid = document.getElementById('edit_p_id').value;
     let pname = document.getElementById('edit_p_name').value;
     let pprice = document.getElementById('edit_p_price').value;
     let pquantity = document.getElementById('edit_p_quantity').value
     let purl = document.getElementById('edit_p_url').value;
     let update_data = {
         p_id: pid,
         p_name: pname,
         p_price: pprice,
         p_quantity: pquantity,
         p_url:purl
     }
     if (pid != "" && pname != "" && pprice != "" && pquantity != "" && purl != "") {
         update_product_data(id, update_data);
     }
     else {
         alert("Enter the Product details...")
     }
    }
update_data();

})

    async function update_product_data(id, update_data) {
    try {
        const res = await fetch(`${API_Update}/${id}`, {
            method: "PUT",
            body: JSON.stringify(update_data),
            headers: {
                Accept: "application/json",
                "Content-Type":"application/json"
            }
            })
        const data = await res.json();
        window.location.href='./index.html'
    }
    catch (err) {
        console.log(err)
    }

}
 
//  async function update_data() {
//      const params = new URLSearchParams(window.location.search);
//      let id = params.get('id')

    // const res = await fetch(`${API_Update}/${id}`)
    // const data =await res.json();

    //  document.getElementById('edit_p_id').value=data.p_id
    //  document.getElementById('edit_p_name').value=data.p_name
    //  document.getElementById('edit_p_price').value=data.p_price
    //  document.getElementById('edit_p_quantity').value=data.p_quantity
    //  document.getElementById('edit_p_url').value = data.p_url
     
//      let pid = document.getElementById('edit_p_id').value;
//      let pname = document.getElementById('edit_p_name').value;
//      let pprice = document.getElementById('edit_p_price').value;
//      let pquantity = document.getElementById('edit_p_quantity').value
//      let purl = document.getElementById('edit_p_url').value;
//      let update_data = {
//          p_id: pid,
//          p_name: pname,
//          p_price: pprice,
//          p_quantity: pquantity,
//          p_url:purl
//      }
//      if (pid != "" && pname != "" && pprice != "" && pquantity != "" && purl != "") {
//          update_product_data(id, update_data);
//      }
//      else {
//          alert("Enter the Product details...")
//      }
//     }
// update_data();