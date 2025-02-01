const api = axios.create({
    baseURL: 'https://679a1360747b09cdcccd9307.mockapi.io'
});
let iname = document.querySelector("#name")
let icolor = document.querySelector("#color")
let iprice = document.querySelector("#price")
let iimage = document.querySelector("#image")

let create_btn = document.querySelector("#add_btn")
create_btn.addEventListener("click", createItem)

function createItem() {
    if(iname.value != ""){
        const newItem = {
            name: iname.value,
            color: icolor.value,
            price: iprice.value,
            image: iimage.value
        };
    
        api.post("/uzum", newItem)
            .then(response => {
                let e = response.data;
                    iname.value = ""
                    icolor.value = ""
                    iprice.value = ""
                    iimage.value = "" 
                    alert("Malumotlar muvaffaqiyatli yuklandi")
                    
                       })
                    }else{
                        alert("malumotlarni toliq toldiring va qayta urining")
                    }            
}