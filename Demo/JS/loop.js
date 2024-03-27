//1. Counted Looping

//-perulangan for
for(let i =0; i<10 ; i++){
    document.write(`Loop Ke - ${i+1}<br/>`)
}
//-Perulangan For nilai dari user
let c = prompt('Masukkan Nilai Perilangan')
for(let a =0; a<Number(c) ; a++){
    document.write(`Loop Sebanyak - ${a+1}<br/>`)
}
//-Perulangan ForEach membaca perulangan based on data
const bahasa = ["Inggris","Indonesia","Jawa","Prancis"]
const reverseBahasa = bahasa.reverse()
document.write(`</br>`)
bahasa.forEach(function(item){
    document.write(`${item}</br>`)
})
document.write(`</br>`)
reverseBahasa.forEach(function(item){
    document.write(`${item}</br>`)
})

//-Perulangan Repeat
document.write("Perulangan".repeat(100))

//2. Uncounted Looping
//-While
// let ask = confirm ("Apakah Anda mau mengulang ?") //Trie or False
let counter = 0

// while(ask){
//     let = jawab = confirm (`Apakah Anda mau mengulang? `)
//     counter++;
//     if (jawab == false){
//         ask = false
//     }
//     document.write(`Pengulangan ke - ${counter+1}`)
// }

//-Do/While
let ask = false
do {
    counter++;
    ask = confirm("Apakah Anda mau Mengulang ?")
}while(ask)
document.write(`<br/>Pengulangan ke - ${counter+1}`)

//get loop by label
let lang = [{id :0 , label:"Javascript"} , {id :1 , label:"Java"},{id :2 , label:"Python"},{id :3 , label:"PHP"}]
lang.forEach(function(item){document.write(item.label)})

//nested loop
for(let i =0; i<10 ; i++){
    for(let j =0; j<2 ; j++){
    document.write(`</br>Loop Ke i - ${i+1}<br/> Loop Ke j - ${j+1}<br/>`)
    }
}
//Loop object
const user = 
{
    firstName :"John",
    lastName :"Doe",
    age : 20
}
for (let key in user){
    document.write(`${key} - ${user[key]} <br/>`)
}