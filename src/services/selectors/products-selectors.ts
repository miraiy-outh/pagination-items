import { RootState } from "../store";

export function productsSelector(state: RootState) {
    return state.productsData.products
}

export function productsPriceFilterSelector(state: RootState) {
    return state.productsData.priceFilter
}

export function productsBrandFilterSelector(state: RootState) {
    return state.productsData.brandFilter
}

export function productsPriceSelector(state: RootState) {
    return state.productsData.maxPrice
}

export function productsBrandSelector(state: RootState) {
    return state.productsData.brands
}


export function productsNameFilterSelector(state: RootState) {
    return state.productsData.nameFilter
}

export function productsPageNumberSelector(state: RootState) {
    return state.productsData.pageNumber
}

export function productsMaxPriceSelector(state: RootState) {
    return state.productsData.maxPrice
}

export function productsBrandsSelector(state: RootState) {
    return state.productsData.brands
}