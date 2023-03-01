const correctoPlantas= ["rosa", "clavel", "margarita"]
class Planta{
    constructor(nombre, precio, stock) {
    this.nombre= nombre;
    this.precio= parseFloat(precio);
    this.stock= parseFloat(stock);

    }
    total(){
        return (this.precio * cantidad)
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

function recargar () {
    window.location.href = window.location.href;
}

function disponibleCompra(Planta){
    return Planta.nombre==comprar
}

let comprar = prompt("¿Que desea comprar? teclee 'fin' cuando desee terminar la compra");
let buscarDisponible= listaPlantas.find(disponibleCompra)
    if(disponibleCompra = undefined){
        alert ("No contamos con esa planta disponible.")
        location.reload

    }
let cantidad= prompt ("¿Cuanto desea comprar? teclee 'fin' si desea volver a empezar")

if (buscarDisponible.suficienteStock(cantidad)){
    alert ("Gracias por comprar")
}else {
    alert ("no contamos con stock")
    recargar()
}    



document.write ("usted comrpro " + cantidad + "del producto " + comprar + "<br> El total a pagar es " + total(comprar))
// if (comprar==plantas){
//     if (cantidad<= rosa.stock){
//         let comprado = (rosa.precio * cantidad);
//     }
// }else {
//     alert ("su pedido no existe")
// }