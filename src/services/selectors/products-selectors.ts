import { RootState } from "../store";

export function productsSelector(state: RootState) {
    return state.productsData.products
}

export function productsPriceFilterSelector(state: RootState) {
    return state.productsData.filter.priceFilter
}

export function productsBrandFilterSelector(state: RootState) {
    return state.productsData.filter.brandFilter
}

export function productsPriceSelector(state: RootState) {
    return state.productsData.maxPrice
}

export function productsBrandSelector(state: RootState) {
    return state.productsData.brands
}


export function productsNameFilterSelector(state: RootState) {
    return state.productsData.filter.nameFilter
}

export function productsFiltersSelector(state: RootState) {
    return state.productsData.filter
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

export function productsIsLoadingSelector(state: RootState) {
    return state.productsData.isLoading
}

export function productsIsFilteredSelector(state: RootState) {
    return state.productsData.isFiltered
}