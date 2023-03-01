const correctoPlantas= ["rosa", "clavel", "margarita"]
class Planta{
    constructor(nombre, precio, stock) {
    this.nombre= nombre;
    this.precio= parseFloat(precio);
    this.stock= parseFloat(stock);
    }
    suficienteStock(cantidad){
        if( this.stock >= cantidad ){
            this.stock = this.stock - cantidad
            return true
        }
        else{
            return false
        }
    }
}

listaPlantas=[];
listaPlantas.push(rosa =  new Planta ("rosa", 150, 24));
listaPlantas.push(clavel = new Planta ("clavel", 300, 42));
listaPlantas.push(margarita = new Planta ("margarita", 200, 32));


function disponibleCompra(Planta){
    return Planta.nombre==comprar
}

let comprar = prompt("¿Que desea comprar? teclee 'fin' cuando desee terminar la compra");
let buscarDisponible= listaPlantas.find(disponibleCompra)
    if(disponibleCompra=false){
        alert ("No contamos con esa planta disponible.")
    }
let cantidad= prompt ("¿Cuanto desea comprar? teclee 'fin' si desea volver a empezar")


if (buscarDisponible.suficienteStock(cantidad)){
    alert ("Gracias por comprar")
}else {
    alert ("no contamos con stock")
}

// if (comprar==plantas){
//     if (cantidad<= rosa.stock){
//         let comprado = (rosa.precio * cantidad);
//     }
// }else {
//     alert ("su pedido no existe")
// }