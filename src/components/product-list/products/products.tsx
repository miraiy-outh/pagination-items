import { Box } from '@mui/material'
import { Product } from './product/product'
import { productsSelector } from '../../../services/selectors/products-selectors'
import { useSelector } from '../../../hooks/redux-hooks'

export function Products() {
    const products = useSelector(productsSelector)

    return (
        <Box
            display='flex'
            flexDirection='row'
            flexWrap='wrap'
            gap={2}
            className='products'
        >
            {products.map((product) => {
                return <Product key={product.id} {...product}></Product>
            })}
        </Box>
    )
}