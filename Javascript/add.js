const API = "http://localhost:3003/server";
async function setData(data) {
    try {
       let res = fetch(API, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
       })
        window.location.href="./index.html"
    }
    catch (err) {
        console.log(err)
    }    
}

let add_form = document.getElementById('add_form')
add_form.addEventListener('submit', (event) => {
    event.preventDefault();
    let p_id = document.getElementById('p_id').value;
    let p_name = document.getElementById('p_name').value;
    let p_quantity = document.getElementById('p_quantity').value;
    let p_price = document.getElementById('p_price').value;
    let p_url = document.getElementById('p_url').value;
    let data = { p_id, p_name, p_price, p_quantity, p_url };
    if (p_id != "" && p_name != "" && p_quantity != "" && p_price != "" && p_url != "") {
        setData(data);
    }
    else {
        alert("Please enter the missing data");
    }
    
})



// async function setResponse(){
//     let res = await fetch(API, {
//         // method: "POST",
//         // headers: { 'Content-Type': 'application/json' },
//         // body:JSON.stringify(sdata)
//     });
//     let data = res.json();
//     console.log(data);
// }
// setResponse();