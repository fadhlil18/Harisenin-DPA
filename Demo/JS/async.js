//Asyncrounus & Synchrounous
//Synchrounous
// console.log("Baris - 1")
// console.log("Baris - 2")

//Asyncrounus
// setTimeout(()=>console.log("Baris - 1"),3000)
// setTimeout(()=>console.log("Baris - 2"),1000)
// setTimeout(()=>console.log("Baris - 3"),2000)

//login => token
// function login(username, password,Callback) {
//     let token = "x123456"
//     if (username) {
//         setTimeout(() => { Callback (token) }, 0)
//     }
// }
// //butuh token
// //get user =>datauser
// function getUser(token) {
//     let user = {
//         id: 123,
//         username: 'John Doe'
//     }
//     if (token) {
//         return user
//     }
// }
// //butuh iduser
// //get user Profile
// function getUserProfile(idUser) {
//     let picture = "image.com/img.jpg"
//     if (idUser) {
//         return picture
//     }
// }

// const token = login ("john,","123")
// const userData = getUser(token)
// const userProfile = getUserProfile(userData.id)
// console.log(userProfile)

// //Callback
// const token = login("john,", "123", function (res) {
//     let token = res
//     console.log(token)
// })

//promise (membuat promise, get promise)(pending, success, error)
//membuat
// function login (username){
//     console.log("get data token")
//     let token = "x123456"
//     if(username){
//         return new Promise ((success,error) => {
//             setTimeout(() => {
//                 console.log("token berhasil")
//             },0)
//         })
//     }
// }
// let token = login ("John Doe").then((res) => {
//     console.log(res,"token")
// }) //get promise

//3.async await
async function getUser(){
    let TOKEN = await login ("John Doe")
    console.log (TOKEN,'Token')
    let dataUser = await getDataUser(TOKEN)
    let dataProfile = await getImageUser(dataUser)
    console.log(dataProfile)
}