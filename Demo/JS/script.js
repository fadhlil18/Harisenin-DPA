// document.write("Hari Kamis"); document.write("Hari Jumat")
// // alert('Hello World')
// // console.log('Hello World Console Log')

// // const nama ="Fadhli Azhim Firmansayh" //const, let, var
// // //const == tidak bisa dirubah
// // document.write(nama)
// // var buah ="Apel"
// // var buah ="Mengkudu"
// // // alert("Cek Var Let : " + buah)

// // console.log('Cek Var : ' +iniVar)
// // console.log('Cek Let : ' +iniLet)
// // var iniVar ='testing'
// // let iniLet ='testing'

// //Penulisan kata lebih dari 1 suku kata
// let nama_depan ='Fadhlil' //snakecase
// let namaDepan ='Fadhlil' //camelcase
// let namaDepanSaya ='Fadhlil'
// const TOKEN = "1234" // Penulisan konstanta biasanya besar semua

// console.log(namaDepanSaya)

// const dataSiswa = () => {

// }

// function dataSiswaBaru (callback) {

// }

// //string
// let name = "Bayu"
// //number
// let price = 10000
// let score = 90.5
// //undifined
// let firstName
// //null
// let vegetable = null
// //boolean
// let isAdmin = true
// //object
// let handphone ={
//     //key : value
//     color:'Black',
//     size:'6inch',
// }
// //array
// let column = [1,2,3,4,5]
// let users = ["apple","orange","king fruit"]
// console.log(typeof users)


//string converstation
let isAdmin = true
let age = 80
let convAge = String(age)
console.log(typeof isAdmin,"ini console isAdmin = True")
let convIsAdmin = String(isAdmin)

//NUMBER CONVERSATION
let firstNum ="10"
let secondNum ="2"
let thirdNum ="21A"
let conFirstNum = Number(firstNum)
let conSecondNum  = Number(secondNum)
let conThirdNum  = Number(thirdNum)

let result = conFirstNum / conSecondNum
let secondResult = firstNum + secondNum //terjadi Ambigu pada operator Plus
console.log (secondResult)

//OPERATOR
let angka1 = 20
let angka2 = 6

//1 Operator Aritmatika
let hasilPenjumlahan = angka1 + angka2
let hasilPengurangan = angka1 - angka2
let hasilPerkalian = angka1 * angka2
let hasilPembagian = angka1 / angka2
let hasilSisaBagi = angka1 % angka2

console.log(hasilPenjumlahan, 'Penjumlahan')
console.log(hasilPengurangan, 'Pengurangan')
console.log(hasilPerkalian, 'Perkalian')
console.log(hasilPembagian, 'Pembagian')
console.log(hasilSisaBagi, 'Sisa Bagi')

//2 Operator Perbandigan
//lebih besar
console.log (angka1>=angka2)
//lebih kecil
console.log(angka1<=angka2)

let huruf1 = "1000"
let huruf2 = 1000

console.log(huruf1 == huruf2) //true value
console.log(huruf1===huruf2) //false tipe data

//operator logika
let usernameDb = "admin"
let passwordDb = "admin123"
console.log (usernameDb == "admin" && passwordDb == "admin123" , "and Logic")
console.log (usernameDb == "admin" || passwordDb == "admin1234" , "or Logic")
let resultDb = usernameDb == "admin" ? "Anda Berhasil Login" : "Username tidak sesuai"
console.log(resultDb)

console.log()