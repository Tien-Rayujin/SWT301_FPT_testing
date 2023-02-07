const {connection} = require('../database/Connection')

async function getAllCustomer(){
    let con = connection()
    const query = 'select * from Accounts'
    const data = con.then(pool => pool.request().query(query))
    return (await data).recordset
}

async function getCustomerById(userId){
    let con = connection()
    const query = `select * from Accounts where userId = '${userId}'`
    const data = con.then(pool => pool.request().query(query))
    return (await data).recordset
}

async function getCustomerByName(name){
    let con = connection()
    const query = `select * from Accounts where username = '${name}'`
    const data = con.then(pool => pool.request().query(query))
    return (await data).recordset
}

// async function updateCustomer(userId, userData){
//     let con = connection()
//     const query = `update Accounts set `${userData}` where userId = '${userId}'`
//     const data = con.then(pool => pool.request().query(query))
//     return (await data).recordset
// }

async function updateCustomerStatus(userId, status){
    let con = connection()
    const query = `update Accounts set status = '${status}' where userId = '${userId}'`
    const data = con.then(pool => pool.request().query(query))
    return (await getCustomerById(userId))
}

async function deleteCustomer(userId){
    let con = connection()
    const restore = await getCustomerById(userId)
    const query = `delete from Accounts where userId = '${userId}'`
    const data = con.then(pool => pool.request().query(query))
    return restore
}

async function addCustomer(bodyData){
    let con = connection()
    const query = `insert into Accounts(username, email, password, status) 
                values('${bodyData.username}', '${bodyData.email}', '${bodyData.password}', '${bodyData.status}')`
    const data = con.then(pool => pool.request().query(query))
    return (await getCustomerByName(bodyData.username))
}

async function f(){
    // console.log(await addCustomer({
    //     username: 'test4',
    //     email: 'test5@gmail.com',
    //     password: '123456',
    //     status: 'unban'
    // }));

    console.log(await deleteCustomer(10));

}
f()
module.exports = { 
    getAllCustomer, 
    //updateCustomer, 
    deleteCustomer, 
    updateCustomerStatus, 
    getCustomerById,
    getCustomerByName,
    addCustomer
}