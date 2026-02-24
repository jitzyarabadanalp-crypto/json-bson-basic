use('mi_base_de_datos_jsrr');

db.usuarios.insertOne({
    nombre:"Sophia Rabadan",
    edad:16,
    email:"sophia@gmail.com",
    isActive:true,
    saldo:123345.67,
    fechaRegistro:new Date(),
    genero:"Femenino",
    ciudad:"Monterrey",
    idiomas:["Español", "Ingles" ],
    numeroTelefono:["81 14 88 2923" , "34 56 78 6789"]
});


