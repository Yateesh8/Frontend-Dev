
class BankAccount{#balance=0;deposit(a){this.#balance+=a;}withdraw(a){if(a>this.#balance)throw new Error("Insufficient balance");this.#balance-=a;}getBalance(){return this.#balance;}}
let b=new BankAccount();b.deposit(100);console.log(b.getBalance());try{b.withdraw(200);}catch(e){console.log(e.message);}
