// alert ("Привет!");
// let zapros=prompt("ВВедите число!");
// console.log(zapros);
// var user = {
//     name: "Вася",
//     hi: function() { alert(this.name); },
//     bye: function() { alert("Пока"); }
//   };
  
//   user.hi(); // Вася (простой вызов работает)
  
//   // а теперь вызовем user.hi или user.bye в зависимости от имени
//   (user.name == "Вася" ? user.hi() : user.bye())(); // undefined
// var arr = ["a", "b"];

// arr.push(function() {
//   alert( this );
//   return "Good";
// })

// //arr[2](); // "a","b",function
// console.log(arr[2]());
// var currentCount = 1;
  

// function makeCounter() {
//     var currentCount = 1;
//     return function() { // (**)
//       return currentCount++;
//     };
//   }
//   let counter=makeCounter();
// // alert(makeCounter);
// alert(counter());
// alert(counter());
// alert(counter());
function v1sum(paramA,paramB) {
    return paramA+paramB;
  }
  console.log(typeof(v1sum));
  const textFunction1 = ""+v1sum; //получил текст функции1 //это строковое значение!
  console.log(typeof(textFunction1));
  a=1;
  b=2;
  console.log(textFunction1);
  console.log("v1sum("+a+","+b+")=", v1sum(a,b));
  //
  const nameFunction2 = "v2sum";
  const textFunction2 = textFunction1.replace("v1sum", "v2sum"); //получил текст функции2
  console.log(textFunction2);
  eval(textFunction2);
  console.log("v2sum("+a+","+b+")=", v2sum(a,b));