import { Box } from '@mui/material'
import { Filter } from './filter/filter'
import { Products } from './products/products'

export function ProductList() {
    return (
        <Box
            display='flex'
            flexDirection='row'
            justifyContent='space-between'
            gap={2}
            sx={{ margin: '16px' }}
            className='product-list'
        >
            <Products></Products>
            <Filter></Filter>
        </Box>
    )
}