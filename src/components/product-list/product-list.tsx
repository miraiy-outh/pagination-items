import { Box, Pagination } from '@mui/material'
import { Filter } from './filter/filter'
import { Products } from './products/products'
import { useDispatch } from '../../hooks/redux-hooks'
import { PRODUCTS_BRAND_CHANGE, PRODUCTS_INIT, PRODUCTS_PAGE_CHANGE, PRODUCTS_PRICE_CHANGE } from '../../services/constants/products-constants'
import { ChangeEvent, useEffect } from 'react'
import { getFields, getProductsIds, getProducts } from '../../api'
import { findMax } from '../../utils/calculate-utils'

export function ProductList() {
    const dispatch = useDispatch()
    const handlePageChange = (event: ChangeEvent<unknown>, newPage: number) => {
        dispatch({
            type: PRODUCTS_PAGE_CHANGE,
            page: newPage
        })
    };

    useEffect(() => {
        getProductsIds(1).then((data) => {
            const productsIds = data.result
            getProducts(productsIds, 1).then((data) => {
                const products = data.result
                const uniqueProducts = products.filter((product, index, array) => {
                    return !array.slice(0, index).some(prevProduct => prevProduct.id === product.id);
                });
                dispatch({
                    type: PRODUCTS_INIT,
                    products: uniqueProducts,
                })
            })
        })

        getFields<number>('price', 1).then((data) => {
            const prices = data.result
            const maxPrice = findMax(prices)
            dispatch({
                type: PRODUCTS_PRICE_CHANGE,
                price: maxPrice
            })
        })

        getFields<string>('brand', 1).then((data) => {
            const brands = data.result
            brands.sort
            const uniqueBrands = brands.filter((value, index, array) => {
                if (value === null) array[index] = 'Нет бренда'
                return array.indexOf(value) === index;
            });
            console.log(uniqueBrands)
            dispatch({
                type: PRODUCTS_BRAND_CHANGE,
                brand: uniqueBrands
            })
        })
    }, [])

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
            <Box
                display='flex'
                flexDirection='column'
                justifyContent='space-between'
                alignItems='center'
                gap={6}
            >
                <Products></Products>
                <Pagination
                    count={10}
                    size="large"
                    onChange={handlePageChange}
                />
            </Box>

            <Filter></Filter>
        </Box>
    )
}