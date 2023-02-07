const { addCustomer, deleteCustomer, getAllCustomer, getCustomerById, updateCustomerStatus, getCustomerByName } = require('../api/user_M')


//1--------------------------------------------------------------------------
// test('get customer list ?', async () => {
//     expect(await getAllCustomer()).not.toBeNull()
//     //print out all data
//     console.log('customer data: ');
//     console.log(await getAllCustomer());
// })




//2--------------------------------------------------------------------------
// const userId = 2
// test('get customer with id that exist ?', async () => {
//     expect(await getCustomerById(userId)).not.toBeNull()

//     // print out data if exist
//     console.log('customer data: ');
//     console.log(await getCustomerById(userId));
// })


//3--------------------------------------------------------------------------
// const userId_thatdontexist = 99
// test('get customer with id that dont exist ?', async () => {
//     expect(await getCustomerById(userId_thatdontexist)).not.toBeNull()

//     // print out data if exist
//     console.log('customer data: ');
//     console.log(await getCustomerById(userId_thatdontexist));
// })


//4--------------------------------------------------------------------------
// const userId = 2, status = "banned"
// test('update customer status with id 2 to "banned" ', async () => {
//     expect(await updateCustomerStatus(userId, status)).toContainEqual({
//         userId: 2,
//         username: 'test1',
//         email: 'test1@gmail.com',
//         password: '123456',
//         status: 'banned'
//     })

//     // restore data
//     console.log(await updateCustomerStatus(userId, "unban"));
// })


//4--------------------------------------------------------------------------
// const newUserData = {
//     username: 'monkey',
//     email: 'monkey@gmail.com',
//     password: '123456',
//     status: 'banned'
// }

// test(`Add new user with newUserData ??`, async () => {
//     expect(await addCustomer(newUserData)).not.toBeNull()

//     console.log(await getCustomerByName(newUserData.username));
// })

//5--------------------------------------------------------------------------
// const userId = 4
// test(`delete customer with id ${userId} ??`, async () => {
//     expect(await deleteCustomer(userId)).not.toBeNull()

//     expect(await getCustomerById(userId)).toEqual([])


//     //restore
//     console.log(await addCustomer({
//         username: 'gumble',
//         email: 'gumble@gmail.com',
//         password: '123456',
//         status: 'unban'
//     }));
// })