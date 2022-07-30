//Inputs
const detrator = document.getElementById('input-detrator')
const neutro = document.getElementById('input-neutro')
const promotor = document.getElementById('input-promotor')
const checkboxMeta = document.getElementById('cbMeta')
const sectionMeta = document.getElementById('meta-values')

//Outputs
const fieldNps = document.getElementById('resultado-nps')

function calcular(){
    let d = parseInt(detrator.value)
    let n = parseInt(neutro.value)
    let p = parseInt(promotor.value)

    let total = d + n + p
    let nps = ((p - d) / total) * 100
    
    fieldNps.setAttribute('value', nps + '%')
}

function showMeta(){
    checkboxMeta.checked ? 
        sectionMeta.style.display = 'flex' : 
        sectionMeta.style.display = 'none'
}