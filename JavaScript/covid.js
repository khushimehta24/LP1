let date = new Date().getDate();
let month = new Date().getMonth() + 1;
let year = new Date().getFullYear();
let today = `${date}-${month}-${year}`;
let btn = document.getElementById('submit');
let datadiv = document.getElementById('data');

btn.addEventListener('click', function (e) {
    e.preventDefault();
    let pinCode = document.getElementById('PinCode').value;
    let URL = `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pinCode}&date=${today}`;
    let verify = /^(\d{4}|\d{6})$/;
    if (pinCode.match(verify)) {
        Covid();
        async function Covid() {
            let response = await fetch(URL);
            let data = await response.json();
            let arr = Object.entries(data);
            let arr2 = arr[0];
            let arr3 = arr2[1];
            arr3.forEach(element => {
                datadiv.innerHTML += `<div class="card2">
                                        <div class="centerId">${element.center_id}</div>
                                        <div class="centerName">name of center : ${element.name}</div>
                                        <div class="address">address : ${element.address}</div>
                                        <div class="upto-age">age limit : ${element.min_age_limit}</div>
                                        <div class="fees">fees : ${element.fee_type}</div>
                                    </div>`
            });
        }
    } else { alert("Please enter valid pin code") }
    datadiv.innerHTML = "";
});