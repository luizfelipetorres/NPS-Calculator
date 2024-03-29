import { Calculator } from './models/Calculator.mjs';

//Inputs
const detrator = document.getElementById('input-detrator')
const neutro = document.getElementById('input-neutro')
const promotor = document.getElementById('input-promotor')
const btCalcular = document.getElementById('btCalcular')
const checkboxMeta = document.getElementById('cbMeta')
const sectionMeta = document.getElementById('meta-values')
const fieldMetaCB = document.getElementById('cbMeta')
const fieldMetaValue = document.getElementById('meta-value')

//Outputs
const fieldNps = document.getElementById('resultado-nps')
const fieldTotal = document.getElementById('resultados-total')
const fieldZona = document.getElementById('resultados-zona')

let elements = [detrator, neutro, promotor]

elements.forEach(element => {
    element.addEventListener('focusin', function () { clearValues(element) })
    element.addEventListener('change', function () {
        if (element.value < 0) {
            alert("Valores menores que zero não são permitidos")
            element.value = 0
        }
    });
});

btCalcular.addEventListener('click', () => calcular())
checkboxMeta.addEventListener('change', _ => showMeta())

function clearValues(obj) {
    obj.value == 0 ? obj.value = '' : ''
}

function inserirResultados(total, nps, zone) {

    let { zone: zona, color: cor } = zone

    fieldTotal.setAttribute('value', total)
    fieldNps.setAttribute('value', nps + '%')
    fieldZona.setAttribute('value', zona)
    fieldZona.style.color = cor
}

function calcular() {

    try {
        let calc = new Calculator(promotor.value, neutro.value, detrator.value)
        inserirResultados(calc.getTotal(), calc.getNps(), calc.getZone())
        console.log(calc.getNps())

    } catch (e) {
        alert(e)
    }
}