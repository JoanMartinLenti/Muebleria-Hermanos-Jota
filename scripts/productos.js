//Clase padre para todos los productos
class Producto {
	constructor(nombre, descripcion, precio, especificaciones) {
		this.nombre = nombre;
		this.descripcion = descripcion;
		this.precio = precio;
		this.especificaciones = especificaciones;
	}
}


//Clases encargadas de heredar de la clase Producto y crear instancias de cada producto específico con sus características únicas

class SillaTrabajoBelgrano extends Producto {
	constructor() {
		super('Silla de Trabajo Belgrano', 'Silla ergonómica regulable en altura con respaldo de malla transpirable y asiento tapizado en tejido reciclado. Diseñada para largas jornadas de trabajo con máximo confort y apoyo lumbar, ideal para oficinas en casa y espacios de coworking.', '$ 480.000', {
			medidas: '60 × 60 × 90-100 cm', materiales: 'Malla técnica, tejido reciclado', acabado: 'Base cromada, tapizado prémium', regulacion: 'Altura + inclinación respaldo', certificacion: 'Ergonomía europea EN 1335'
		});
	}
}

class EscritorioCosta extends Producto {
	constructor() {
		super('Escritorio Costa', 'Escritorio compacto con cajón organizador y tapa pasacables integrada en bambú laminado. Ideal para espacios de trabajo en casa, combina funcionalidad moderna con estética minimalista y sostenible, perfecto para el trabajo remoto.', '$ 720.000', {
			medidas: '120 × 60 × 75 cm', materiales: 'Bambú laminado, herrajes ocultos', acabado: 'Laca mate resistente', almacenamiento: '1 cajón con organizador', cables: 'Pasacables integrado'
		});
	}
}

class SillasCordoba extends Producto {
	constructor() {
		super('Sillas Córdoba', 'Set de cuatro sillas apilables en contrachapado moldeado de nogal y estructura tubular pintada en Sage Green. Su diseño ergonómico y materiales de calidad garantizan comodidad y durabilidad.', '$ 520.000', {
			medidas: '45 × 52 × 80 cm (cada una)', materiales: 'Contrachapado nogal, tubo de acero', acabado: 'Laca mate, pintura epoxi', apilables: 'Hasta 6 sillas', incluye: 'Set de 4 sillas'
		});
	}
}

class MesaComedorPampa extends Producto {
	constructor() {
		super('Mesa Comedor Pampa', 'Mesa extensible de roble macizo con tablero biselado y sistema de apertura suave. Su diseño robusto y elegante se adapta perfectamente a reuniones íntimas o grandes celebraciones familiares.', '$ 880.000', {
			medidas: '160-240 × 90 × 75 cm', materiales: 'Roble macizo FSC®, mecanismo alemán', acabado: 'Aceite-cera natural', capacidad: '6-10 comensales', extension: 'Sistema de mariposa central'
		});
	}
}

class SofaPatagonia extends Producto {
	constructor() {
		super('Sofá Patagonia', 'Sofá de tres cuerpos tapizado en lino Warm Alabaster con patas cónicas de madera. Los cojines combinan espuma de alta resiliencia con plumón reciclado, ofreciendo comodidad duradera y sostenible.', '$ 1.550.000', {
			medidas: '220 × 90 × 80 cm', estructura: 'Madera de eucalipto certificada FSC®', tapizado: 'Lino 100% natural premium', relleno: 'Espuma HR + plumón reciclado', sostenibilidad: 'Materiales 100% reciclables'
		});
	}
}

class MesaNocheAconcagua extends Producto {
	constructor() {
		super('Mesa de Noche Aconcagua', 'Mesa de noche con cajón oculto y repisa inferior en roble certificado FSC®. Su diseño limpio y funcional permite convivir con diferentes estilos de dormitorio, ofreciendo almacenamiento discreto y elegante.', '$ 390.000', {
			medidas: '45 × 35 × 60 cm', materiales: 'Roble macizo FSC®, herrajes soft-close', acabado: 'Barniz mate de poliuretano', almacenamiento: '1 cajón + repisa inferior', caracteristicas: 'Cajón con cierre suave'
		});
	}
}

