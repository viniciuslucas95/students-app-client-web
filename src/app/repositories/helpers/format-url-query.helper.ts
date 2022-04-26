import { QueryDto } from "../../dto/common.dto";

export function formatUrlQuery({ limit, offset }: QueryDto) {
    let string = ''

    if (limit) {
        string += `?limit=${limit}`

        if (offset) string += '&'
    }

    if (offset) {
        if (!limit) string += '?'

        string += `offset=${offset}`
    }

    return string
}