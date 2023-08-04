
let professor = {
    name : "Jenny",
    mobileNumber : 9745845156,
    state : "Maharashtra",
    city : "Mumbai",
    country : "India",
    degrees : {
      enginerring : "CSC",
      PHD : "Adv Computing",
      teacherdegrees : function() {
        console.log(`Teacher Degrees : ${this.enginerring}, ${this.PHD}`);
    }
  },
  certificates : ["Hacker Rank participation", "IFE course", "Adv Programming" ]

}

professor.totalExperience = "14 years";
console.log(professor);
professor.degrees.teacherdegrees();
professor.certificates.push("Oracle Certificate");
console.log(`certificates in ${professor.certificates}`);
console.log(`Last element of the array certificates : ${professor.certificates[professor.certificates.length-1]}`);





