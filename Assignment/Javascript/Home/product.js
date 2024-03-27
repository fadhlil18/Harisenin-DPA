async function fetchData() {
  let data = await fetch('./DATA.json')
  let resData = await data.json()
  displayCard(resData)
}


function cardShow(data) {
  let wishlist = data.wishlist == true ? "visible" : "hidden"
  let wishlist2 = data.wishlist == true ? "hidden" : "visible"
  let guestFav = data.favorite == true ? "visible" : "hidden"
  let month = monthName(data.date)
  let date =  dateConverter(data.date)

  return (
    `<a href="#">
    <div class="card-product">
        <img class="img-products"
            src="${data.picture}"
            alt="img-card">
        <div class="mx-2">
            <div>
                <h2 id="guest-fav" class="text-fav ${guestFav}">Guest favorite</h2>
                <div class="zoom love-product ${wishlist}"><i class="fa-solid fa-heart fill-white text-white"></i>
                </div>
                <div class="zoom love-product ${wishlist2}"><i class="fa-regular fa-heart fill-white text-white"></i>
                </div>

            </div>
            <div class="rating">
                <h2>${data.address}, ${data.country}</h2>
                <h2 class="right">&#9733; ${data.star}</h2>
            </div>
            <p class="color-prdct">${data.distance} kilometers away</p>
            <p class="color-prdct">${month} ${date}</p>
            <p><strong>${data.price}</strong> night</p>
        </div>
    </div>
</a>`
  )
}

function monthName(data) {
      let date = new Date(data * 1000);
      let month = date.getMonth();
      const monthList = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]
      let monthName = monthList[month]
      return monthName
}

function dateConverter(data) {
  let dateUnix = new Date(data* 1000);
  let dateNew = dateUnix.getDate();
  return dateNew
}

function displayCard(data) {
  const containerElm = document.getElementById('products')
  data.forEach(function (task) {
      let taskItem = document.createElement('div')
      taskItem.innerHTML = cardShow(task)
      containerElm.appendChild(taskItem)
  })
}


fetchData()