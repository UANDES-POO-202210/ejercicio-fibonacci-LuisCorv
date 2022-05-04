const fs = require("fs");

//Hacer funcion recursiva para obtener la suma
let valor_suma=function(y){
    let actual=0;
      if (y===0){
          actual=0;
          return actual;
      }
      if (y===1){
          actual=1;
          return actual;
      }
      else{
          actual=(valor_suma(y-1))+(valor_suma(y-2));
          return actual
      }
}
//hacer como una funcion recursiva para obtener el fibonacci
let fibonacci = function(x, y) {
    let suma=0;
  if ((y = x)) {
    suma=valor_suma(y);
    return suma;
  }
  if (y < x) {
    valor_suma(y);
    y++;
    return fibonacci(x, y);
  }
};

//Abrir el archivo y hacer fibonacci
fs.readFile("numero.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log("Ingrese un numero:", data);
  let base = 0;
  console.log("F(", data, ") = ", fibonacci(data, base));
});
