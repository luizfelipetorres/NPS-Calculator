//Inputs
const detrator = document.getElementById('input-detrator')
const neutro = document.getElementById('input-neutro')
const promotor = document.getElementById('input-promotor')
const checkboxMeta = document.getElementById('cbMeta')
const sectionMeta = document.getElementById('meta-values')
const fieldMetaCB = document.getElementById('cbMeta')
const fieldMetaValue = document.getElementById('meta-value')

detrator.addEventListener('focusin', function () { clearValues(detrator) })
neutro.addEventListener('focusin', function () { clearValues(neutro) })
promotor.addEventListener('focusin', function () { clearValues(promotor) })



//Outputs
const fieldNps = document.getElementById('resultado-nps')
const fieldTotal = document.getElementById('resultados-total')
const fieldZona = document.getElementById('resultados-zona')

function clearValues(obj) {
    obj.value == 0 ? obj.value = '' : ''
}

function inserirResultados(total, nps) {
    fieldTotal.setAttribute('value', total)
    fieldNps.setAttribute('value', nps.toFixed(2) + '%')

    let zona, cor
    if (nps >= 75){
        zona = 'Excelência'
        cor = 'blue'
    }else if (nps >= 50){
        zona = 'Qualidade'
        cor = 'green'
    }else if (nps >= 0){
        zona = 'Aperfeiçoamento'
        cor = 'darkorange'
    }else{
        zona = 'Crítica'
        cor = 'red'
    }

    fieldZona.setAttribute('value', zona)
    fieldZona.style.color = cor

}

function meta(){
    
}

function calcular() {

    try {
        if (detrator.value === '') throw RangeError("Valor inválido em detrator")
        if (neutro.value === '') throw RangeError("Valor inválido em neutro")
        if (promotor.value === '') throw RangeError("Valor inválido em detrator")

        if (fieldMetaCB.checked){
            if (fieldMetaValue === '') 
                throw new Error("Valor da metá inválido!")
            if (fieldMetaValue.value > 100 || fieldMetaValue.value < -100) 
                throw new Error("Valor da metá inválido!")
        }

        let d = parseInt(detrator.value)
        let n = parseInt(neutro.value)
        let p = parseInt(promotor.value)

        if (d === 0 &&
            n === 0 &&
            p === 0
        ) throw new Error("Sem nota")

        let total = d + n + p
        let nps = ((p - d) / total) * 100

        if (nps == NaN)
            throw new Error("Insira valores válidos!")
        else
            inserirResultados(total, nps)

    } catch (error) {
        alert(error)
    }
}

function showMeta() {
    if (checkboxMeta.checked)
        sectionMeta.style.visibility = 'visible'
    else {
        sectionMeta.style.visibility = 'hidden'
        sectionMeta.getElementsByTagName('input')[0].value = ''
    }
}
