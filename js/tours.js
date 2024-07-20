let set_id = 1;

class Tour {
    constructor(actividad, precio, duracion, categoria) {

        let categorias = [
            'Turismo Cultural',
            'Turismo Aventura',
            'Turismo Gastronómico',
            'Turismo Acuático'
        ]

        this.id = set_id++
        this.actividad = actividad,
        this.precio = precio,
        this.duracion = duracion,
        this.categoria = categorias[categoria]
    }
}

let tours = [
    new Tour('City tour por Reikiavik', 30, '2 horas', 0),
    new Tour('Recorrido a pie por el folclore de Reikiavik', 28, '1 hora 30 min', 0),
    new Tour('Entrada al espectáculo de lava de Reikiavik', 25, '1 hora', 0),
    new Tour('Islandia Food Tour', 85, '3 horas', 2),
    new Tour('Aventura gourmet en scooter eléctrico', 100, '2 horas 30 min', 2),
    new Tour('Snorkel en Silfra - Fotos bajo el agua y chocolate caliente', 140, '5 horas', 3),
    new Tour('Avistamiento de ballenas desde Reikiavik', 65, '2 horas', 3),
    new Tour('Rafting desde Hafgrimssradir', 120, '4 horas', 3),
    new Tour('Excursión al Círculo Dorado, laguna Sky y cráter Kerid', 150, '10 horas', 1),
    new Tour('Cueva de hielo y Costa Sur: Caminata por el glaciar', 320, '2 días', 1),
    new Tour('Excursión a la península de Snaefellsjokul', 120, '12 horas', 1),
    new Tour('Costa sur desde Reikiavik', 80, '11 horas', 1),
]