const api = axios.create({
    baseURL: 'https://679a13aa747b09cdcccd946d.mockapi.io/products/'
});
let root = document.querySelector()
function show() {
    api.get("/uzum").then((a) =>  {
        console.log(a.data);
        })
}

function addProduct(){
    api.post
}
function createItem() {
    const newItem = {
        name: iname.value,
        color: icolor.value,
        price: iprice.value,
        image: iimage.value
    };

    api.post("/uzum", newItem)
        .then(response => {
            let e = response.data;
            root.insertAdjacentHTML("beforeend", `
                <div class="element" data-id="${e.id}">
                    <h1>${e.title}</h1>
                    <p>${e.category}</p>
                    <p>${e.price}$</p>
                    <img src="${e.image}" ">
                    <div class="btns">
                        <button onClick="deleteItem(${e.id})" id="delet">delete</button>
                        <button onClick="basket(${e.id})" id="karzina"><i class="fa-solid fa-cart-shopping"></i></button>
                    </div>
                </div>`);
                iname.value = ""
                irang.value = ""
                inarx.value = ""
                irasm.value = "" 
                   })
}



show()