class MesaCentroAraucaria extends Producto {
	constructor() {
		super('Mesa de Centro Araucaria', 'Mesa de centro con sobre circular de mármol Patagonia y base de tres patas en madera de nogal. Su diseño minimalista se convierte en el punto focal perfecto para cualquier sala de estar contemporánea.', '$ 560.000', {
			medidas: '90 × 90 × 45 cm', materiales: 'Sobre de mármol Patagonia, patas de nogal', acabado: 'Mármol pulido, aceite natural en madera', peso: '42 kg', cargaMaxima: '25 kg distribuidos'
		});
	}
}

class SillonCopacabana extends Producto {
	constructor() {
		super('Sillón Copacabana', 'Sillón lounge en cuero cognac con base giratoria en acero Burnt Sienna. Inspirado en la estética brasileña moderna de los 60, combina comodidad excepcional con un diseño icónico.', '$ 650.000', {
			medidas: '90 × 85 × 95 cm', materiales: 'Cuero curtido vegetal, acero pintado', acabado: 'Cuero anilina premium', rotacion: '360° silenciosa y suave', garantia: '10 años en estructura'
		});
	}
}

class ButacaMendoza extends Producto {
	constructor() {
		super('Butaca Mendoza', 'Butaca tapizada en bouclé Dusty Rose con base de madera de guatambú. El respaldo curvo abraza el cuerpo y ofrece máximo confort, mientras que su diseño orgánico aporta calidez y sofisticación.', '$ 600.000', {
			medidas: '80 × 75 × 85 cm', materiales: 'Guatambú macizo, tela bouclé', acabado: 'Cera vegetal, tapizado premium', tapizado: 'Repelente al agua y manchas', confort: 'Espuma alta densidad'
		});
	}
}

class BibliotecaRecoleta extends Producto {
	constructor() {
		super('Biblioteca Recoleta', 'Sistema modular de estantes abierto que combina estructura de acero Sage Green y repisas en roble claro. Perfecta para colecciones y objetos de diseño, su diseño versátil se adapta a cualquier espacio contemporáneo.', '$ 980.000', {
			medidas: '100 × 35 × 200 cm', materiales: 'Estructura de acero, estantes de roble', acabado: 'Laca mate ecológica', capacidad: '45 kg por estante', modulares: '5 estantes ajustables'
		});
	}
}

class AparadorUspallata extends Producto {
	constructor() {
		super('Aparador Uspallata', 'Aparador de seis puertas fabricado en nogal sostenible con tiradores metálicos en acabado latón. Su silueta minimalista realza el veteado natural de la madera, creando una pieza que combina funcionalidad y elegancia atemporal.', '$ 1.200.000', {
			medidas: '180 × 45 × 75 cm', materiales: 'Nogal macizo FSC®, herrajes de latón', acabado: 'Aceite natural ecológico', peso: '68 kg', capacidad: '6 compartimentos interiores'
		});
	}
}

//Inicialización de las categorías de productos con sus respectivas etiquetas

const categorias = {
    'Silla de Trabajo Belgrano': 'Estudio',
    'Escritorio Costa': 'Estudio',
    'Sillas Córdoba': 'Comedor',
    'Mesa Comedor Pampa': 'Comedor',
    'Sofá Patagonia': 'Living',
    'Mesa de Noche Aconcagua': 'Dormitorio',
    'Mesa de Centro Araucaria': 'Living',
    'Sillón Copacabana': 'Living',
    'Butaca Mendoza': 'Living',
    'Biblioteca Recoleta': 'Almacenamiento',
    'Aparador Uspallata': 'Almacenamiento'
};

//Inicialización del array de productos con instancias de cada clase específica

const productos = [
	new SillaTrabajoBelgrano(), new EscritorioCosta(), new SillasCordoba(),
	new MesaComedorPampa(), new SofaPatagonia(), new MesaNocheAconcagua(),
	new MesaCentroAraucaria(), new SillonCopacabana(), new ButacaMendoza(),
	new BibliotecaRecoleta(), new AparadorUspallata()
];

//Exportación de los productos y categorías para su uso en otros módulos
export { productos, categorias };
