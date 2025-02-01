const api = axios.create({
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