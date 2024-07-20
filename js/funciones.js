class Funciones {
    constructor(tours) {
        this.tours = tours
    };

    filtrar_categoria() {

        let categorias = `Ingresa el número de la categoría que te interesa:\n\n 1. Turismo Cultural \n 2. Turismo Aventura \n 3. Turismo Gastronómico \n 4. Turismo Acuático \n `

        let opcion_categoria = parseInt(prompt(categorias));

        if (isNaN(opcion_categoria) || opcion_categoria <= 0 || opcion_categoria >= 5) {
            alert('Por favor ingresa una categoría válida');
        } else if (opcion_categoria === 1) {

            let tours_filtrados = this.tours.filter((tour) => tour.categoria === 'Turismo Cultural')

            let mensaje = 'TURISMO CULTURAL - Tours encontrados:\n\n';

            tours_filtrados.forEach((tour, index) => {
                mensaje += `${index + 1}. ${tour.actividad}\n Precio: ${tour.precio} USD \n Duración: ${tour.duracion}\n\n`
            });

            alert(mensaje)

        } else if (opcion_categoria === 2) {
            let tours_filtrados = this.tours.filter((tour) => tour.categoria === 'Turismo Aventura')

            let mensaje = 'TURISMO AVENTURA - Tours encontrados:\n\n';

            tours_filtrados.forEach((tour, index) => {
                mensaje += `${index + 1}. ${tour.actividad}\n Precio: ${tour.precio} USD \n Duración: ${tour.duracion}\n\n`
            });

            alert(mensaje)

        } else if (opcion_categoria === 3) {
            let tours_filtrados = this.tours.filter((tour) => tour.categoria === 'Turismo Gastronómico')

            let mensaje = 'TURISMO GASTRONÓMICO - Tours encontrados:\n\n';

            tours_filtrados.forEach((tour, index) => {
                mensaje += `${index + 1}. ${tour.actividad}\n Precio: ${tour.precio} USD \n Duración: ${tour.duracion}\n\n`
            });

            alert(mensaje)

        } else if (opcion_categoria === 4) {
            let tours_filtrados = this.tours.filter((tour) => tour.categoria === 'Turismo Acuático')

            let mensaje = 'TURISMO ACUÁTICO - Tours encontrados:\n\n';

            tours_filtrados.forEach((tour, index) => {
                mensaje += `${index + 1}. ${tour.actividad}\n Precio: ${tour.precio} USD \n Duración: ${tour.duracion}\n\n`
            });

            alert(mensaje)
        }
    }

    filtrar_precio() {

        let rango_precio = parseInt(prompt('Ingresa el monto máximo de tu presupuesto y te mostraremos todos los tours dentro de ese rango:\n'));

        if (isNaN(rango_precio) || rango_precio <= 0) {
            alert('Por favor ingresa un presupuesto válido');
        }

        let precio_filtrado = this.tours.filter((tour) => tour.precio <= rango_precio);

        let mensaje = `Tours encontrados para un presupuesto de hasta ${rango_precio} USD:\n\n`;

        precio_filtrado.forEach((tour, index) => {
            mensaje += `${index + 1}. ${tour.actividad}: ${tour.precio}\n`;
        });

        alert(mensaje)
    }
}