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

export function productsNameFilterSelector(state: RootState) {
    return state.productsData.nameFilter
}

export function productsPageCountSelector(state: RootState) {
    return state.productsData.pageCount
}

export function productsPageNumberSelector(state: RootState) {
    return state.productsData.pageNumber
}

export function productsMinPriceSelector(state: RootState) {
    return state.productsData.minPrice
}

export function productsMaxPriceSelector(state: RootState) {
    return state.productsData.maxPrice
}

export function productsBrandsSelector(state: RootState) {
    return state.productsData.brands
}