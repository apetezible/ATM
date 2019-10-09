class Billete {
  constructor (Valor, Cantidad){
    this.valor = Valor;
    this.cantidad = Cantidad;
  }
}

var Caja = [];
var Entregado = [];

Caja.push (new Billete(100, 5));
Caja.push (new Billete(50, 10));
Caja.push (new Billete(20, 5));
Caja.push (new Billete(10, 10));
Caja.push (new Billete(5, 5));

var Dinero = 0;
var Div = 0;
var Papeles = 0;

var Boton = document.getElementById ("Envio");
Boton.addEventListener ("click", entrega);

function entrega (){

  var Texto = document.getElementById("ElDineroEsDinero");
  Dinero = parseInt(Texto.value);

  for(var billetes of Caja){
    if (Dinero>0){
      Div = Math.floor (Dinero/billetes.valor);
      if(Div>billetes.cantidad){
        Papeles = billetes.cantidad;
      }else{
        Papeles = Div;
      }
      Entregado.push(new Billete (billetes.valor, Papeles));
      Dinero = Dinero - (Papeles*billetes.valor);
    }
  }
   var Resultados = document.getElementById("res");
  if (Dinero>0){
    Resultados.innerHTML = "Lo lamento, no tengo los billetes necesarios para pagarte :(";
  }else{
    for (var A of Entregado){
      if (A.cantidad>0){
      Resultados.innerHTML = Resultados.innerHTML + A.cantidad + " billetes de $ "+ A.valor+"<br />";
      } 
    }
  }
}
