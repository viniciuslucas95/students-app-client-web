import { DataFormatter } from "./data-formatter.helper"

export class RgFormatter implements DataFormatter {
    format(rg: number): string {
        const data = rg.toString()

        return data.slice(0, 2) + '.' + data.slice(2, 5) + '.' + data.slice(5, 8) + '-' + data.slice(8)
    }
}