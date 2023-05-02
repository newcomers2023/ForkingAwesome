const express = require('express');
const bodyParser = require('body-parser');
const bankAccountsRouter = require('./routes/bankAccounts');
const cors = require('cors');

const app = express();

// Parse JSON request bodies
app.use(bodyParser.json());
app.use(cors());

// Mount the bank accounts router at the '/bank-accounts' endpoint
app.use('/bank-accounts', bankAccountsRouter);

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server started on port 3000');
});