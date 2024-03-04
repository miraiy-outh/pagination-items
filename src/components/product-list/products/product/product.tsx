import { Card, CardContent, Typography } from '@mui/material'
import { TProduct } from '../../../../services/reducers/products-reducer'

export function Product(props: TProduct) {
    const { id, brand, product, price } = props;

    return (
        <Card
            variant='outlined'
            className='product'
            sx={{
                width: 360,
                height: 200
            }}
        >
            <CardContent
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                }}
            >
                <Typography
                    variant="h6"
                    color='text.primary'
                >
                    {product}
                </Typography>

                <Typography
                    variant="caption"
                    color='text.primary'
                >
                    {id}
                </Typography>
                <Typography
                    variant="body1"
                    color='text.primary'
                    fontWeight='bold'
                >
                    {brand}
                </Typography>
                <Typography
                    variant="h5"
                    color='primary'
                    fontWeight='bold'
                >
                    {price}
                </Typography>
            </CardContent>
        </Card>
    )
}