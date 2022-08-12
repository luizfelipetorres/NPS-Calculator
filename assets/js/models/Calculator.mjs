export class Calculator {
    constructor(promotors, passives, detractors) {
        this._promotors = Number.parseInt(promotors)
        this._passives = Number.parseInt(passives)
        this._detractors = Number.parseInt(detractors)
        this._total = this._promotors + this._passives + this._detractors
        this.hasError()
    }

    getNps = () => ((this._promotors - this._detractors) / this._total * 100)
        .toFixed(2)


    getTotal = () => this._total

    getZone = () => {
        const NPS = this.getNps()

        let zone = NPS >= 75
            ? 1
            : NPS >= 50
                ? 2
                : NPS >= 0
                    ? 3
                    : 4

        switch (zone) {
            case 1:
                return { zone: 'Excelência', color: 'blue' }
            case 2:
                return { zone: 'Qualidade', color: 'green' }

            case 3:
                return { zone: 'Aperfeiçoamento', color: 'darkorange' }

            case 4:
                return { zone: 'Crítica', color: 'red' }

            default:
                throw new Error("Valor de NPS inválido!");
        }
    }

    hasError = _ => {
        console.log(this)
        if (isNaN(this._detractors) || isNaN(this._passives) || isNaN(this._promotors))
            throw new Error("Todos os campos precisam ser preenchidos")

        else if (this._detractors === 0 && this._passives === 0 && this._promotors === 0)
            throw new Error("Usuário sem notas! NPS não será calculado")
    }
}