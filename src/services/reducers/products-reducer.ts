import { countPages } from "../../utils/calculate-utils"
import { PRODUCTS_BRAND_CHANGE, PRODUCTS_INIT, PRODUCTS_NAME_CHANGE, PRODUCTS_PAGE_CHANGE, PRODUCTS_PRICE_CHANGE } from "../constants/products-constants"

export type TProduct = {
    id: string,
    brand: string,
    product: string,
    price: number
}

type TProductsState = {
    products: TProduct[],
    pageNumber: number,
    pageCount: number,
    minPrice: number,
    maxPrice: number,
    brands: string[],
    priceFilter: number,
    brandFilter: string[],
    nameFilter: string
}

type TProductsInitAction = {
    type: typeof PRODUCTS_INIT,
    products: TProduct[]
}

type TProductsPriceChangeAction = {
    type: typeof PRODUCTS_PRICE_CHANGE,
    price: number
}

type TProductsBrandChangeAction = {
    type: typeof PRODUCTS_BRAND_CHANGE,
    brand: string[]
}

type TProductsNameChangeAction = {
    type: typeof PRODUCTS_NAME_CHANGE,
    name: string
}

type TProductsPageChangeAction = {
    type: typeof PRODUCTS_PAGE_CHANGE,
    page: number
}

type TProductsActions = TProductsInitAction | TProductsPriceChangeAction | TProductsBrandChangeAction | TProductsNameChangeAction | TProductsPageChangeAction

const defaultState: TProductsState = {
    products: [],
    pageNumber: 1,
    pageCount: 1,
    minPrice: 0,
    maxPrice: 0,
    brands: [],
    priceFilter: 0,
    brandFilter: [],
    nameFilter: ''
}

export function productsReducer(state = defaultState, action: TProductsActions): TProductsState {
    switch (action.type) {
        case PRODUCTS_INIT: {
            const pageCount = countPages(action.products.length)
            return {
                ...state, products: action.products, pageCount
            }
        }

        case PRODUCTS_PRICE_CHANGE: {
            return {
                ...state, priceFilter: action.price
            }
        }

        case PRODUCTS_BRAND_CHANGE: {
            return {
                ...state, brandFilter: action.brand
            }
        }

        case PRODUCTS_NAME_CHANGE: {
            return {
                ...state, nameFilter: action.name
            }
        }

        case PRODUCTS_PAGE_CHANGE: {
            return {
                ...state, pageNumber: action.page
            }
        }

        default:
            return state
    }
}