export interface IStudent {
    name: string
    rg: number
    cpf: number
    age: number
    class: string
    address: string
}

export interface IStudentsResult {
    students: IStudent[]
    results: number,
}