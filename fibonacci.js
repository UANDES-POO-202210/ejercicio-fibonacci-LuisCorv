const fs = require("fs");

//Hacer funcion recursiva para obtener la suma
let addition_value=function(y){
    let value=0;
      if (y===0){
          value=0;
          return value;
      }
      if (y===1){
          value=1;
          return value;
      }
      else{
          value=(addition_value(y-1))+(addition_value(y-2));
          return value
      }
}
//do as a recursive function to get the fibonacci
let fibonacci = function(x, y) {
    let addition=0;
  if ((y = x)) {
    addition=addition_value(y);
    return addition;
  }
  if (y < x) {
    addition_value(y);
    y++;
    return fibonacci(x, y);
  }
};

//Open the file and make fibonacci
fs.readFile("numero.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log("Ingrese un numero:", data);
  let base = 0;
  console.log("F(", data, ") = ", fibonacci(data, base));
});
