import { Card, CardContent, Typography } from '@mui/material'

export function Product() {
    return (
        <Card
            variant='outlined'
            className='product'
            sx={{
                width: 360,
                height: 160
            }}
        >
            <CardContent>
                <Typography
                    variant="h6"
                    color='text.primary'
                >
                    Золотое кольцо с бриллиантом
                </Typography>
                <Typography
                    variant="caption"
                    color='text.primary'
                >
                    1789ecf3-f81c-4f49-ada2-83804dcc74b0
                </Typography>
                <Typography
                    variant="body1"
                    color='text.primary'
                    fontWeight='bold'
                >
                    brand
                </Typography>
                <Typography
                    variant="h5"
                    color='primary'
                    fontWeight='bold'
                >
                    16700.0
                </Typography>
            </CardContent>
        </Card>
    )
}