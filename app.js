
// ID SELECTING
const incomefield = document.getElementById("income_field");
const foodField = document.getElementById("food_field");
const rentField = document.getElementById("rent_field");
const clothesField = document.getElementById("clothes_field");
const calculateBtn = document.getElementById("calculateBtn");
const balanceId = document.getElementById("balanceId");

const totalExpenses = document.getElementById("total-expenses");
const saveField = document.getElementById("save_field");
const saveBtn = document.getElementById("saveBtn");
const savingAmount = document.getElementById("saving-amount");
const remainingBalanace = document.getElementById("remaining-balance");


// TOTAL EXPENSES
calculateBtn.addEventListener("click", function () {
  isEmptyError();
  handleError();
  addition();
  totalBalance();
});

// Addition Function
function addition() {
  const foodAmount = parseInt(foodField.value);
  const rentAmount = parseInt(rentField.value);
  const clothesAmount = parseInt(clothesField.value);

  const TotalExpense = foodAmount + rentAmount + clothesAmount;
  totalExpenses.innerText = TotalExpense.toFixed(0);
}

// BALANCE
function totalBalance() {
  const income = parseInt(incomefield.value);
  const totalExpensesValue = parseInt(totalExpenses.innerText);
  const balance = income - totalExpensesValue;
  balanceId.innerText = balance.toFixed(0);
}

// Saving Function Click
saveBtn.addEventListener("click", function () {
  handleError();
  savePrice();
});

// SAVING
function savePrice() {
  var numVal1 = parseInt(balanceId.innerText);
  var numVal2 = parseInt(saveField.value);

  var totalValue = numVal1 * (numVal2 / 100);
  savingAmount.innerText = totalValue.toFixed(0);

  remainingBalanace.innerText = balanceId.innerText - savingAmount.innerText;
}


/* ERROR HANDLING */
function isEmptyError() {
  if (incomefield.value === "") {
    alert("Field Must be not Empty");
    return;
  } 
}

function handleError() {
  if (
    (incomefield.value ||
      foodField.value ||
      rentField.value ||
      clothesField.value ||
      saveField.valu) < 0
  ) {
    alert("Please Insert only Positve Number");
    return;
  } else if (
    isNaN(incomefield.value) ||
    isNaN(foodField.value) ||
    isNaN(rentField.value) ||
    isNaN(clothesField.value) ||
    isNaN(saveField.value) === true
  ) {
    alert("Please insert a number");
    return;
  }
}
