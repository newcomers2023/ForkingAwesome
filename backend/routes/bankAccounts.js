const express = require('express');
const router = express.Router();
const fs = require('fs');

// Get all bank accounts
router.get('/', (req, res) => {
  // Read the bank accounts JSON file
  const bankAccounts = JSON.parse(fs.readFileSync('./data/bank-accounts.json', 'utf8'));

  // Return the bank accounts as JSON
  res.json(bankAccounts);
});

// Add a new bank account
router.post('/', (req, res) => {
  // Read the bank accounts JSON file
  const bankAccounts = JSON.parse(fs.readFileSync('./data/bank-accounts.json', 'utf8'));

  // Add the new bank account to the array
  bankAccounts.push(req.body);

  // Write the updated bank accounts array back to the JSON file
  fs.writeFileSync('./data/bank-accounts.json', JSON.stringify(bankAccounts));

  // Return the updated bank accounts as JSON
  res.json(bankAccounts);
});

module.exports = router;
