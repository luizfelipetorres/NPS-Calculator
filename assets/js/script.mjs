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


detrator.addEventListener('focusin', function () { clearValues(detrator) })
neutro.addEventListener('focusin', function () { clearValues(neutro) })
promotor.addEventListener('focusin', function () { clearValues(promotor) })
btCalcular.addEventListener('click', () => calcular())

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
