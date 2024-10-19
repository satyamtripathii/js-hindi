// Dates

let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())
// console.log(typeof myDate);

//let newdate = new Date(2023,1,28);
// let newdate = new Date(2023,1,28,22,5);
//let newdate = new Date("2023-02-28")
newdate = new Date("02-28-2023")
console.log(newdate.toLocaleString());

let mytimestamp = Date.now()
// console.log(mytimestamp)
// console.log(newdate.getTime())
// console.log(Math.floor(Date.now()/1000))

let newwdate = new Date()
// console.log(newwdate)
// console.log(newwdate.getDay());
// console.log(newwdate.getMonth() + 1);

newwdate.toLocaleString('default',{
    weekday: "long"
})