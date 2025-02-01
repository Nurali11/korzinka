const api = axios.create({
<<<<<<< HEAD
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
=======
    baseURL: 'https://679a1360747b09cdcccd9307.mockapi.io'
});

function showdata(){
    let idlar = JSON.parse(localStorage.getItem('korzinka'))
    console.log(idlar);
    
    api.get('/uzum').then((res) => show(res.data.filter((e) => idlar.includes(Number(e.id)))))
}

function show(arr){
    let root = document.querySelector('.korzinka')
    arr.forEach(e =>{
        root.insertAdjacentHTML('beforeend', `
            <div class="card">
                <h1>Name: ${e.name}</h1>
                <h3>Price: $${e.price}</h3>
                <h3>Color: ${e.color}</h3>
                <img src="${e.image}">
                <button class="delete" onclick="deletedata(${e.id}, this)">❌ Delete</button>
            </div>`)
});
}

showdata()


function deletedata(id, button){
    let arr = JSON.parse(localStorage.getItem('korzinka')) || []
    arr.splice(arr.indexOf(id), 1)
    localStorage.setItem('korzinka', JSON.stringify(arr))
    button.classList.remove('qoshildi')
    button.classList.add('qoshish')
    location.reload()
}
>>>>>>> 6ab85b565ec4f4ad9c165d918c6eed6b619299f1
