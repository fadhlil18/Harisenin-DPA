async function fetchData() {
    //Async Await
    let data = await fetch('./account.json')
    let resData = await data.json()
    loginCheck(resData)
  }
  function loginCheck(data){
    document.getElementById('form-login').addEventListener('submit', function(event) {
    event.preventDefault();
    let fail = 0
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let href = "https://www.youtube.com/"
    for (let i = 0; i < data.length; i++) {
      if (email === data[i].Email && password === data[i].Password) {
        window.location.href = href
      }else {
        // alert("GAGAL" + i)
        fail = 1
      }
    }
    console.log(fail)
  });
  }
  fetchData()