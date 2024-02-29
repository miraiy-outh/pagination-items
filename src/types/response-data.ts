import { TProduct } from "../services/reducers/products-reducer"

export type TResponseIds = {
    result: string[]
}


export type TResponseItems = {
    result: TProduct[]
}

export type TResponseFields<T> = {
    result: T[]
}

