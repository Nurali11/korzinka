const api = axios.create({
    baseURL: 'https://679a1360747b09cdcccd9307.mockapi.io'
});

function show(arr){
    let root = document.querySelector('.products')
    arr.forEach(e => {
        root.insertAdjacentHTML('beforeend', `
            <div class="card">
                <h1>Name: ${e.name}</h1>
                <h3>Price: $${e.price}</h3>
                <h3>Color: ${e.color}</h3>
                <img src="${e.image}">
                <button class="delete" onclick="deletedata(${e.id})">❌ Delete</button>
                <button class="qoshish" onclick="add(${e.id}, this)">➕ Savatga solish</button>
            </div>`)
});   
}

api.get('/uzum').then((res) => show(res.data))

function deletedata(id){
    api.delete(`/uzum/${id}`).then(res => location.reload())
}

function add(id, button){
    let arr = JSON.parse(localStorage.getItem('korzinka')) || []

    if(Array.isArray(arr) && !arr.includes(id)){
        arr.push(id)
        localStorage.setItem('korzinka', JSON.stringify(arr))
        button.classList.add('qoshildi')
        button.classList.remove('qoshish')
    }else if(arr.includes(id)){
        arr.splice(arr.indexOf(id), 1)
        localStorage.setItem('korzinka', JSON.stringify(arr))
        button.classList.remove('qoshildi')
        button.classList.add('qoshish')
    }
    console.log(arr);
}