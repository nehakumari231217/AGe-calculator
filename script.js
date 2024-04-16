let currentDate = document.getElementById("currentDate");
let dob = document.getElementById("birthday");
let  output = document.getElementById("output");
 
 let btn = document.getElementById("calculateBtn")
 btn.addEventListener("click",() =>{
 if( dob.value =="" || currentDate.value ==""){
    output.innerHTML= "pelse enter  select Date";
 }else{
    calculateAgeDiff(dob.value,currentDate.value);
 }
});

function  calculateAgeDiff(start , end){
     console.log(start);
     let dobyear = parseInt(start.substring(0,4), 10);
     let dobmonth =  parseInt(start.substring(5,7), 10);
     let dobdate = parseInt(start.substring(8,10), 10);
     let curryear = parseInt(end.substring(0,4), 10);
     let currmonth = parseInt(end.substring(5,7), 10);
     let currDate = parseInt(end.substring(8,10), 10);


// year diff 
let yearAgeDiff = curryear - dobyear;

//month diff 
 let monthAgeDiff ;
 if(currmonth >= dobmonth){
    monthAgeDiff = currmonth - dobmonth;
 }
 else{
    yearAgeDiff--;
    monthAgeDiff = 12 + currmonth - dobmonth;
 }

 //date diff 
 let dateAgeDiff;
 if(currDate >= dobdate ){
    dateAgeDiff= currDate - dobdate;
 }
else{
    monthAgeDiff--;
    noofDaysInDob = daysInmonth(dobmonth, dobyear);
    dateAgeDiff = noofDaysInDob + currDate - dobdate;
 
    if(monthAgeDiff < 0){
       monthAgeDiff = 11;
       yearAgeDiff--;
    } 
}
output.innerHTML = yearAgeDiff + " years," +  monthAgeDiff + " months," + dateAgeDiff + "dates,"  ;
}
 function daysInmonth(month, year){
    return new Date (year, month , 0).getDate();
 }
