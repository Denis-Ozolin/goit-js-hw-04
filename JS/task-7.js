const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};


let id = 0;
const getId = () => id += 666;


const account = {
  balance: 0,
  transactions: [],


  createTransaction(amount, type) {
      return {
      id: getId(),
        amount,
        type,
    }
  },


  deposit(amount) {
    if (typeof amount === null || amount <= 0) {
      console.log('Неверные данные');
      return;
  }
    const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
    this.transactions.push(transaction);
    return this.balance += amount;
  },


  withdraw(amount) {
    if (typeof amount === null || amount <= 0) {
      console.log('Неверные данные');
      return; 
    }

   if (amount > this.balance) {
     console.log('Снятие такой суммы невозможно, недостаточно средств.');
     return;
    } 

    const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
    this.transactions.push(transaction);
    return this.balance -= amount;
},


  getBalance() {
     return console.log(this.balance);
  },


  getTransactionDetails(id) {
    for (const transaction of this.transactions) {
      if (id === transaction.id) {
        return transaction;
      } else {
        console.log('Неверный ID')
        return;
      }
    } 
  },

  
  getTransactionTotal(type) {
    let totalTransactions = 0;
    for (const transaction of this.transactions) {
      if (transaction.type === type) {
        totalTransactions += transaction.amount;
      }
    }
    return console.log(totalTransactions);
  },

};

account.getBalance();

account.deposit(0);
account.deposit(1000);

account.withdraw(1600); 
account.withdraw(600);
account.withdraw(-45);

account.deposit(1100);

account.getBalance();

account.getTransactionTotal(Transaction.DEPOSIT);
account.getTransactionTotal(Transaction.WITHDRAW);

console.log(account.transactions);

const transactionId = account.transactions[0].id;
console.log(account.getTransactionDetails(transactionId));