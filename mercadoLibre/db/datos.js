const datos = {
    usuario:{
        email:'ljoaquin@udesa.edu.ar',
        usuario:'jLanusse',
        contrasenia:'hola',
        nacimiento:'23/09/2005',
        dni:'44556677',
        fotoPerfil:'https://i.pinimg./474x/64/ef/98/64ef980138c10eed414880785c501820.jpg',
    },
    productos:[
        {
            imagen:'https://www.ram.com.ar/content/dam/cross-regional/latam/ramtrucks/es_ar/ram-2500/jellybeans/mediano_gris.jpg.img.500.jpg',
            nombre:'Jeep RAM',
            descripcion:'Camioneta',
            comentarios: [
                {
                    nombreUsuario:'jLanusse',
                    comentario:'Gran motor',
                    imgPerfil:'https://i.pinimg./474x/64/ef/98/64ef980138c10eed414880785c501820.jpg',
                },
                {
                    nombreUsuario:'diego',
                    comentario:'Una camioneta muy grande',
                    imgPerfil:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFwd1f2ceVOEjLJGPKQ7x-OVj5KPRfF5V8tA&s',
                }
            ]    
        },
    ]
}

module.exports = datos