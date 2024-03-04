import { PRODUCTS_BRAND_CHANGE, PRODUCTS_BRAND_FILTER_CHANGE, PRODUCTS_FILTERING_CHANGE, PRODUCTS_INIT, PRODUCTS_LOADING_CHANGE, PRODUCTS_NAME_FILTER_CHANGE, PRODUCTS_FILTER_NAME_CHANGE, PRODUCTS_PAGE_CHANGE, PRODUCTS_PRICE_CHANGE, PRODUCTS_PRICE_FILTER_CHANGE } from "../constants/products-constants"

export type TProduct = {
    id: string,
    brand: string,
    product: string,
    price: number
}

type TFilter = {
    priceFilter: number,
    brandFilter: string,
    nameFilter: string
}

type TFilterName = 'price' | 'brand' | 'name' | ''

type TProductsState = {
    products: TProduct[],
    pageNumber: number,
    maxPrice: number,
    brands: string[],
    filter: TFilter,
    filterName: TFilterName,
    isLoading: boolean
    isFiltered: boolean
}

type TProductsInitAction = {
    type: typeof PRODUCTS_INIT,
    products: TProduct[],
}


type TProductsPriceFilterChangeAction = {
    type: typeof PRODUCTS_PRICE_FILTER_CHANGE,
    price: number
}

type TProductsBrandFilterChangeAction = {
    type: typeof PRODUCTS_BRAND_FILTER_CHANGE,
    brand: string
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
    type: typeof PRODUCTS_NAME_FILTER_CHANGE,
    name: string
}

type TProductsPageChangeAction = {
    type: typeof PRODUCTS_PAGE_CHANGE,
    page: number
}

type TProductsLoadingChangeAction = {
    type: typeof PRODUCTS_LOADING_CHANGE,
    isLoading: boolean
}

type TProductsFilteringChangeAction = {
    type: typeof PRODUCTS_FILTERING_CHANGE
}

type TProductsNameFilteringChangeAction = {
    type: typeof PRODUCTS_FILTER_NAME_CHANGE,
    filterName: TFilterName
}

type TProductsActions = TProductsInitAction | TProductsPriceChangeAction | TProductsBrandChangeAction | TProductsPriceFilterChangeAction | TProductsBrandFilterChangeAction | TProductsNameChangeAction | TProductsPageChangeAction | TProductsLoadingChangeAction | TProductsFilteringChangeAction | TProductsNameFilteringChangeAction

const defaultState: TProductsState = {
    products: [],
    pageNumber: 1,
    maxPrice: 0,
    brands: [],
    filter: {
        priceFilter: 0,
        brandFilter: '',
        nameFilter: ''
    },
    filterName: '',
    isLoading: true,
    isFiltered: false
}

export function productsReducer(state = defaultState, action: TProductsActions): TProductsState {
    switch (action.type) {
        case PRODUCTS_INIT: {
            return {
                ...state,
                products: action.products,
                isLoading: false
            }
        }

        case PRODUCTS_PRICE_FILTER_CHANGE: {
            return {
                ...state,
                filter: {
                    ...state.filter,
                    priceFilter: action.price
                }
            }
        }

        case PRODUCTS_BRAND_FILTER_CHANGE: {
            return {
                ...state,
                filter: {
                    ...state.filter,
                    brandFilter: action.brand
                }
            }
        }

        case PRODUCTS_NAME_FILTER_CHANGE: {
            return {
                ...state,
                filter: {
                    ...state.filter,
                    nameFilter: action.name
                }
            }
        }

        case PRODUCTS_PRICE_CHANGE: {
            return {
                ...state, maxPrice: action.price
            }
        }

        case PRODUCTS_BRAND_CHANGE: {
            return {
                ...state, brands: action.brand
            }
        }

        case PRODUCTS_PAGE_CHANGE: {
            return {
                ...state, pageNumber: action.page
            }
        }

        case PRODUCTS_LOADING_CHANGE: {
            return {
                ...state, isLoading: action.isLoading
            }
        }

        case PRODUCTS_FILTERING_CHANGE: {
            return {
                ...state, isFiltered: !state.isFiltered
            }
        }

        case PRODUCTS_FILTER_NAME_CHANGE: {
            return {
                ...state, filterName: action.filterName
            }
        }

        default:
            return state
    }
}