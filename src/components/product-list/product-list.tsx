import { Box, Pagination } from '@mui/material'
import { Filter } from './filter/filter'
import { Products } from './products/products'

export function ProductList() {
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
                <Pagination count={10} size="large" />
            </Box>

            <Filter></Filter>
        </Box>
    )
}