//! App venta de tours

const datos = new Funciones(tours)

alert('¡Bienvenido/a a Islandia Travel! En este sitio podrás comprar los mejores tours para recorrer y conocer este inscreíble país')

let menu_opciones = `Por favor ingresa el número de la opción que desees:

1. Filtrar por categoría
2. Filtrar por rango de precio
`

while (true) {
    let opcion = parseInt(prompt(menu_opciones));

    if (isNaN(opcion) || opcion <= 0 || opcion >= 3) {
        alert('Por favor ingresa un valor válido')

    } else if (opcion === 1) {
        datos.filtrar_categoria();

    } else if (opcion === 2) {
        datos.filtrar_precio();
    }

    if (confirm('¿Desea salir de la página?')) {
        break
    }
}