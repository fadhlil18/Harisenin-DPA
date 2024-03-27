//date
const dateNow = new Date();

console.log(dateNow);

//create
//timestamp
const dateTimestamp = new Date (1600525320000) //untuksimpandatabase dan simpan di frontend [[ https://www.unixtimestamp.com/ ]]

console.log(dateTimestamp)

//string
const dateString = new Date ("September 03 2020 13:20") //Penulisan Bahasa inggris
console.log(dateString)

const createDate = new Date (2024, 2, 23) //Maret menjadi dua karena dimulai dari index nol.
console.log(createDate)

const tahun = createDate.getFullYear()
const monthList = ["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Oct","Nov","Des"]
const dayList = ["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"]
const date = dateNow.getDate()
const month = createDate.getMonth()
const day = createDate.getDay()
const hours = dateNow.getHours()
const minutes = dateNow.getMinutes()
const getCreateDay = createDate.getDay()

console.log (tahun)
console.log (month)
console.log (day)
console.log(getCreateDay)

const dateStringNow = date + "-" + (month+1) + "-" + tahun +" " + hours + ":" +minutes

console.log(dateStringNow)

const ds = `${("0"+date).slice(-2)}-${("0"+ (month+1)).slice(-2)}-${(tahun)} ${("0"+hours).slice(-2)}:${("0"+minutes).slice(-2)}`
console.log(ds)

const formatIndonesia = new Intl.DateTimeFormat('id-ID',{
    year:"numeric",
    month:'2-digit',
    day:'2-digit',
    hour:'2-digit',
    minute:'2-digit'
}).format(dateNow)
console.log(formatIndonesia)

const getDateElm = document.querySelector('#date_container')
getDateElm.innerHTML = `<h1>${formatIndonesia}</h1>`



// const isSiang = true

// console.log('Mulai')
// if (isSiang == true){
//     alert('Selamat Siang')
// } else {
//     alert('Selamat Malam')
// }
// console.log("End")
// const getResultElm = document.getElementById(result)

// const passworText = prompt ("Masukkan Password Anda !")
// getResultElm.innerHtml =""
// if (passworText=="admin123"){
//     getResultElm.innerHTML = "Selamat Anda Berhasil Login sebagai Admin"
// } else if (passworText == 'user123'){
//     getResultElm.innerHTML = "Selamat Anda Berhasil Login sebagai user"
// }
// else{
//     getDateElm.innerHTML = "Password Salah"
// }

const nilai = prompt ("Masukkan Nilai Anda:")

if (nilai>=90 && nilai<=100){
    alert('A')
}else if (nilai>=80 && nilai<=89){
    alert('B')
}else if (nilai>=70 && nilai<=79){
    alert('C')
}else if (nilai>=60 && nilai<=69){
    alert('D')
}else if (nilai<60){
    alert('E')
}else{
    alert('nilai salah')
}

const role = "Admin"
switch(role){
    case "Admin":
        console.log("Anda sebagai Admin")
        break;
    case "User":
        console.log("Anda sebagai User")
        break;
    case "Guest":
        console.log("Anda sebagai Guset")
        break;
    default:
        console.log("Anda sebagai Guset")
        break;
}