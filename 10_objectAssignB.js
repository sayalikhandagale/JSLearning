let bankSbi = {
    bankName: "SBI Bank",
    accountNo: 778899,
    ifsc: "SBI00047",
    interestRate: "5.2%"
}

let bankLocation = {
    street : "Wakad Main Road",
    city : "Mumbai",
    pinCode : 400078,
}
let res1 = Object.assign({} , bankSbi, bankLocation);
console.log(res1);
let res2 = {...bankSbi, bankLocation};
console.log(res2);

let rateOfInterest = {
    homeLoanInterest : "6.7%",
    personalLoanInterest : "6.2%",
    dueInterest : "5.5%"

}
let sbiDetails = Object.assign({} , bankSbi, bankLocation, rateOfInterest);
console.log(sbiDetails);
for (const key in sbiDetails) {
    if (Object.hasOwnProperty.call(sbiDetails, key)) {
        const element = sbiDetails[key];
        console.log(element);
    }
}
