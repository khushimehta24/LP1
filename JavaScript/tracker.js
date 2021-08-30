let id = 0;

var rIndex,
  table = document.querySelector(".table");

function checkEmptyInput() {
  var isEmpty = false,
    type = document.getElementById("type").value,
    date = document.getElementById("date").value,
    text = document.getElementById("text").value,
    amount = document.getElementById("amount").value;

    
  if (type === "Choose one...") {
    alert("type is Empty");
    isEmpty = true;
  } else if (date === 0) {
    alert("Enter date");
    isEmpty = true;
  } else if (text === "") {
    alert("text is empty");
    isEmpty = true;
  } else if (amount === "") {
    alert("Amount cannot Be Empty");
    isEmpty = true;
  }
  return isEmpty;
}

function addExpense() {
  if (!checkEmptyInput()) {
    var newRow = table.insertRow(table.length),
      cell1 = newRow.insertCell(0),
      cell2 = newRow.insertCell(1),
      cell3 = newRow.insertCell(2),
      cell4 = newRow.insertCell(3),
      type = document.getElementById("type").value,
      date = document.getElementById("date").value,
      text = document.getElementById("text").value,
      amount = document.getElementById("amount").value;

    cell1.innerHTML = type;
    cell2.innerHTML = date;
    cell3.innerHTML = text;
    cell4.innerHTML = amount;
    selectedRowToInput();
  }
}

function selectedRowToInput() {
  for (var i = 1; i < table.rows.length; i++) {
    table.rows[i].onclick = function () {
      rIndex = this.rowIndex;
      document.getElementById("type").value = this.cells[0].innerHTML;
      document.getElementById("date").value = this.cells[1].innerHTML;
      document.getElementById("text").value = this.cells[2].innerHTML;
      document.getElementById("amount").value = this.cells[3].innerHTML;
    };
  }
}
selectedRowToInput();

function editExpense() {
  var type = document.getElementById("type").value,
    date = document.getElementById("date").value,
    text = document.getElementById("text").value,
    amount = document.getElementById("amount").value;
  if (!checkEmptyInput()) {
    table.rows[rIndex].cells[0].innerHTML = type;
    table.rows[rIndex].cells[1].innerHTML = date;
    table.rows[rIndex].cells[2].innerHTML = text;
    table.rows[rIndex].cells[3].innerHTML = amount;
  }
}

function removeExpense() {
  table.deleteRow(rIndex);
  document.getElementById("type").value = "";
  document.getElementById("date").value = "";
  document.getElementById("text").value = "";
  document.getElementById("amount").value = "";
}
