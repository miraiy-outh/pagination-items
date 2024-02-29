import { Box, Pagination } from '@mui/material'
import { Filter } from './filter/filter'
import { Products } from './products/products'
import { useDispatch, useSelector } from '../../hooks/redux-hooks'
import { PRODUCTS_PAGE_CHANGE } from '../../services/constants/products-constants'
import { productsPageCountSelector, productsPageNumberSelector } from '../../services/selectors/products-selectors'
import { ChangeEvent } from 'react'

export function ProductList() {
    const pageCount = useSelector(productsPageCountSelector)
    const dispatch = useDispatch()
    const handlePageChange = (event: ChangeEvent<unknown>, newPage: number) => {
        dispatch({
            type: PRODUCTS_PAGE_CHANGE,
            page: newPage
        })
    };

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
                    count={pageCount}
                    size="large"
                    onChange={handlePageChange}
                />
            </Box>

            <Filter></Filter>
        </Box>
    )
}