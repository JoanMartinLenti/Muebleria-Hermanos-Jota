const productos = [
    {
        id: 1,
        nombre: "Sillón Copacabana",
        categoria: "Living",
        descripcion: "Sillón lounge en cuero cognac con base giratoria de acero Burnt Sienna.",
        precio: 650000,
        imagen: "imagenes/Sillón Copacabana.png",
        etiqueta: "Sustentable",
        claseEtiqueta: "badge-salvia",
        destacado: true,
        especificaciones: {
            medidas: '90 x 85 x 95 cm',
            materiales: 'Cuero curtido vegetal, acero pintado',
            acabado: 'Cuero anilina premium',
            rotacion: '360° silenciosa y suave',
            garantia: '10 años en estructura'
        }
    },
    {
        id: 2,
        nombre: "Sofá Patagonia",
        categoria: "Living",
        descripcion: "Sofá tres cuerpos tapizado en lino Warm Alabaster con pata cónicas de madera.",
        precio: 1550000,
        imagen: "imagenes/Sofá Patagonia.png",
        etiqueta: "Destacado",
        claseEtiqueta: "badge-siena",
        destacado: true,
        especificaciones: {
            medidas: '220 x 90 x 80 cm',
            estructura: 'Madera de eucalipto certificada FSC®',
            tapizado: 'Lino 100% natural premium',
            relleno: 'Espuma HR + plumón reciclado',
            sostenibilidad: 'Materiales 100% reciclables'
        }
    },
    {
        id: 3,
        nombre: "Butaca Mendoza",
        categoria: "Living",
        descripcion: "Butaca tapizada en bouclé Dusty Rose con base de madera guatambú.",
        precio: 600000,
        imagen: "imagenes/Butaca Mendoza.png",
        etiqueta: "Artesanal",
        claseEtiqueta: "badge-gold",
        destacado: false,
        especificaciones: {
            medidas: '80 x 75 x 85 cm',
            materiales: 'Guatambú macizo, tela bouclé',
            acabado: 'Cera vegetal, tapizado premium',
            tapizado: 'Repelente al agua y manchas',
            confort: 'Espuma alta densidad'
        }
    },
    {
        id: 4,
        nombre: "Mesa Comedor Pampa",
        categoria: "Comedor",
        descripcion: "Mesa extensible en madera maciza de roble con tablero biselado y sistema de apertura suave.",
        precio: 940000,
        imagen: "imagenes/Mesa Comedor Pampa.png",
        etiqueta: "Clásico",
        claseEtiqueta: "badge-siena",
        destacado: true,
        especificaciones: {
            medidas: '160-240 x 90 x 75 cm',
            materiales: 'Roble macizo FSC®, mecanismo alemán',
            acabado: 'Aceite-cera natural',
            capacidad: '6-10 comensales',
            extension: 'Sistema de mariposa central'
        }
    },
    {
        id: 5,
        nombre: "Sillas Córdoba",
        categoria: "Comedor",
        descripcion: "Juego de 4 sillas de comedor apilables en contrachapado moldeado de nogal y estructura tubular pintada en Sage Green.",
        precio: 1300000,
        imagen: "imagenes/Sillas Córdoba.png",
        etiqueta: "Set x2",
        claseEtiqueta: "badge-salvia",
        destacado: false,
        especificaciones: {
            medidas: '45 x 52 x 80 cm (cada una)',
            materiales: 'Contrachapado nogal, tubo de acero',
            acabado: 'Laca mate, pintura epoxi',
            apilables: 'Hasta 6 sillas',
            incluye: 'Set de 4 sillas'
        }
    },
    {
        id: 6,
        nombre: "Mesa Centro Araucaria",
        categoria: "Living",
        descripcion: "Mesa de centro con sobre circular de mármol Patagonia y base de tres patas de madera de nogal.",
        precio: 560000,
        imagen: "imagenes/Mesa de Centro Araucaria.png",
        etiqueta: "Novedad",
        claseEtiqueta: "badge-rosa",
        destacado: false,
        especificaciones: {
            medidas: '90 x 90 x 45 cm',
            materiales: 'Sobre de mármol Patagonia, patas de nogal',
            acabado: 'Mármol pulido, aceite natural en madera',
            peso: '42 kg',
            cargaMaxima: '25 kg distribuidos'
        }
    },
    {
        id: 7,
        nombre: "Aparador Uspallata",
        categoria: "Almacenamiento",
        descripcion: "Aparador de seis puertas fabricado en nogal sostenible con tiradores metálicos en acabado latón.",
        precio: 1200000,
        imagen: "imagenes/Aparador Uspallata.png",
        etiqueta: "Exclusivo",
        claseEtiqueta: "badge-gold",
        destacado: true,
        especificaciones: {
            medidas: '180 x 45 x 75 cm',
            materiales: 'Nogal macizo FSC®, herrajes de latón',
            acabado: 'Aceite natural ecológico',
            peso: '68 kg',
            capacidad: '6 compartimentos interiores'
        }
    },
    {
        id: 8,
        nombre: "Biblioteca Recoleta",
        categoria: "Almacenamiento",
        descripcion: "Sistema modular de estantes abierto que combina acero Sage Green y repisas en roble claro.",
        precio: 1100000,
        imagen: "imagenes/Biblioteca Recoleta.png",
        etiqueta: "Modular",
        claseEtiqueta: "badge-siena",
        destacado: false,
        especificaciones: {
            medidas: '100 x 35 x 200 cm',
            materiales: 'Estructura de acero, estantes de roble',
            acabado: 'Laca mate ecológica',
            capacidad: '45 kg por estante',
            modulares: '5 estantes ajustables'
        }
    },
    {
        id: 9,
        nombre: "Escritorio Costa",
        categoria: "Estudio & Trabajo",
        descripcion: "Escritorio compacto con cajón organizado y tapa pasacables integrada en bambú laminado.",
        precio: 780000,
        imagen: "imagenes/Escritorio Costa.png",
        etiqueta: "Estudio",
        claseEtiqueta: "badge-salvia",
        destacado: false,
        especificaciones: {
            medidas: '120 x 60 x 75 cm',
            materiales: 'Bambú laminado, herrajes ocultos',
            acabado: 'Laca mate resistente',
            almacenamiento: '1 cajón con organizador',
            cables: 'Pasacables integrado'
        }
    },
    {
        id: 10,
        nombre: "Silla de Trabajo Belgrano",
        categoria: "Estudio & Trabajo",
        descripcion: "Silla ergonómica regulable en altura con respaldo de malla transpirable y asiento tapizado en tejido reciclado.",
        precio: 450000,
        imagen: "imagenes/Silla de Trabajo Belgrano.png",
        etiqueta: "Ergonomía",
        claseEtiqueta: "badge-gold",
        destacado: false,
        especificaciones: {
            medidas: '60 x 60 x 90-100 cm',
            materiales: 'Malla técnica, tejido reciclado',
            acabado: 'Base cromada, tapizado prémium',
            regulacion: 'Altura + inclinación respaldo',
            certificacion: 'Ergonomía europea EN 1335'
        }
    },
    {
        id: 11,
        nombre: "Mesa de Noche Aconcagua",
        categoria: "Dormitorio",
        descripcion: "Mesa de noche con cajón oculto y repisa inferior en roble reciclado.",
        precio: 430000,
        imagen: "imagenes/Mesa de Noche Aconcagua.png",
        etiqueta: "Dormitorio",
        claseEtiqueta: "badge-rosa",
        destacado: false,
        especificaciones: {
            medidas: '45 x 35 x 60 cm',
            materiales: 'Roble macizo FSC®, herrajes soft-close',
            acabado: 'Barniz mate de poliuretano',
            almacenamiento: '1 cajón + repisa inferior',
            caracteristicas: 'Cajón con cierre suave'
        }
    }
];


