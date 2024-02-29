import { TProduct } from "../services/reducers/products-reducer"

export type TResponseIds = {
    result: string[]
}

type TFields = string | null

export type TResponseItems = {
    result: TProduct[]
}

export type TResponseFields = {
    result: TFields[]
}

