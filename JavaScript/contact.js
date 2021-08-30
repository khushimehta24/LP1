let addbtn = document.getElementById("addbtn");
        let delbtn = document.getElementById("delbtn");
        let name = document.getElementById("name");
        let number = document.getElementById("number");
        let records = document.querySelector(".records");

        addbtn.addEventListener('click', function (e) {
            e.preventDefault();
            // console.log(name.value);
            // console.log(number.value);

            // create Element
            if (name.value != "" && number.value != 0) {
                let phoneNo = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
                if (number.value.match(phoneNo)) {
                    let appendElem = document.createElement("div");

                    // Adding class name
                    appendElem.className = "contact"
                    // console.log(appendElem);

                    // innerHtml
                    appendElem.innerHTML = `<p>Name : ${name.value}</p>
                                            <p>Number : ${number.value}</p>
                                            <button id="delbtn" class="delbtn">Delete Contact</button>`;


                    // Appending it to DOM
                    records.appendChild(appendElem);
                } else {
                    alert("Invalid phone number");
                }

            } else { alert("Invalid Credentials") }
        })

        
        records.addEventListener('click', function (e) {
            if (e.target.classList.contains('delbtn')) {
                if (confirm("Do you really want to delete this contact?")) {
                    var contactRec = e.target.parentElement;
                    records.removeChild(contactRec);
                }
            }
        })
