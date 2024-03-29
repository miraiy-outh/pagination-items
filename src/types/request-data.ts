type TAction = "filter" | "get_ids" | "get_items" | "get_fields"
export type TField = "brand" | "id" | "price" | "product"

export type TRequestData = {
    action: TAction,
    params: {
        offset?: number,
        brand?: string,
        product?: string,
        limit?: number,
        price?: number,
        field?: TField
        ids?: string[]
    }
}