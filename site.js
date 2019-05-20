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