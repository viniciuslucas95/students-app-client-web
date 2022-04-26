export interface Student {
    name: string
    rg: number
    cpf: number
    class: string
    address: string
    birthdate: Date
}

export interface StudentsResult {
    students: Student[]
    results: number,
}