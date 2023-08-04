let sbiBank = {
    bankName : "SBI Bank",
    location : "Bhandup",
    accountNumber : "541267",
    ifsc : "SBIN000567",
    interestRate : 5.6,
    showDetails : function() {
       console.log(`Bank Details : ${this.bankName}, ${this.location}, ${this.accountNumber}, ${this.ifsc}, ${this.interestRate}`);
    }
}
sbiBank.showDetails();

let axisBank = {
    bankName : "Axis Bank",
    location : "Dadar",
    accountNumber : "140278",
    ifsc : "AxIS00587",
    interestRate : 6.8,
    showDetails : function() {
       console.log(`Bank Details : ${this.bankName}, ${this.location}, ${this.accountNumber}, ${this.ifsc}, ${this.interestRate}`);
    }
}
axisBank.showDetails();

let hdfcBank = {
    bankName : "HDFC Bank",
    location : "Mulund",
    accountNumber : "5623897",
    ifsc : "HDFC0057",
    interestRate : 5.1,
    showDetails : function() {
       console.log(`Bank Details : ${this.bankName}, ${this.location}, ${this.accountNumber}, ${this.ifsc}, ${this.interestRate}`);
    }
}
hdfcBank.showDetails();

let yesBank = {
    bankName : "yes Bank",
    location : "Kanjur Marg",
    accountNumber : "1780567",
    ifsc : "YES000678",
    interestRate : 7.4,
    showDetails : function() {
       console.log(`Bank Details : ${this.bankName}, ${this.location}, ${this.accountNumber}, ${this.ifsc}, ${this.interestRate}`);
    }
}
yesBank.showDetails();