import { Box } from '@mui/material'
import { Product } from './product/product'

export function Products() {
    return (
        <Box
            display='flex'
            flexDirection='row'
            flexWrap='wrap'
            gap={2}
            className='products'
        >

            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>

        </Box>
    )
}