
async function fetchData() {
    //Async Await
    let data = await fetch('./imgTester.json')
    let resData = await data.json()
    dateTester(resData)
}
//   function dateConverter (date){
//     var myDate = new Date(date * 1000); 
//     date = myDate. toGMTString();
//     console.log(date)
//   }

function dateTester(data) {
    for (let i=0;i<data.length;i++){
            let idLength = data[i].picture.length;
            for (let j=0;j<idLength;j++){
            console.log("Array ke-" + i + " Picture ke-" + (j+1) + "  =  " + data[i].picture[j])
        }
        console.log("Next CARD")
    }
}

fetchData()