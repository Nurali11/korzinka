const api = axios.create({
    baseURL: 'https://679a1360747b09cdcccd9307.mockapi.io/'
});

let root = document.querySelector(".body")


function func(){
    let ids = JSON.parse(localStorage.getItem("korzinka")) || []
    let arr = Object.values(ids)
    console.log(arr);

    for(i of arr){

        api.get(`/uzum/${i}`).then((d) => {
            let a = d.data

            root.insertAdjacentHTML("beforeend", `
                <div class="element" a-id="${a.id}">
                    <h1>${a.name}</h1>
                    <h1>${a.color}</h1>
                    <h1>${a.price}$</h1>
                    <img src="${a.image}">
                    <div class="btns">
                        <button onClick="deleteItem(${a.id})" id="delet">delete</button>
                    </div>
                </div>`
            )
        }
        )
    }


}
function deleteItem(id){
    let arr = JSON.parse(localStorage.getItem("korzinka"))
    let arr2 = arr.filter((i) => i != id)
    localStorage.setItem("korzinka" ,JSON.stringify(arr2))
    location.reload()
    
}

func()