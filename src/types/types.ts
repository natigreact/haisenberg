export interface IRating {
  rate: number
  count: number
}

export interface IProduct {
  _id?: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating?: IRating
}

export interface IUser {
  name: string
  password: string
}

export interface INavigation {
  id: number
  name: string
  link: string
  current: boolean
}