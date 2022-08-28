export interface IRating {
    rate: number
    count: number
}

export interface IProduct {
    id?: number
    title: string
    price: number
    description: string
    category: string
    image: string
    rating?: IRating
}

export interface IAccessories {
    id?: number
    title: string
    price: number
    description: string
    category: string
    image: string
}

export interface IUser {
    name: string
    password: string
}