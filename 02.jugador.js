//JITZYA SOPHIA RABADAN RAMOS

let pastel = {
    "nombre": "chocodeli",
    "sabor": "chocolate",
    "precio": 450,
    "tienda": "Pasteleria lety",
    "ingredientes": 12,
    "id": 123456,
    "sellos": ['exceso azucares', 'exceso sodio', 'exceso edulcorantes'],
    "reseñas":{
        "reseña1": "Muy rico",
        "reseña2": "Me encanto",
        "reseña3": "Lo recomiendo"
    }


}

console.log(pastel);
console.log('El nombre es: ' + pastel.nombre);
console.log('El sabor es: ' + pastel.sabor);
console.log('El precio es: ' + pastel.precio);
console.log('La Tienda es: ' + pastel.tienda);
console.log('Cantidad de ingredientes: ' + pastel.ingredientes);
console.log('El id es: ' + pastel.id);
console.log('Los sellos de exceso son: ' + pastel.sellos);

console.table(pastel);
