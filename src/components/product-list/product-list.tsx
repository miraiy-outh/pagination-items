import { Box, CircularProgress, Pagination } from '@mui/material'
import { Filter } from './filter/filter'
import { Products } from './products/products'
import { useDispatch, useSelector } from '../../hooks/redux-hooks'
import { PRODUCTS_BRAND_CHANGE, PRODUCTS_INIT, PRODUCTS_LOADING_CHANGE, PRODUCTS_PAGE_CHANGE, PRODUCTS_PRICE_CHANGE } from '../../services/constants/products-constants'
import { ChangeEvent, useEffect } from 'react'
import { getFields, getProductsIds, getProducts } from '../../api'
import { findMax } from '../../utils/calculate-utils'
import { productsIsFilteredSelector, productsIsLoadingSelector, productsPageNumberSelector } from '../../services/selectors/products-selectors'

export function ProductList() {
    const dispatch = useDispatch()
    const pageNumber = useSelector(productsPageNumberSelector)
    const isLoading = useSelector(productsIsLoadingSelector)
    const isFiltered = useSelector(productsIsFilteredSelector)
    const handlePageChange = (event: ChangeEvent<unknown>, newPage: number) => {
        dispatch({
            type: PRODUCTS_PAGE_CHANGE,
            page: newPage
        })
        scrollToTop()
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        getFields<number>('price').then((data) => {
            const prices = data.result
            const maxPrice = findMax(prices)
            dispatch({
                type: PRODUCTS_PRICE_CHANGE,
                price: maxPrice
            })
        })

        getFields<string>('brand').then((data) => {
            const brands = data.result
            brands.sort
            const uniqueBrands = brands.filter((value, index, array) => {
                if (value === null) array[index] = 'Нет бренда'
                return array.indexOf(value) === index;
            });
            dispatch({
                type: PRODUCTS_BRAND_CHANGE,
                brand: uniqueBrands
            })
        })
    }, [])

    useEffect(() => {
        if (!isFiltered) {
            dispatch({
                type: PRODUCTS_LOADING_CHANGE,
                isLoading: true
            })
            getProductsIds(pageNumber).then((data) => {
                const productsIds = data.result
                getProducts(productsIds).then((data) => {
                    const products = data.result
                    const uniqueProducts = products.filter((product, index, array) => {
                        return !array.slice(0, index).some(prevProduct => prevProduct.id === product.id);
                    });
                    console.log(uniqueProducts)
                    dispatch({
                        type: PRODUCTS_INIT,
                        products: uniqueProducts,
                    })
                    dispatch({
                        type: PRODUCTS_LOADING_CHANGE,
                        isLoading: false
                    })
                })
                    .catch(() => {
                        const productsIds = data.result
                        getProducts(productsIds).then((data) => {
                            const products = data.result
                            const uniqueProducts = products.filter((product, index, array) => {
                                return !array.slice(0, index).some(prevProduct => prevProduct.id === product.id);
                            });
                            dispatch({
                                type: PRODUCTS_INIT,
                                products: uniqueProducts,
                            })
                            dispatch({
                                type: PRODUCTS_LOADING_CHANGE,
                                isLoading: false
                            })
                        })
                    })
            })
        }

    }, [pageNumber])

    return (
        <Box
            display='flex'
            flexDirection='row'
            justifyContent='space-between'
            alignItems='flex-start'
            gap={2}
            sx={{ margin: '16px' }}
            className='product-list'
        >
            {isLoading ? <CircularProgress></CircularProgress> :
                <Box
                    display='flex'
                    flexDirection='column'
                    justifyContent='flex-end'
                    alignItems='center'
                    gap={6}
                >
                    <Products></Products>
                    <Pagination
                        count={pageNumber + 1}
                        page={pageNumber}
                        size="large"
                        onChange={handlePageChange}
                    />

                </Box>
            }

            <Filter></Filter>
        </Box>
    )
}