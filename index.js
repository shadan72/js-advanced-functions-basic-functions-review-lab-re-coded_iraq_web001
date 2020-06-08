// Your code here
function saturdayFun(activity="roller-skate"){
  let msg=`This Saturday, I want to ${activity}!`;
  return msg;
}
saturdayFun();
saturdayFun("I want to bathe my dog");


let mondayWork= function(activity="go to the office"){
  let msg=`This Monday, I will ${activity}.`;
  return msg;
};

function wrapAdjective(param1='*'){
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> b5d1e993dfaa3b65ea23d9f28cc149bc4585751d
  return function(param2="special"){
   
   let msg=`You are ${param1}${param2}${param1}!` ;
=======
  if(param1 === '*')
  return function(param2="special"){
   
   let msg=`You are ${param1}${param2}` ;
>>>>>>> 93f346521c131c957b089838b7b270b38136ad40
   return msg;
  };
}

<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> b5d1e993dfaa3b65ea23d9f28cc149bc4585751d
const Calculator={
  add: (a,b)=>a + b,
  subtract: (a,b)=>a - b,
  multiply: (a,b)=>a * b,
  divide: (a,b)=>a / b
};

function actionApplyer(intStart, ArrayOfFunc){
  if(ArrayOfFunc=='')
  return intStart;

else {
  ArrayOfFunc.forEach(innerFunc=>{
    intStart=innerFunc(intStart);
  });
      return intStart;
}
<<<<<<< HEAD
}
=======
}


=======
>>>>>>> 93f346521c131c957b089838b7b270b38136ad40
>>>>>>> b5d1e993dfaa3b65ea23d9f28cc149bc4585751d
