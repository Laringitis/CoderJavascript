
class Planta{
    constructor(nombre, precio, stock) {
        this.nombre= nombre;
        this.precio= parseFloat(precio);
        this.stock= parseFloat(stock);
    }
    
    suficienteStock(cantidad){
        if( this.stock >= cantidad ){
            this.stock = this.stock - cantidad;
            return true;
        }
        else{
            return false;
        }
    }
}
listaPlantas=[];
listaPlantas.push(rosa =  new Planta ("rosa", 150, 24));
listaPlantas.push(clavel = new Planta ("clavel", 300, 42));
listaPlantas.push(margarita = new Planta ("margarita", 200, 32));


function disponibleCompra(Planta){
    return Planta.nombre==comprar;
}

let comprar = prompt("¿Que desea comprar?");

let buscarDisponible= listaPlantas.find(disponibleCompra);
    if(disponibleCompra = undefined){
        alert ("No contamos con esa planta disponible.");
    }

cantidad= prompt ("¿Cuanto desea comprar? teclee 'fin' si desea volver a empezar");

    if (buscarDisponible.suficienteStock(cantidad)){
        alert ("Gracias por comprar");
    }else {
        alert ("no contamos con stock");
    }    

let total= buscarDisponible.precio * cantidad

document.write ("usted compro " + cantidad + " del producto " + comprar + " El total a pagar es " + total);
