// function tipCalculator(bills){
    
//     var percent;
//     if(bills<50){
//        percent = .2;
      
//     }
//     else if(bills>50 && bills<200){
//         percent = .15
    
//     }
//     else{
//        percent = .1
      
//     }
//     return percent * bills;
// }
// var bill = [124,48,268];
// var tips = [tipCalculator(bill[0]), tipCalculator(bill[1]),tipCalculator(bill[2])]
// var finalvalues= [bill[0] + tips[0],
//                  bill[1] + tips[1],
//                  bill[2] + tips[1]]

//     console.log(tips,finalvalues);
// ===================================================================


// const person = {
//  firstname : 'Chinmay',
//  lastname : 'Chavan',
//  birthyear : 1990,
//  company : 'Raw Eng',
//  calcAge : function (){
//     this.age = 2019 - this.birthyear;
//       },
//  address : 'Mumbai'

// };
// person.calcAge();
// console.log(person)

//=======================================================================================

// 
//

// var Person = function(firstname,birthyear,job) {
//     this.firstname = firstname;
//     this.birthyear = birthyear;
//     this.job = job;
//     this.calcAge = function(){
//         this.age=2018 - this.birthyear
        
//     };
// }

// var john = new Person ('john',1990, 'developer');
// var jane = new Person ('Jane', 1994,'designer');

// john.calcAge();
// jane.calcAge();
// console.log(john);
// console.log(jane);

//=======================================================================

var Person = function(name, birthYear, job){
    this.name = name,
    this.birthYear = birthYear,
    this.job = job
}
Person.prototype.calculateAge = function(){
    console.log(2019 - this.birthYear);
}
Person.prototype.lastname = 'Smith'

var john = new Person('JOhn',1990,'developer')
var jane = new Person('jane',1994,'designer')

john.calculateAge();

console.log(john.lastname)