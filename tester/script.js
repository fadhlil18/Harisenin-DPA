// document.getElementById('form-login').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent form submission
    
//     let email = document.getElementById('email').value;
//     let password = document.getElementById('password').value;
//     var href = "#../Home/index.html"

//     // Simple validation
//     if (email === 'fadhlilazfi@gmail.com' && password === 'password123') {
//       // Successful login
//       // location.href = "../Home/index.html";
//       window.location=href;
//     } else {
//       // Display error message
//       alert("Email atau Password Salah");
//       // document.getElementById('error-message').textContent = 'Invalid username or password';
//     }
//   });

//Tujuan : Get Data dari API dan kita tampilkan

//1. function Card 
//2. function Get data dari API
//3. function displayData dengan card

//Promise
// function fetchData() {
//     //PROMISE
//     fetch('https://jsonplaceholder.typicode.com/todos').then((res) => {
//         res.json().then((resData) => {
//             displayCard(resData)
//         })
//     })
// }

async function fetchData() {
  //Async Await
  let data = await fetch('./dummy.json')
  let resData = await data.json()
  displayCard(resData)
}


function cardShow(data) {
  let labelProgress = data.completed == true ? "visible" : "hidden"
  let colorProgress = data.completed == true ? "#0a9a1f" : "#c78809"
  return (
      `<div class="container">
      <div style="font-size: 24px">${data.title}</div>
      <div class ="flex-container">
        <div>User id:${data.address}</div>
        <div class="progress" style="background-color: ${colorProgress}; visibility:${labelProgress} ;">
          ${labelProgress}
        </div>
      </div>
    </div>`
  )
}

function displayCard(data) {
  console.log(data.picture)
  const containerElm = document.getElementById('list_task')

  data.forEach(function (task) {
      let taskItem = document.createElement('div')
      taskItem.innerHTML = cardShow(task)
      containerElm.appendChild(taskItem)
  })
}


fetchData()

