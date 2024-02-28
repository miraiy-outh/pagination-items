export type TResponseIds = {
    result: string[]
}

type TFields = string | null

export type TResponseItems = {
    result: {
        brand: TFields,
        id: string,
        price: number,
        product: string
    }
}

export type TResponseFields = {
    result: TFields[]
}

