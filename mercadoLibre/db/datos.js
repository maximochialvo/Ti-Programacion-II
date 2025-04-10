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
        
    ],
    productoss: [
        {
            imagen: 'https://www.chevrolet.com.ar/content/dam/chevrolet/mercosur/argentina/espanol/index/01-vehicles/onix-premier/mov/01-images/2023-onix-arg-mov-01.jpg',
            nombre: 'Chevrolet Onix',
            descripcion: 'Auto compacto moderno y eficiente.',
            comentarios: [
                {
                    nombreUsuario: 'martina89',
                    comentario: 'Muy económico en ciudad.',
                    imgPerfil: 'https://randomuser.me/api/portraits/women/44.jpg'
                },
                {
                    nombreUsuario: 'lucasperez',
                    comentario: 'Buen equipamiento por su precio.',
                    imgPerfil: 'https://randomuser.me/api/portraits/men/22.jpg'
                }
            ]
        },
        {
            imagen: 'https://acnews.blob.core.windows.net/imgnews/large/NAZ_85df9846b1894709b99b7bc03bdfdc6a.jpg',
            nombre: 'Toyota Hilux',
            descripcion: 'Camioneta robusta ideal para trabajo pesado.',
            comentarios: [
                {
                    nombreUsuario: 'fernando_rural',
                    comentario: 'Indestructible. La uso en el campo.',
                    imgPerfil: 'https://randomuser.me/api/portraits/men/35.jpg'
                },
                {
                    nombreUsuario: 'vale_4x4',
                    comentario: 'Impecable para offroad.',
                    imgPerfil: 'https://randomuser.me/api/portraits/women/25.jpg'
                }
            ]
        },
        {
            imagen: 'https://cdn.motor1.com/images/mgl/n99eL/s3/2023-ford-ranger.jpg',
            nombre: 'Ford Ranger',
            descripcion: 'Pick-up de gran potencia y tecnología.',
            comentarios: [
                {
                    nombreUsuario: 'jorgeford',
                    comentario: 'Excelente respuesta del motor.',
                    imgPerfil: 'https://randomuser.me/api/portraits/men/46.jpg'
                },
                {
                    nombreUsuario: 'sofiatrucks',
                    comentario: 'Me encanta el diseño.',
                    imgPerfil: 'https://randomuser.me/api/portraits/women/41.jpg'
                }
            ]
        },
        {
            imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Renault_Sandero_RS_%28facelift%29_IMG_5423.jpg/1200px-Renault_Sandero_RS_%28facelift%29_IMG_5423.jpg',
            nombre: 'Renault Sandero RS',
            descripcion: 'Versión deportiva del hatchback Sandero.',
            comentarios: [
                {
                    nombreUsuario: 'nico_rs',
                    comentario: 'Ideal para ciudad con toque deportivo.',
                    imgPerfil: 'https://randomuser.me/api/portraits/men/19.jpg'
                },
                {
                    nombreUsuario: 'flor_sandero',
                    comentario: 'Muy cómodo y ágil.',
                    imgPerfil: 'https://randomuser.me/api/portraits/women/17.jpg'
                }
            ]
        },
        {
            imagen: 'https://http2.mlstatic.com/D_NQ_NP_2X_933144-MLA73131841693_112023-F.webp',
            nombre: 'Volkswagen Amarok',
            descripcion: 'Camioneta potente y cómoda.',
            comentarios: [
                {
                    nombreUsuario: 'marcelo_vw',
                    comentario: 'Muy buena para viajar.',
                    imgPerfil: 'https://randomuser.me/api/portraits/men/11.jpg'
                },
                {
                    nombreUsuario: 'carlaamarok',
                    comentario: 'Tiene de todo. Tecnología full.',
                    imgPerfil: 'https://randomuser.me/api/portraits/women/32.jpg'
                }
            ]
        },
        {
            imagen: 'https://imagenes.elpais.com/resizer/sENf4QU-muqKoSk9B4mP92yojqI=/1960x1470/cloudfront-eu-central-1.images.arcpublishing.com/prisa/BFVUJAWZDJDUDFWGB3FUGXCTKA.jpg',
            nombre: 'Fiat Cronos',
            descripcion: 'Sedán compacto, el más vendido en Argentina.',
            comentarios: [
                {
                    nombreUsuario: 'agus_fiat',
                    comentario: 'Relación precio/calidad insuperable.',
                    imgPerfil: 'https://randomuser.me/api/portraits/men/27.jpg'
                },
                {
                    nombreUsuario: 'milu_cronos',
                    comentario: 'Confort y buen consumo.',
                    imgPerfil: 'https://randomuser.me/api/portraits/women/36.jpg'
                }
            ]
        },
        {
            imagen: 'https://www.carscoops.com/wp-content/uploads/2022/03/Peugeot-208.jpg',
            nombre: 'Peugeot 208',
            descripcion: 'Auto urbano con gran diseño europeo.',
            comentarios: [
                {
                    nombreUsuario: 'pablo208',
                    comentario: 'El diseño es lo mejor que tiene.',
                    imgPerfil: 'https://randomuser.me/api/portraits/men/60.jpg'
                },
                {
                    nombreUsuario: 'vale_peugeot',
                    comentario: 'Compacto pero con mucha onda.',
                    imgPerfil: 'https://randomuser.me/api/portraits/women/63.jpg'
                }
            ]
        },
        {
            imagen: 'https://media.autoexpress.co.uk/image/private/s--3wHUKisv--/v1689951990/autoexpress/2023/07/Honda%20Civic%20Type%20R-3.jpg',
            nombre: 'Honda Civic Type R',
            descripcion: 'Hatchback deportivo de alto rendimiento.',
            comentarios: [
                {
                    nombreUsuario: 'kevinvtec',
                    comentario: 'Una bestia en pista y calle.',
                    imgPerfil: 'https://randomuser.me/api/portraits/men/50.jpg'
                },
                {
                    nombreUsuario: 'julia_r',
                    comentario: 'El auto de mis sueños.',
                    imgPerfil: 'https://randomuser.me/api/portraits/women/50.jpg'
                }
            ]
        },
        {
            imagen: 'https://www.kia.com/content/dam/kwcms/gt/en/images/vehicles/sportage-qv/overview/2023/2023-Sportage-QV-Global-Overview-KV-02.jpg',
            nombre: 'Kia Sportage',
            descripcion: 'SUV elegante con buen rendimiento.',
            comentarios: [
                {
                    nombreUsuario: 'sebaskia',
                    comentario: 'Ideal para la familia.',
                    imgPerfil: 'https://randomuser.me/api/portraits/men/12.jpg'
                },
                {
                    nombreUsuario: 'romik',
                    comentario: 'Comodidad, diseño y seguridad.',
                    imgPerfil: 'https://randomuser.me/api/portraits/women/28.jpg'
                }
            ]
        },
        {
            imagen: 'https://media.gq.com/photos/5dc0f2bc81c9ec00089efba4/4:3/w_2000,h_1500,c_limit/TeslaCybertruck_Lead.jpg',
            nombre: 'Tesla Cybertruck',
            descripcion: 'Camioneta eléctrica futurista.',
            comentarios: [
                {
                    nombreUsuario: 'elon_fan',
                    comentario: 'Literalmente de otro planeta.',
                    imgPerfil: 'https://randomuser.me/api/portraits/men/4.jpg'
                },
                {
                    nombreUsuario: 'techlover88',
                    comentario: 'La quiero ya en Argentina.',
                    imgPerfil: 'https://randomuser.me/api/portraits/women/5.jpg'
                }
            ]
        }
    ]
    
}

module.exports = datos