import { DataFormatter } from "./data-formatter.helper"

export class DateFormatter implements DataFormatter {
    format(date: string): string {
        const formattedDate = date.replace(/([0-9]{4})(-{1})([0-9]{2})(-{1})([0-9]{2})/gm, "$5$2$3$4$1").replace(/-/gm, '/')

        return formattedDate
    }
}