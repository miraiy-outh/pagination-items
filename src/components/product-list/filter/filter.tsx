import { Box, Button, Card, CardContent, Typography } from '@mui/material'
import { PriceFilter } from './price-filter/price-filter'
import { BrandFilter } from './brand-filter/brand-filter'
import { NameFilter } from './name-filer/name-filter'

export function Filter() {
    return (
        <Card
            className='filter'
            sx={{ minWidth: 300 }}
        >
            <CardContent>
                <Typography
                    marginBottom={3}
                    variant="h5"
                    color='text.primary'
                >Фильтр</Typography>
                <Box
                    display='flex'
                    flexDirection='column'
                    gap={4}
                >
                    <PriceFilter></PriceFilter>
                    <BrandFilter></BrandFilter>
                    <NameFilter></NameFilter>
                </Box>

                <Button
                    style={{ marginTop: '48px' }}
                    variant='contained'
                    size='large'
                >Применить</Button>
            </CardContent>
        </Card>
    )
}