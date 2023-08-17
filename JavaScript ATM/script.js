// Simulated ATM Withdrawal

// Simulate inserting the card
var cardNumber = prompt("Please insert your card and enter your card number:");
var pin = prompt("Please enter your PIN:");

// Simulate PIN verification
var correctPin = "0000"; // Simulated correct PIN
if (pin === correctPin) {
  // Simulate account balance retrieval
  var accountBalance = 100000; // Simulated account balance (NGN)
  alert("Account balance: NGN" + accountBalance.toLocaleString());

  // Simulate withdrawing money
  var withdrawalAmount = parseFloat(prompt("Enter withdrawal amount (NGN):"));
  
  if (isNaN(withdrawalAmount) || withdrawalAmount <= 0) {
    alert("Invalid withdrawal amount.");
  } else if (withdrawalAmount > accountBalance) {
    alert("Insufficient funds.");
  } else {
    // Simulate deducting withdrawal amount
    accountBalance -= withdrawalAmount;
    alert("Withdrawal of NGN" + withdrawalAmount.toLocaleString() + " successful.");
    alert("Remaining balance: NGN" + accountBalance.toLocaleString());
  }
} else {
  alert("Incorrect PIN. Please try again.");
}

alert("Thank you for using our ATM.");


