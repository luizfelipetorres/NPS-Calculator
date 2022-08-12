export class Calculator {
    constructor(promotors, passives, detractors) {
        this._promotors = Number.parseInt(promotors)
        this._passives = Number.parseInt(passives)
        this._detractors = Number.parseInt(detractors)
        this._total = this._promotors + this._passives + this._detractors
    }

    getNps = () => Number.parseFloat(
        ((this._promotors - this._detractors) / this._total * 100)
            .toFixed(2)
    )

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
}