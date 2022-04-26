import { DataFormatter } from "./data-formatter.helper"

export class CpfFormatter implements DataFormatter {
    format(cpf: string): string {
        return cpf.slice(0, 3) + '.' + cpf.slice(3, 6) + '.' + cpf.slice(6, 9) + '-' + cpf.slice(9)
    }
}