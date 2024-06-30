//! Función para calcular el IMC (Índice de Masa Corporal)

alert('Esta es una calculadora para obtener tu IMC (Indice de Masa Corporal)')

function calculateBMI(weight, heightCm) {
    let heightMts = heightCm / 100;
    return weight / (heightMts * heightMts);
}

function categoriesBMI(bmi) {
    if (bmi <= 18.5) {
        return 'Bajo peso';
    } else if (bmi >= 18.6 && bmi <= 24.9) {
        return 'Peso normal';
    } else if (bmi >= 25 && bmi <= 29.9) {
        return 'Sobrepeso';
    } else if (bmi >= 30 && bmi <= 34.9) {
        return 'Obesidad';
    } else {
        return 'Obesidad severa';
    }
}

function decimal(numero) {
    return numero.toLocaleString('es-AR', { minimumFractionDigits: 1, maximumFractionDigits: 1 })
}

function finalResult() {
    alert('Para obtener el resultado necesitaremos tu peso y estatura');

    let options = parseInt(prompt('Ingresa 1 para continuar. \n Ingrese 2 para salir'));

    if (isNaN(options)) {
        alert('Por favor ingresa una opción válida')
    } else if (options === 1) {
        let weight = parseFloat(prompt('Ingresa tu peso en kilogramos, sin puntos ni comas'));

        if (isNaN(weight) || weight <= 0) {
            alert('Ingresa un valor válido');
        } else {
            let height = parseFloat(prompt('Ingresa tu altura en centímetros, sin puntos ni comas'));

            if (isNaN(height) || height <= 0) {
                alert('Ingresa un valor válido');
            } else {
                function resultBMI(weight, height) {
                    let bmi = calculateBMI(weight, height);
                    let category = categoriesBMI(bmi);

                    alert(`Tu IMC es ${decimal(bmi)}, lo que indica que tienes ${category}`);
                }
                resultBMI(weight, height);
            }
        }
    } else if (options === 2) {
        alert('Hasta luego');
    } else {
        alert('Por favor ingresa una opción válida');
    }
}

finalResult();