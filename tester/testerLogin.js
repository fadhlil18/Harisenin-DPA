async function fetchData() {
    //Async Await
    let data = await fetch('./account.json')
    let resData = await data.json()
    loginCheck(resData)
  }
  function loginCheck(data){
    document.getElementById('form-login').addEventListener('submit', function(event) {
    event.preventDefault();
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let href = "../Home/index.html"
    let emailDB = data.Email
    let passwordDB = data.Password
    if (emailDB === emailDB && passwordDB === passwordDB) {
      // Successful login
      window.location=href;
    } else {
      // Display error message
      alert("Email atau Password Salah");
    }
  });
  }
  fetchData()