import { Select, MenuItem, FormControl, Box, Typography, SelectChangeEvent } from '@mui/material';
import { useDispatch, useSelector } from '../../../../hooks/redux-hooks';
import { productsBrandFilterSelector, productsBrandsSelector } from '../../../../services/selectors/products-selectors';
import { PRODUCTS_BRAND_FILTER_CHANGE } from '../../../../services/constants/products-constants';

export function BrandFilter() {
    const brands = useSelector(productsBrandsSelector)
    const brandsFilter = useSelector(productsBrandFilterSelector)
    const dispatch = useDispatch()

    const handleChange = (event: SelectChangeEvent<typeof brandsFilter>) => {
        const currentBrands = event.target.value
        if (Array.isArray(currentBrands)) {
            dispatch({
                type: PRODUCTS_BRAND_FILTER_CHANGE,
                brand: currentBrands
            })
        }
    };

    return (
        <Box
            display='flex'
            flexDirection='column'
            gap={1}
            className='brand-filter'
        >
            <Typography variant="h6">
                Бренды
            </Typography>
            <FormControl sx={{ width: 240 }}>
                <Select
                    labelId="multiple-select-label"
                    id="multiple-select"
                    multiple
                    value={brandsFilter}
                    onChange={handleChange}
                >
                    {brands.map((brand) => {
                        return (
                            <MenuItem value={`${brand}`}>{brand}</MenuItem>
                        )
                    })}
                </Select>
            </FormControl>
        </Box>
    );
}
