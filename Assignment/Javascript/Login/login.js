async function fetchData() {
  let data = await fetch('./account.json')
  let resData = await data.json()
  loginCheck(resData)
}

function loginCheck(data) {
  document.getElementById('form-login').addEventListener('submit', function (event) {
    event.preventDefault();
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let href = "../Home/index.html"
    let authenticated = false;
    for (let i = 0; i < data.length; i++) {
      if (email === data[i].Email && password === data[i].Password) {
        authenticated = true;
        break;
      }
    }
    if (authenticated) {
      window.location.href = href
    } else {
      alert("Email atau Password Salah");
    }
  });

  // console.log(data[2].Email + " - " + data[2].Password)
  // console.log(authenticated)
}
fetchData()