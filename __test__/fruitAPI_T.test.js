const { addFruit, deleteFruit, getFruit, updateFruit, isExist} = require('../api/fruitAPI')


//1--------------------------------------------------------------------------
test('get fruit with id 1', async () => {
    expect(await getFruit(1)).toEqual({
        name: "banana",
        price: 1.2,
        status: "available",
        id: 1
      })
})

/*
//2--------------------------------------------------------------------------
test('get fruit with id dont exist in database ?', async () => {
    expect(await getFruit(99)).toBeNull()
})


//3--------------------------------------------------------------------------
test('get fruit exist in database ?', async () => {
    expect(await getFruit(3)).not.toBeNull()
})


//4--------------------------------------------------------------------------
const newFruit = {
    name: "coconut",
    price: "1.1", 
    status: "available",
    id: 6
}

test('add new Fruit to database ?',async () => {
    expect(await addFruit(newFruit.name, newFruit.price, newFruit.status))
    .toEqual(
        newFruit
    )
    // restore data
    await deleteFruit(6)
})


//5--------------------------------------------------------------------------
const fruitUpdate = {
    name: "lemon",
    status: "available"
}
const fruitId = 2
test('update fruit id 2 change name, status ?', async () => {
    expect(await updateFruit(fruitId, fruitUpdate)).toEqual({
        name: "lemon",
        price: 1.6,
        status: "available",
        id: 2
    })
    // restore data
    await updateFruit(fruitId, {
        name: "water-melon",
        status: "un-available"
    })
})

*/