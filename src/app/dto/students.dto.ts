export interface Student {
    name: string
    rg: number
    cpf: string
    class: string
    address: string
    birthdate: string
}

export interface StudentsResult {
    students: Student[]
    results: number,
}