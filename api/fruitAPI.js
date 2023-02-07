// let fruitList = []

async function loadFruit(){
    fruitList = (await fetch('http://localhost:5000/fruitList', { method: "GET" })).json()
    console.log('Load fruitList data: ');
    // console.log(await fruitList);
}
// loadFruit()
// (status === 1 ? "available" : "un-available")

async function addFruit(name, price, status){
    const res = await fetch('http://localhost:5000/fruitList', 
    { 
        method: "POST", 
        headers: { 'Content-type': 'application/json'},
        body: JSON.stringify({name: name, price: price, status: status})
    })
    return res.json()
}

async function deleteFruit(id){
    const res = await fetch(`http://localhost:5000/fruitList/${id}`, 
    { 
        method: "DELETE", 
    })

    // if(res.status === 200){
    //     // fruitList = fruitList.filter(fruit => fruit.id !== id)
    //     console.log(`Delete fruit id ${id} Successful !!`);
    // }else{
    //     console.log(`ERROR: can not delet fruit id: ${id}`);
    // }

    // fruitList = fruitList.filter(f => f.id !== id)
}

async function getFruit(id){
    const res = await fetch(`http://localhost:5000/fruitList/${id}`, 
    { 
        method: "GET", 
    })

    return res.status === 200 ? res.json() : null
}



async function updateFruit(id, data){
    let fruit = await getFruit(id)
    const res = await fetch(`http://localhost:5000/fruitList/${id}`, {
        method: 'PUT',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({...fruit, name: data.name ? data.name : fruit.name, 
                                    price: data.price ? data.price : fruit.price, 
                                    status: data.status ? data.status : fruit.status})
    })

    // fruitList.filter(f => f.id == id).map(each => {
    //     each.name = data.name
    //     each.price = data.price
    //     each.status = data.staus
    // })
    return res.status === 200 ? res.json() : null
}
// async function f(){
//     console.log(await updateFruit(5, {name: 'strawbery',price: "2.1", status: "un-available"}));
// }

// f()

async function isExist(id){
    return getFruit(id) ? true : false
}


module.exports = { addFruit, deleteFruit, getFruit, updateFruit, isExist }